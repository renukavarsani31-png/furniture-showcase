const express = require('express');
const router = express.Router();
const db = require('../config/database');
const upload = require('../middleware/upload');
const { uploadToCloudinary, deleteFromCloudinary } = require('../config/cloudinary');
const { authMiddleware, isAdmin } = require('../middleware/auth');

// UPLOAD images to project (admin only)
router.post('/upload/:projectId', authMiddleware, isAdmin, upload.array('images', 10), async (req, res) => {
  try {
    const { projectId } = req.params;
    
    // Check if project exists
    const project = await db('projects').where({ id: projectId }).first();
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Upload files to Cloudinary
    const uploadPromises = req.files.map(async (file) => {
      const { filename, url } = await uploadToCloudinary(file, 'projects');

      return {
        project_id: projectId,
        filename,
        original_name: file.originalname,
        r2_key: filename,
        r2_url: url,
        mime_type: file.mimetype,
        size: file.size,
      };
    });

    const imagesData = await Promise.all(uploadPromises);

    // Insert into database
    const imageIds = await db('images').insert(imagesData).returning('id');

    // Get inserted images
    const images = await db('images').whereIn('id', imageIds);

    res.status(201).json({
      message: 'Images uploaded successfully',
      images,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET images for a project
router.get('/project/:projectId', async (req, res) => {
  try {
    const images = await db('images')
      .where({ project_id: req.params.projectId })
      .orderBy('display_order', 'asc')
      .orderBy('created_at', 'asc');

    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE image (admin only)
router.put('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { display_order, is_primary } = req.body;

    const updated = await db('images')
      .where({ id: req.params.id })
      .update({
        display_order,
        is_primary,
        updated_at: db.fn.now(),
      });

    if (!updated) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // If setting as primary, unset other primary images in the same project
    if (is_primary) {
      const image = await db('images').where({ id: req.params.id }).first();
      await db('images')
        .where({ project_id: image.project_id })
        .whereNot({ id: req.params.id })
        .update({ is_primary: false });
    }

    const image = await db('images').where({ id: req.params.id }).first();
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE image (admin only)
router.delete('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const image = await db('images').where({ id: req.params.id }).first();
    
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Delete from Cloudinary
    await deleteFromCloudinary(image.r2_key);

    // Delete from database
    await db('images').where({ id: req.params.id }).delete();

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

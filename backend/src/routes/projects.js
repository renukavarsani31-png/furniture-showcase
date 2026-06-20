const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { authMiddleware, isAdmin } = require('../middleware/auth');

// GET all published projects (public)
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit = 50, offset = 0 } = req.query;

    let query = db('projects')
      .join('categories', 'projects.category_id', 'categories.id')
      .where('projects.is_published', true)
      .select(
        'projects.*',
        'categories.name as category_name',
        'categories.slug as category_slug'
      )
      .orderBy('projects.created_at', 'desc')
      .limit(parseInt(limit))
      .offset(parseInt(offset));

    if (category) {
      query = query.where('categories.slug', category);
    }

    if (featured === 'true') {
      query = query.where('projects.is_featured', true);
    }

    const projects = await query;

    // Get images for each project
    for (let project of projects) {
      project.images = await db('images')
        .where({ project_id: project.id })
        .orderBy('display_order', 'asc')
        .select('id', 'filename', 'r2_url', 'width', 'height', 'is_primary');
    }

    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single project by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const project = await db('projects')
      .join('categories', 'projects.category_id', 'categories.id')
      .where('projects.slug', req.params.slug)
      .where('projects.is_published', true)
      .select(
        'projects.*',
        'categories.name as category_name',
        'categories.slug as category_slug'
      )
      .first();

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Get images
    project.images = await db('images')
      .where({ project_id: project.id })
      .orderBy('display_order', 'asc');

    // Increment view count
    await db('projects')
      .where({ id: project.id })
      .increment('view_count', 1);

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE project (admin only)
router.post('/', authMiddleware, isAdmin, async (req, res) => {
  try {
    const {
      title,
      description,
      category_id,
      location,
      client_name,
      completion_date,
      is_featured,
    } = req.body;

    // Generate slug
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    const [id] = await db('projects')
      .insert({
        title,
        slug,
        description,
        category_id,
        location,
        client_name,
        completion_date,
        is_featured: is_featured || false,
      })
      .returning('id');

    const project = await db('projects').where({ id }).first();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE project (admin only)
router.put('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const {
      title,
      description,
      category_id,
      location,
      client_name,
      completion_date,
      is_featured,
      is_published,
    } = req.body;

    const updated = await db('projects')
      .where({ id: req.params.id })
      .update({
        title,
        description,
        category_id,
        location,
        client_name,
        completion_date,
        is_featured,
        is_published,
        updated_at: db.fn.now(),
      });

    if (!updated) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const project = await db('projects').where({ id: req.params.id }).first();
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE project (admin only)
router.delete('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const deleted = await db('projects')
      .where({ id: req.params.id })
      .delete();

    if (!deleted) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

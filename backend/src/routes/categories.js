const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { authMiddleware, isAdmin } = require('../middleware/auth');

// GET all active categories (public)
router.get('/', async (req, res) => {
  try {
    const categories = await db('categories')
      .where({ is_active: true })
      .orderBy('display_order', 'asc')
      .select('id', 'name', 'slug', 'description');

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single category by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const category = await db('categories')
      .where({ slug: req.params.slug, is_active: true })
      .first();

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE category (admin only)
router.post('/', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name, description, display_order } = req.body;
    
    // Generate slug
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const [id] = await db('categories').insert({
      name,
      slug,
      description,
      display_order: display_order || 0,
    }).returning('id');

    const category = await db('categories').where({ id }).first();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE category (admin only)
router.put('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name, description, display_order, is_active } = req.body;
    
    const updated = await db('categories')
      .where({ id: req.params.id })
      .update({
        name,
        description,
        display_order,
        is_active,
        updated_at: db.fn.now(),
      });

    if (!updated) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const category = await db('categories').where({ id: req.params.id }).first();
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE category (admin only)
router.delete('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const deleted = await db('categories')
      .where({ id: req.params.id })
      .delete();

    if (!deleted) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

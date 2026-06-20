const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { authMiddleware, isAdmin } = require('../middleware/auth');

// CREATE inquiry (public - contact form)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message, project_id } = req.body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        error: 'Name, email, phone, and message are required' 
      });
    }

    const ip_address = req.ip || req.connection.remoteAddress;

    const [id] = await db('inquiries')
      .insert({
        name,
        email,
        phone,
        subject,
        message,
        project_id,
        ip_address,
        status: 'new',
      })
      .returning('id');

    res.status(201).json({
      message: 'Inquiry submitted successfully! We will contact you soon.',
      id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all inquiries (admin only)
router.get('/', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;

    let query = db('inquiries')
      .leftJoin('projects', 'inquiries.project_id', 'projects.id')
      .select(
        'inquiries.*',
        'projects.title as project_title'
      )
      .orderBy('inquiries.created_at', 'desc')
      .limit(parseInt(limit))
      .offset(parseInt(offset));

    if (status) {
      query = query.where('inquiries.status', status);
    }

    const inquiries = await query;
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single inquiry (admin only)
router.get('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const inquiry = await db('inquiries')
      .leftJoin('projects', 'inquiries.project_id', 'projects.id')
      .where('inquiries.id', req.params.id)
      .select(
        'inquiries.*',
        'projects.title as project_title'
      )
      .first();

    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    // Mark as read if status is 'new'
    if (inquiry.status === 'new') {
      await db('inquiries')
        .where({ id: req.params.id })
        .update({ status: 'read' });
    }

    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE inquiry status (admin only)
router.put('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { status, admin_notes } = req.body;

    const updated = await db('inquiries')
      .where({ id: req.params.id })
      .update({
        status,
        admin_notes,
        updated_at: db.fn.now(),
      });

    if (!updated) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    const inquiry = await db('inquiries').where({ id: req.params.id }).first();
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE inquiry (admin only)
router.delete('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const deleted = await db('inquiries')
      .where({ id: req.params.id })
      .delete();

    if (!deleted) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Conflict = require('../models/conflict');

// POST route for creating a new conflict
router.post('/', async (req, res) => {
  const { name, year, type, lat, lon } = req.body;
  try {
    const newConflict = new Conflict({ name, year, type, lat, lon });
    await newConflict.save();
    res.status(201).json(newConflict);
  } catch (error) {
    res.status(500).json({ error: 'Error creating conflict' });
  }
});

// GET route for fetching all conflicts
router.get('/', async (req, res) => {
  try {
    const conflicts = await Conflict.find({});
    res.status(200).json(conflicts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching conflicts' });
  }
});

module.exports = router;

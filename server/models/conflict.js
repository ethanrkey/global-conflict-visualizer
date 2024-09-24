const mongoose = require('mongoose');

// Define Conflict Schema
const conflictSchema = new mongoose.Schema({
  name: { type: String, required: true },
  yearStart: { type: Number, required: true },
  yearEnd: { type: Number, required: true },
  type: { type: String, enum: ['military', 'economic', 'geopolitical'], required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
});

// Create a Conflict model
const Conflict = mongoose.model('Conflict', conflictSchema);

module.exports = Conflict;

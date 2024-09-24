require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const conflictsRoutes = require('./routes/conflicts');  // Import conflict routes

const app = express();
app.use(bodyParser.json());  // To parse JSON requests

// MongoDB connection (replace with your actual MongoDB URI)
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the conflicts routes for `/api/conflicts`
app.use('/api/conflicts', conflictsRoutes);

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

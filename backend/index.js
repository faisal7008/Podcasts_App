const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRouter = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/contactsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Routes
app.use('/contacts', contactRouter);

// Start server
app.listen(9000, () => console.log('Server started'));

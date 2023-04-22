const Contact = require("../models/Contact");

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort("name");
    res.status(201).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get contact by id
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Create new contact
const addContact = async (req, res) => {
  const { name, phone } = req.body;

  try {
    if (!name || !phone) {
      res.status(400);
      throw new Error("Please enter all fields");
    }

    // check if user exits
    const userExists = await Contact.findOne({ phone });

    if (userExists) {
      res.status(400);
      throw new Error("Contact already exists");
    }

    const contact = new Contact({
      name,
      phone,
    });
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update contact
const updateContact = async (req, res) => {
  const { name, phone } = req.body;
  try {
    if (!name || !phone) {
      res.status(400);
      throw new Error("Please enter all fields");
    }

    // check if user exits
    const userExists = await Contact.findOne({ phone });

    if (userExists) {
      res.status(400);
      throw new Error("Contact already exists");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllContacts,
  getContact,
  addContact,
  updateContact,
  deleteContact,
};

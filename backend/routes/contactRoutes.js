const express = require("express");
const router = express.Router();
const { getAllContacts, addContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");

// http://localhost:9000/api/conversations

router.route('/').get(getAllContacts).post(addContact)
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;

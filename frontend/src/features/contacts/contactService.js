import axios from 'axios'

const API_URL = 'http://localhost:9000/contacts/'

// get all Contacts
const getContacts = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// get a Contact
const getContact = async (contactId) => {
  // console.log(contactId)
    const response = await axios.get(API_URL + contactId)
    return response.data
}

// add new Contact
const createContact = async (ContactData) => {
  const response = await axios.post(API_URL, ContactData)
  return response.data
}

// update a Contact
const updateContact = async (contactId, ContactData) => {
    // console.log(contactId)
    // console.log(ContactData)
    const response = await axios.put(API_URL + contactId, ContactData)
    return response.data
}

// delete a Contact
const deleteContact = async (contactId) => {
    const response = await axios.delete(API_URL + contactId)
    return response.data
}



const contactService = {
  getContacts,
  getContact,
  updateContact,
  createContact,
  deleteContact
}

export default contactService

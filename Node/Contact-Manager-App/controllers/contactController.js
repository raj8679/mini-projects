const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
// get all contacts 
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})
// create contact 
const createContact = asyncHandler(async(req, res) => {
    console.log("req body is - ", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400) 
        throw new Error("All fields are mandatory !")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact)
})
// get individual contact 
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})
// update contact 
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})
// delete contact 
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    await Contact.remove();

    res.status(200).json(contact)
})

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}
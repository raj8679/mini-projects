const asyncHandler = require("express-async-handler")
// get all contacts 
const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({msg: "Get all contacts"})
})
// create contact 
const createContact = asyncHandler(async(req, res) => {
    console.log("req body is - ", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400) 
        throw new Error("All fields are mandatory !")
    }
    
    res.status(201).json({msg: `Contact created`})
})
// get individual contact 
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({msg: `get individual contact ${req.params.id}`})
})
// update contact 
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({msg: `Contact updated of id ${req.params.id}`})
})
// delete contact 
const deleteContact = asyncHandler(async(req,res) => {
    res.status(200).json({msg: `Contact deleted of id ${req.params.id}`})
})

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}
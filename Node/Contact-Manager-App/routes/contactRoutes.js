const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    res.status(200).json({msg: "Get all contacts here"})
})

router.route("/").post((req, res) => {
    res.json({msg: "create contact"})
})

router.route("/:id").get((req,res) => {
    res.status(200).json({msg: `get contacts for ${req.params.id}`})
})

router.route("/:id").put((req, res) => {
    res.status(200).json({msg: `Update contact for ${req.params.id}`})
})

router.route("/:id").delete((req,res) => {
    res.status(200).json({msg: `Delete contact for ${req.params.id}`})
})
// router.route("/")

module.exports = router;
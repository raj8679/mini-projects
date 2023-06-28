const express = require("express");
const router = express.Router()
require('dotenv').config();
const contactRouter = require("./routes/contactRoutes")

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("welcome to homepage")
})

app.use("/contact", contactRouter)

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})
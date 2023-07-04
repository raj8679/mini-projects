const express = require("express");
const router = express.Router()
require('dotenv').config();
const contactRouter = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")
const userRouter = require("./routes/userRoutes")

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.get('/', (req,res) => {
    res.send("welcome to homepage")
})

app.use("/contact", contactRouter)
app.use("/user", userRouter)

app.use(errorHandler)

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})
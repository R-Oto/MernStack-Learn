const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())


mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log("Connected to db")
    app.listen(port, () => {
        console.log("Server started")
    })
}).catch((error)=>{
    console.log(error)
    process.exit(1)
})
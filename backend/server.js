const connect = require("./connect")
const express = require('express')
const cors = require('cors')
const posts = require('./postRoutes')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use("/api/posts", posts)

app.listen(PORT, () => {
    connect.connectToServer()
    console.log("Server started")
})
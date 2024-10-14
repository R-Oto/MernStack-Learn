const express = require('express')
require('dotenv').config()
const goalRouter = require('./routes/goalRoutes')
const connectDB = require('./config/db')
const userRouter = require('./routes/userRoutes')

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use("/api/goals", goalRouter)
app.use("/api/users", userRouter)

app.listen(PORT, () => {
    connectDB()
    console.log("Server started")
})
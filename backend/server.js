const express = require('express')
const goalRoute = require('./routes/GoalRouter')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()

app.use(express.json())
const port = process.env.PORT || 5000

connectDb()

app.use("/api/goals", goalRoute)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
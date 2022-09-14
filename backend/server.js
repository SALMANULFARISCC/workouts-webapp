require('dotenv').config()

const { config } = require('dotenv')
const express = require ('express')
const workoutRoutes = require('./routes/workouts')

const app = express()

// routes

// app.use('/api/workouts',workoutRoutes)
app.get('/',(req,res)=>{
    res.json({mssg: 'hello eoll'})
})

app.listen(4000,()=>{
    console.log("the server")
})
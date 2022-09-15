require('dotenv').config()

const { config } = require('dotenv')
const express = require ('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()

// routes

app.use('/api/workouts',workoutRoutes)
// app.get('/',(req,res)=>{
//     res.json({mssg: 'hello eoll'})
// })

mongoose.connect(process.env.URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(" the database is connected & the server connected",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


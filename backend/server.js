require('dotenv').config()

const { config } = require('dotenv')
const express = require ('express')
var cors = require('cors')

const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()
app.use(cors({
    origin: '*'
  }));

// routes


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

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


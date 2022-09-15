const { Router } = require("express")


const express = require('express')
const {CreateWorkout} = require('../controllers/workoutController')

const router = express.Router()

router
    .route('/')
    .get((req,res)=>{
        res.json({mssg: "get all data"})
    })
    .post(CreateWorkout)
router
    .route('/:id')
    .get((req,res)=>{
        res.json({mssg: "get single data"})
    })


module.exports = router
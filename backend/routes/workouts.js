const { Router } = require("express")


const express = require('express')
const {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout} = require('../controllers/workoutController')

const router = express.Router()

router
    .route('/')
    .get(getWorkouts)
    .post(createWorkout)
router
    .route('/:id')
    .get(getWorkout)
    .delete(deleteWorkout)
    .patch(updateWorkout)

   
module.exports = router
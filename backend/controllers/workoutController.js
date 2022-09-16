
const Workout = require('../models/WorkoutModel')

const mongoose = require('mongoose')



// get all workouts
const getWorkouts =  async(req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}


// get single workouts 

const getWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "the data not found"})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "the data not found"})
    }else{
        res.status(200).json(workout)
    }
}


//create new workouts

const createWorkout = async (req,res) =>{
    let {title,load,reps} = req.body
        try{
            const workout = await Workout.create({title,load,reps})
            res.status(200).json(workout)

        }catch(error){
            res.status(400).json({error: error.message})

        } 
}



//delete a workouts

const deleteWorkout = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "the data not found"})
    }

    const workout = await Workout.findByIdAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error: "the data not found"})
    }else{
        res.status(200).json(workout)
    }

}


//update a workouts

const updateWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"the data not found"})
    }
    const workout = await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error: "the data not found"})
    }else{
        res.status(200).json(workout)
    }
}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}
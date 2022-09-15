
const Workout = require('../models/WorkoutModel')





// get all workouts



// get single workouts


//create new workouts

const CreateWorkout = async (req,res) =>{
    let {title,load,reps} = req.body
        try{
            const workout = await Workout.create({title,load,reps})
            res.status(200).json(workout)

        }catch(error){
            res.status(400).json({error: error.message})

        } 
}



//delete a workouts



//update a workouts



module.exports = {
    CreateWorkout
}
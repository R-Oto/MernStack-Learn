const Workout = require('../model/workoutModel')
const asyncHandler = require('express-async-handler')

const getAll = asyncHandler(async (req,res) => {
    try{
        const workout = await Workout.find()
        if(!workout){
            res.status(400).json({error: "No workouts found"})
        }
        res.status(200).json({message: "All workout found", workout})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
})

const createOne = asyncHandler(async (req,res) => {
    const {title, load, reps} = req.body;
    if(!title || !load || !reps){
        res.status(400).json({error: "All fields are required"})
    }

    try{
        const workout = await Workout.create({title, load, reps})
        
        return res.status(201).json({message: "Workout created successfully", workout})
    }catch(error){
        return res.status(500).json({error: "Cant create workout"})
    }
})

const getOne = asyncHandler(async (req, res) => {
    const { id } = req.params; 
    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ error: "Invalid ID" }); 
    }

    res.status(200).json({ message: "Workout found", workout });
});

const updateOne = asyncHandler(async (req, res) => {
    const { id } = req.params; 
    const updateData = req.body; 

    const workout = await Workout.findByIdAndUpdate(id, updateData, { new: true }); 

    if (!workout) {
        return res.status(404).json({ error: "Invalid ID" });
    }

    res.status(200).json({ message: "Workout updated successfully", workout });
});


const deleteOne = asyncHandler(async (req,res) => {
    const {id} = req.params;
    const deleteData = req.body;

    const workout = await Workout.findByIdAndDelete(id)
    if (!workout) {
        return res.status(404).json({ error: "Invalid ID" });
    }
    res.status(200).json({ message: "Workout deleted successfully", workout });
})

module.exports = { getAll, createOne, getOne, updateOne, deleteOne }
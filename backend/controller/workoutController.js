const Workout = require('../model/workoutModel')
const asyncHandler = require('express-async-handler')

const getAll = asyncHandler(async (req,res) => {
    
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

const getOne = asyncHandler(async (req,res) => {
    
})

const updateOne = asyncHandler(async (req,res) => {
    
})

const deleteOne = asyncHandler(async (req,res) => {
    
})

module.exports = { getAll, createOne, getOne, updateOne, deleteOne }
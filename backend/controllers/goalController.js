const Goal = require("../models/goalModel")

const getGoal = async (req,res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json({message: "Get All Goals", goals})
}

const createGoal = async (req,res) => {
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(201).json({message: "Goal created", goal})
}

const updateGoal = async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        return res.status(400).json({error: error.message})
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
}

const deleteGoal = async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        return res.status(400).json({error: "Goal not found"})
    }

    await goal.remove

    res.status(200).json({id: req.params.id})
}

module.exports = {
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal,
}
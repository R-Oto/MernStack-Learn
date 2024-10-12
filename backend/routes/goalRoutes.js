const express = require('express')
const { getGoal, createGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const router = express.Router()

router.get("/", getGoal)
router.post("/", createGoal)
router.put("/:id", updateGoal)
router.delete("/:id", deleteGoal)

module.exports = router;
const express = require('express')
const { getGoal, createGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const router = express.Router()
const protect = require('../middleware/auth')

router.get("/", protect, getGoal)
router.post("/", protect, createGoal)
router.put("/:id", protect, updateGoal)
router.delete("/:id", protect, deleteGoal)

module.exports = router;
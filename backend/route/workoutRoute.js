const express = require('express')
const router = express.Router()
const { getAll, createOne, getOne, updateOne, deleteOne } = require("../controller/workoutController")

router.get("/", getAll)
router.post("/", createOne)
router.get("/:id", getOne)
router.put("/:id", updateOne)
router.delete("/:id", deleteOne)

module.exports = router;
const express = require("express")
const {getTasksController, putTaskController, deleteTaskController, postTaskController} = require("../controllers/Task")
const router = express.Router()


router.get("/tasks", getTasksController)
router.post("/task", postTaskController)
router.put("/task/:id", putTaskController)
router.delete("/task/:id", deleteTaskController)

module.exports = router


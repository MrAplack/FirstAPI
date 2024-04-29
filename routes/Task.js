const express = require("express")
const {getTasksController, putTaskController, deleteTaskController, postTaskController} = require("../controllers/Task")
const { verifyToken } = require("../middlewares/verifyToken")
const router = express.Router()


router.get("/tasks", verifyToken, getTasksController)
router.post("/task", verifyToken,postTaskController)
router.put("/task/:id", verifyToken,putTaskController)
router.delete("/task/:id",verifyToken, deleteTaskController)

module.exports = router


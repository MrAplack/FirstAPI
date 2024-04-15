const express = require("express")
const {getUsersController, putUserController, deleteUserController} = require("../controllers/Users")
const router = express.Router()
const {postUserController} = require("../controllers/Users")

router.get("/users", getUsersController)
router.post("/user", postUserController)
router.put("/user/:id", putUserController)
router.delete("/user/:id", deleteUserController)

module.exports = router


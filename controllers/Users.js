const { getUsersServices, postUserService , putUserService, deleteUserService } = require("../services/Users")

const getUsersController = (req, res) => {

    const serviceResponse = getUsersServices()

    res.status(200).json(serviceResponse)

}



const postUserController = (req, res) => {

    const serviceResponse = postUserService(body)
    const body = req.body

    res.status(201).json(serviceResponse)


}

const putUserController = (req,res) => {
    const id = req.params.id
    const body = req.body
    const serviceResponse = putUserService(id, body)
    res.status(200).json(serviceResponse)
}

const deleteUserController = (req, res) =>{

    const id = req.params.id
    const serviceResponse = deleteUserService(id)
    res.status(200).json(serviceResponse)

}

module.exports = { getUsersController, postUserController , putUserController, deleteUserController }
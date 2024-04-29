const { create, getByParam } = require("../config/firebase")
const users = require("../users.json")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const collectionName = "users"

const getUsersServices = () => {
    return users
}



const postUserService = (body) => {

    return "Creado con exito, con el body: " + JSON.stringify(body)

}

const putUserService = (id, body) => {

    return "Editado con exito id: " + id + "y el body: " + JSON.stringify(body)

}
const deleteUserService = (id) => {

    return "Eliminado con Exito id: " + id

}

const loginServices = async (body) => {
    try {
        const user = await getByParam(collectionName, "email", body.email)
        const checkPassword = await bcrypt.compare(body.password, user.password)

        if (checkPassword) {
            const token = jwt.sign({ user }, process.env.JWT_SECRET, { 
                expiresIn: "20s" 
            })
            return {
                email: user.email,
                name: user.name,
                token
            }
        }

    } catch (error) {
        console.log(error)
        
    }

}

const registerServices = async (body) => {
    try {
        const user = await getByParam(collectionName, "email", body.email)
        if (!user) {
            const salt = await bcrypt.genSalt(8)
            const encryptedPassword = await bcrypt.hash(body.password, salt)

            const payload = {

                name: body.name,
                email: body.email,
                password: encryptedPassword

            }

            await create(collectionName, payload)

            return "Usuario creado con exito"
        } else {
            return "Usuario ya existe"
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getUsersServices, postUserService, putUserService, deleteUserService, loginServices, registerServices }

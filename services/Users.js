const users = require("../users.json")

const getUsersServices = () => {
    return users
}



const postUserService = (body) => {

 return "Creado con exito, con el body: " + JSON.stringify(body)

}

const putUserService = (id,body) => {

return "Editado con exito id: " + id +"y el body: " + JSON.stringify(body)

}
const deleteUserService = (id) =>{

return "Eliminado con Exito id: " + id

}

module.exports = {getUsersServices,postUserService,putUserService,deleteUserService}

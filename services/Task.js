

const { create, destroy, update, getAll } = require("../config/firebase")
const collectionName = "tasks"


const getTasksServices = async() => {
    return await getAll(collectionName)
}



const postTaskService = async(body) => {

    await create(collectionName, body)

 return "Creado con exito, con el body: " + JSON.stringify(body)

}

const putTaskService = async(id,body) => {

        await update(collectionName, id , body)

return "Editado con exito id: " + id +"y el body: " + JSON.stringify(body)

}
const deleteTaskService = async(id) =>{

    await destroy(collectionName, id)
return "Eliminado con Exito id: " + id

}

module.exports = {getTasksServices,postTaskService,putTaskService,deleteTaskService}

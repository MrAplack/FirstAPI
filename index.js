const express = require("express")
const http = require("http")
const cors = require("cors")
const port = "3000"
const userRouter = require("./routes/Users")
const taskRouter = require("./routes/Task")
const app = express();

/* Middlewares */
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {

    res.status(200).json("Welcome to my API - version 1.0"
    )

})

app.use(userRouter)

app.use(taskRouter)

/*app.get("/users", (req, res) => {

    res.status(200).json([{
        id: 1,
        name: "Alejandro",
        lastname: "Salas"
    },
    {
        id: 2,
        name: "Jose",
        lastname: "Rojas"

    }]
    )

})*/

/*app.post("/user", (req, res) => {
    const body = req.body

    res.status(201).json("Creado con Exito, con el body " + JSON.stringify(body)
    )

})*/

/*app.put("/user/:id", (req, res) => {

    const id = req.params.id
    const body = req.body

    res.status(200).json("Editado con Exito id:" + id + "y el body id:" + JSON.stringify(body)
    )

})*/

/*app.delete("/user/:id", (req, res) => {

    const id = req.params.id

    res.status(200).json("Eliminado con Exito id: " + id
    )

})*/

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server Working on Port" + port)
})
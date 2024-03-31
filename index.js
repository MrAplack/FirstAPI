const express = require("express")
const http = require("http")
const port = "3000"

const app = express();

/* Middlewares */
app.use(express.json())

app.get("/", (req, res) => {

    res.status(200).json("Welcome to my API - version 1.0"
    )

})

const server = http.createServer(app);
server.listen(port, () => { console.log("Server Working on Port" + port) })
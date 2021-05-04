const express = require("express")
const server = express()
const routes = require("./routes")
const port = process.env.PORT||3000
const cors = require("cors")

// habilitar arquivos statics
server.use(express.static("public"))

//cors
server.use(cors())

//routes
server.use(routes)

server.listen(port, () => console.log('rodando...'))
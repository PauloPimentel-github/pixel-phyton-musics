const express = require("express")
const server = express()
const routes = require("./routes")
const port = process.env.PORT||3000

// habilitar arquivos statics
server.use(express.static("public"))

//routes
server.use(routes)

server.listen(port, () => console.log('rodando...'))
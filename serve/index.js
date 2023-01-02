const express = require("express")
const cors = require("cors")
const app = express();
const {Server} = require("socket.io")
const http = require("http")

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

let clients = {}

io.on("connection", (socket) => {
    console.log(`User with user id ${socket.id} has been connected, active users are ${io.engine.clientsCount}`)

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected, ${io.engine.clientsCount}`)

        delete clients[socket.id]
    })

})

server.listen(3001, () => console.log("server is running"))
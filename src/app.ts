import "dotenv/config"
import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

import { router } from "./routes"


const app = express()
app.use(cors())

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
    cors: {
        origin: "*" // Accepts requests from all origins
    }
})

io.on("connection", socket => console.log("User connect at socket: %i", socket.id))

app
    .use(express.json())
    .use(router)

serverHttp.listen(4000, () =>
    console.log("☠️  🐵 🐲 🦍 🦧 Server tá SUS em http://localhost:4000/github"))
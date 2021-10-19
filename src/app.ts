import "dotenv/config"
import express from "express"

import { router } from "./routes"

const app = express()

app
    .use(express.json())
    .use(router)

app.listen(4000, () => console.log("☠️  🐵 🐲 🦍 🦧 Server tá SUS em http://localhost:4000/"))
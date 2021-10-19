import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"

const router = Router()

router
    .get("/github", (req, res) => res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`))
    .get("/signin/callback", (req, res) => {
        const { code } = req.query // Get URL params

        return res.json(code)
    })
    .post("/authenticate", new AuthenticateUserController().handle)


export { router }
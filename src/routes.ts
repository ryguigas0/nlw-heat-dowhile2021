import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateMessageController } from "./controllers/CreateMessageController"
import { GetLatestMessagesController } from "./controllers/GetLastestMessagesController"
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated"

const router = Router()

router
    .get("/github", (_req, res) => res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`))
    .get("/signin/callback", (req, res) => {
        const { code } = req.query // Get URL params

        return res.json(code)
    })
    .post("/authenticate", new AuthenticateUserController().handle)
    .post("/messages",
        ensureAuthenticated, // Runs the middleware
        new CreateMessageController().handle)
    .get("/messages/latest", new GetLatestMessagesController().handle)


export { router }
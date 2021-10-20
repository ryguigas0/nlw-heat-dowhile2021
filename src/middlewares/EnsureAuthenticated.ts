// Middlewares do something before the actual request code

import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization
    if (!authToken) {
        return res.status(401).json({
            error: "authToken.invalid" // Return for easy error handling
        })
    }

    // Bearer 1984098yoifuahoiuehfoiauh -> 1984098yoifuahoiuehfoiauh
    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, `${process.env.JWT_SECRET}`)

        req.user_id = `${sub}`
        return next()
    } catch (err) {
        return res.status(401).json({
            error: "authToken.expired"
        })
    }
}
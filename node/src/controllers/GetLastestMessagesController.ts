import { Request, Response } from "express"
import { GetLatestMessagesService } from "../services/GetLastestMessagesService"

class GetLatestMessagesController {
    async handle(req: Request, res: Response) {

        let { size } = req.query

        if (!size) {
            size = "5"
        }

        const service = new GetLatestMessagesService()

        const result = await service.execute(Number(size))

        return res.json(result)
    }
}

export { GetLatestMessagesController }
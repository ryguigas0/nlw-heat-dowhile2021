import primaClient from "../prisma"
import { io } from "../app"

class CreateMessageService {
    async execute(text: string, user_id: string) {
        const message = await primaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {
                user: true
            }
        })

        const infows = {
            text: message.text,
            user_id: message.user_id,
            created_at: message.created_at,
            user: {
                name: message.user.name,
                avatar_url: message.user.avatar_url
            }
        }

        io.emit("new_message", infows)

        return message
    }
}

export { CreateMessageService }
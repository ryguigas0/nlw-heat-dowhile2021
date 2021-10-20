import prismaClient from "../prisma"

class GetLatestMessagesService {
    async execute(size: number) {
        const messages = await prismaClient.message.findMany({
            take: size,
            orderBy: {
                created_at: "desc" // Starting from the most recent
            },
            include: {
                user: true
            }
        })
        return messages
    }
}

export { GetLatestMessagesService }
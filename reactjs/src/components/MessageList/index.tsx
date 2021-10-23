import styles from "./style.module.scss"
import logoImg from "../../assets/logo.svg"

import { api } from "../../services/api"
import { useEffect, useState } from "react"

type Message = { // Info that will be used
    id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string
    }
}

export function MessageList() {

    const [messages, updateMessages] = useState<Message[]>([])

    useEffect(() => {
        api.get<Message[]>("/messages/latest?size=10").then(resp => { // Get latest 5
            const rand3Msgs = resp.data
                // Shuffling code from: https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
                .sort(() => Math.random() - 0.5) // Sorts with random order
                .slice(0, 3) // Takes the first 3
            updateMessages(rand3Msgs) // Render
        })
    }, []) // Empty array -> run only once

    return (
        <div className={styles.MessageListWrapper}>
            <img src={logoImg} alt="DO WHILE 2021" />

            <ul className={styles.MessageList}>
                {
                    messages.map(msg => {
                        return (
                            <li key={msg.id} className={styles.Message}>
                                <p className={styles.MessageContent}> {msg.text}</p>
                                <div className={styles.MessageUser}>
                                    <div className={styles.UserImage}>
                                        <img src={msg.user.avatar_url} alt={msg.user.name} />
                                    </div>
                                    <span>{msg.user.name}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
import styles from "./style.module.scss"
import logoImg from "../../assets/logo.svg"

import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

type Message = { // Info that will be used
    id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string
    }
}

let messagesQueue: Message[] = []

const socket = io("http://localhost:4000")
socket.on("new_message", (newMsg: Message) => messagesQueue.push(newMsg))

export function MessageList() {

    const [messages, updateMessages] = useState<Message[]>([])

    useEffect(() => {
        const timer = setInterval(() => {
            if (messagesQueue.length > 0) {
                updateMessages(prevState => [ // Saves temporary the previous state before updating it
                    messagesQueue[0], // The new message is the first in queue
                    prevState[0], //The other messages
                    prevState[1],
                ].filter(Boolean)) // Removes null and undefined

                messagesQueue.shift() // Removes the first item from queue
            }
        }, 3000)
    })

    useEffect(() => {
        api.get<Message[]>("/messages/latest?size=5").then(resp => { // Get latest 5
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
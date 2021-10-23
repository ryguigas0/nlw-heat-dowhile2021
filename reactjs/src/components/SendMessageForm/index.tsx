import { FormEvent, useContext, useState } from "react"
import { VscGithubInverted, VscSignOut } from "react-icons/vsc"
import { AuthContext } from "../../contexts/auth"
import { api } from "../../services/api"
import styles from "./style.module.scss"

export function SendMessageForm() {


    const { user, signOut } = useContext(AuthContext)

    const [message, updateMessage] = useState("")

    async function handleSendMessage(event: FormEvent) {

        event.preventDefault() //Prevents page reloding

        if (!message.trim()) return; // If empty, do nothing

        await api.post("messages", { text: message, user_id: user?.id })

        updateMessage("")
    }

    return (
        <div className={styles.SendMessageFormWrapper}>
            <button onClick={signOut} className={styles.SignOutButton}>
                <VscSignOut size="32" />
            </button>

            <header className={styles.UserInformation}>
                <div className={styles.UserImage}>
                    {/* User might be null */}
                    <img src={user?.avatar_url} alt={user?.login} />
                </div>
                <strong className={styles.UserName}>{user?.name}</strong>
                <span className={styles.UserGithub}>
                    <VscGithubInverted size="26" />
                    {user?.login}
                </span>
            </header>

            <form onSubmit={handleSendMessage} className={styles.SendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Qual a expectativa para o DO WHILE 2021?"
                    onChange={event => updateMessage(event.target.value)} //Updated value at text area 
                    value={message}
                />
                <button type="submit">
                    Enviar mensagem
                </button>
            </form>
        </div>
    )
}
import { useContext } from "react"
import { VscGithubInverted, VscSignOut } from "react-icons/vsc"
import { AuthContext } from "../../contexts/auth"
import styles from "./style.module.scss"

export function SendMessageForm() {


    const { user, signOut } = useContext(AuthContext)

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

            <form action="" className={styles.SendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" placeholder="Qual a expectativa para o DO WHILE 2021?" />
                <button type="submit">
                    Enviar mensagem
                </button>
            </form>
        </div>
    )
}
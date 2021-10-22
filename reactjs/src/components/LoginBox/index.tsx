import styles from "./style.module.scss"
import { VscGithubInverted } from "react-icons/vsc"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export function LoginBox() {
    const { signInURL } = useContext(AuthContext) // Shared data between components

    return <div className={styles.LoginBoxWrapper}>
        <strong>Entre no loop e compartilhe uma mensagem!</strong>
        <a href={signInURL} className={styles.SignInWithGithub}>
            <VscGithubInverted size="24" /> Entrar com github
        </a>
    </div>
}
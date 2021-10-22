import styles from "./style.module.scss"
import { VscGithubInverted } from "react-icons/vsc"

export function LoginBox() {
    return <div className={styles.LoginBoxWrapper}>
        <strong>Entre no loop e compartilhe uma mensagem!</strong>
        <a href="" className={styles.SignInWithGithub}><VscGithubInverted size="24" /> Entrar com github</a>
    </div>
}
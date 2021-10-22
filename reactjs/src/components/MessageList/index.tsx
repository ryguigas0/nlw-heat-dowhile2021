import styles from "./style.module.scss"

import logoImg from "../../assets/logo.svg"

export function MessageList() {
    return (
        <div className={styles.MessageListWrapper}>
            <img src={logoImg} alt="DO WHILE 2021" />

            <ul className={styles.MessageList}>
                <li className={styles.Message}>
                    <p className={styles.MessageContent}>Esse vai ser simplesmente fantástico!
                    Bora aprender tudo em relação a montagem de APIs GraphQL.
                        Sem contar com as palestras e painéis.</p>
                    <div className={styles.MessageUser}>
                        <div className={styles.UserImage}>
                            <img src="https://github.com/ryguigas0.png" alt="Amogus Dababy" />
                        </div>
                        <span>Amogus Dababy</span>
                    </div>
                </li>
                <li className={styles.Message}>
                    <p className={styles.MessageContent}>Esse vai ser simplesmente fantástico!
                    Bora aprender tudo em relação a montagem de APIs GraphQL.
                        Sem contar com as palestras e painéis.</p>
                    <div className={styles.MessageUser}>
                        <div className={styles.UserImage}>
                            <img src="https://github.com/ryguigas0.png" alt="Amogus Dababy" />
                        </div>
                        <span>Amogus Dababy</span>
                    </div>
                </li>
                <li className={styles.Message}>
                    <p className={styles.MessageContent}>Esse vai ser simplesmente fantástico!
                    Bora aprender tudo em relação a montagem de APIs GraphQL.
                        Sem contar com as palestras e painéis.</p>
                    <div className={styles.MessageUser}>
                        <div className={styles.UserImage}>
                            <img src="https://github.com/ryguigas0.png" alt="Amogus Dababy" />
                        </div>
                        <span>Amogus Dababy</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
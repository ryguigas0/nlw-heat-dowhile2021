// Exports to be more manageable on development

import styles from "./styles/App.module.scss" // Sass -> Making CSS modular -> Better for bigger scale applications
import { MessageList } from "./components/MessageList"
import { LoginBox } from "./components/LoginBox"
import { useContext } from "react"
import { AuthContext } from "./contexts/auth"
import { SendMessageForm } from "./components/SendMessageForm"

export function App() {

  const { user } = useContext(AuthContext)

  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      {
        // Is an user in the context? Then render the form, if not render the login box
        !!user ? <SendMessageForm /> : <LoginBox />
      }
    </main>
  )
}

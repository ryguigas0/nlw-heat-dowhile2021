// Exports to be more manageable on development

import styles from "./styles/App.module.scss" // Sass -> Making CSS modular -> Better for bigger scale applications
import { MessageList } from "./components/MessageList"
import { LoginBox } from "./components/LoginBox"

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

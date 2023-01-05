import styles from './Header.module.css'
import logo from '/src/assets/descarga2.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo app" />
    </header>
  )
}

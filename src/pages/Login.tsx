import styles from './Login.module.css'
import { LoginButton } from '@/components/LoginButton'
import { RegisterButton } from '@/components/RegisterButton'

export function Login() {
  return (
    <body>
      <div className={styles.container}>
        <div className={styles.titleSpace}>
          <div className={styles.logoImg} />
          <h1>Login</h1>
          <p>Entre na sua conta Polymathech</p>
        </div>
        <div className={styles.dataSpace}>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Senha" />
        </div>
        <div className={styles.buttonsSpace}>
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
      <hr className={styles.footerBar} />
      <footer>
        <div className={styles.nameImg} />
        <div className={styles.linksSpace}>
          <a href="">Discord</a>
          <a href="">Blog</a>
        </div>
      </footer>
    </body>
  )
}

import React from 'react'
import { H1 } from '../Reg/Reg.styled'
import Input from '../../input/Input'
import styles from '../../styles/button.module.css'
export default function SignIn() {
  return (
    <>
      <div className={styles.article}>
          <H1>Почта</H1>
      </div>
      <Input hold = "E-mail" type="text"/>
        <div className={styles.article}>
            <H1>Пароль</H1>
        </div>
      <Input hold = "Password" type="password"/>
      <button className={styles.btn}>Войти</button>
    </>
  )
}



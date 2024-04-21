import React from 'react'
import Input from '../../input/Input'
import { H1 } from './Reg.styled'
import styles from '../../styles/button.module.css'
export default function Reg() {
  return (
    <>
        <div className={styles.article}>
          <H1>Почта</H1>
        </div>
        <Input hold="E-mail" type="text" />
        <div className={styles.article}>
          <H1>Пароль</H1>
        </div>
        <Input hold="Password" type="Password" />
        <div className={styles.article}>
          <H1>Подтвердить пароль</H1>
        </div>
        <Input hold="Confirm Password" type="Password" />
        <button className={styles.btn}>Отправить</button>
    </>
  )
}

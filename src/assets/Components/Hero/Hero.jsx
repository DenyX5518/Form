import React, { useEffect, useState } from 'react'
import { StyledHero } from './Hero.styled'
import Reg from './Reg/Reg'
import SignIn from './SignIn/SignIn'
import Button from './button/Button'
import mount from '../../webps/mout.jpg'
import styles from '../styles/button.module.css'
export default function Hero() {
  const [click, setClick] = useState("false");
  const clickedReg = () => {
    setClick(click=>"false");
  }
  const clickedSign = () => {
    setClick(click=>"true");
    
  }
  useEffect(function(){
    console.log(click);
  },[click])
  return (
    <>
    {/* #4bb1ac */}
      <StyledHero>
        <div className="wrapper">
          <div className="item-1">
            <div className="btns">
              <Button style={click === "false" ? {borderLeft: '3px solid  #4bb1ac'} : {borderLeft: 'none'}} onclick={clickedReg} text="Регистрация"/>
              <Button style={click === "true" ? {borderLeft: '3px solid  #4bb1ac'} : {borderLeft: 'none'}} onclick={clickedSign} text="Вход"/>
            </div>
            <div className={styles.cntr}>
              <div className={styles.cntr}>
                {click === "false" ? <Reg></Reg> : <SignIn></SignIn>}
              </div>
            </div>
          </div>
          <div className="item-2">
            <img src={mount} alt="" />
          </div>
        </div>
      </StyledHero>
    </>
  )
}

import React from 'react'
import StyledInput from './Input.styled'

export default function Input(props) {
  return (
    <>
      <StyledInput>
        <input type={props.type} placeholder={props.hold} required/>
      </StyledInput>
    </>
  )
}

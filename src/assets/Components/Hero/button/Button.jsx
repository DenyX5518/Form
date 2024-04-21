import React from 'react'
import { StyledButton } from './Button.styled'
export default function Button(props) {
  return (
    <div>
      <StyledButton style={props.style} onClick={props.onclick}>{props.text}</StyledButton>
    </div>
  )
}

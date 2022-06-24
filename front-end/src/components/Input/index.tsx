//dependencies
import React from 'react'

//components
import { InputStyled } from './style'

import { InputProps } from './interface'

export const InputS = ({
  variant = 'primary',
  children
}: InputProps) => {
  return (
    <InputStyled variant={variant}>
      {children}
    </InputStyled>
  )
}

export default InputS

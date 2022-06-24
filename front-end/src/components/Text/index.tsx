//dependencies
import React from 'react'

//components
import { TextStyled } from './style'

import { TextProps } from './interface'

export const Text = ({
  variant = 'primary',
  children
}: TextProps) => {
  return (
    <TextStyled variant={variant}>
      {children}
    </TextStyled>
  )
}

export default Text

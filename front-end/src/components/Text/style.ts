import styled from 'styled-components'
import { typography, variant } from 'styled-system'

import { TextProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      fontSize: '20px',
      color: '#00BFFF',
      marginTop: '4px',
    },

    primaryBold: {
      fontSize: '24px',
      color: '#00BFFF',
      fontWeight: 'bold'
    },
  }
}



export const TextStyled = styled('text')<TextProps>({
  margin: 0,
},
variant(variants), typography)

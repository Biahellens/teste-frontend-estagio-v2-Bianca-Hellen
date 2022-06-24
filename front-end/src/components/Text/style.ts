import styled from 'styled-components'
import { typography, variant } from 'styled-system'

import { TextProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      fontSize: '16px',
      color: '#1E90FF',
      marginTop: '4px',
    },

    primaryBold: {
      fontSize: '16px',
      color: '#1E90FF',
      fontWeight: 'bold'
    },
  }
}



export const TextStyled = styled('text')<TextProps>({
  margin: 0,
},
variant(variants), typography)

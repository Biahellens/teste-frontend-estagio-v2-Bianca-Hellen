import styled from 'styled-components'
import css from '@styled-system/css';
import { variant } from 'styled-system'

import { ButtonProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      color: '#FFFFFF',
      bg: '#1E90FF',
      width: '120px',
    }
  }
}

export const ButtonStyled = styled('button')<ButtonProps>(
  {
    height: '30px',
    fontSize: '18px',

    borderColor: '#1E90FF',
    borderRadius: '4px',

    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '2px',

    alignItems: 'center',
  },
variant(variants))

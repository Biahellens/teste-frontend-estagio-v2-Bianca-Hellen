import styled from 'styled-components'
import css from '@styled-system/css';
import { variant } from 'styled-system'

import { InputProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      minHeight: '40px',
      bg: 'none',
      color: '#D3D3D3'
    },

    secondary: {
      minHeight: '100px',
      bg: 'none',
      color: '#D3D3D3	',
      borderBottom: 'none',
    },
  }
}

export const InputStyled = styled('input')<InputProps>(
  {
    width: '300px',
    fontSize: '14px',
    padding: 'm',

    borderColor: '#ADD8E6',
    borderRadius: '10px',

    boxSizing: 'border-box',
		display: 'block',

    marginTop: '2px',
    placeholderTextColor: "red",
  },
variant(variants))

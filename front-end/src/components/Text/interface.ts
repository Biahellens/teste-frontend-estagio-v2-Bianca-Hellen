import { HTMLAttributes } from 'react'

export type TextProps = {
  variant?: 'primary' | 'primaryBold'
} & HTMLAttributes<HTMLElement>

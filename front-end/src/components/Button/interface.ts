import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  variant?: 'primary'
} & ButtonHTMLAttributes<HTMLButtonElement>

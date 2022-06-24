import { InputHTMLAttributes } from 'react'

export type InputProps = {
  variant?: 'primary' | 'secondary'
} & InputHTMLAttributes<HTMLInputElement>

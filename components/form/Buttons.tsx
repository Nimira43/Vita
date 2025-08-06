'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}

export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('uppercase', className)}
      size={size}
    >

    </Button>
  )
}
'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { AiOutlineReload } from 'react-icons/ai'

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
      {pending ? (
        <>
          <AiOutlineReload 
            className='mr-2 h-4 w-4 animate-spin'
          />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}

type actionType = 'edit' | 'delete'

export const IconButton = ({
  actionType
}: {
  actionType: actionType
}) => {}
'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { AiOutlineReload, AiOutlineEdit } from 'react-icons/ai'
import { PiTrash } from 'react-icons/pi'

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
}) => {
  const { pending } = useFormStatus()

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <AiOutlineEdit />
      case 'delete':
        return <PiTrash />
      default:
        const never: never = actionType
        throw new Error(`Invalid action type: ${never}`)
    }
  }

  return (
    <Button
      type='submit'
      size= 'icon'
      variant='link'
      className='p-2 cursor-pointer'
    >
      {pending 
        ? <AiOutlineReload className='animate-spin' />
        : renderIcon()
      }
    </Button>
  )
}

export const CardSignInButton = () => {}

'use client'

import { useToast } from '@/hooks/use-toast'
import { actionFunction } from '@/utils/types'
import React from 'react'
import { useFormState } from 'react-dom'

const initialState = {
  message: ''
}

function FormContainer({
  action,
  children,
}: {
  action: actionFunction
  children: React.ReactNode
}) {
  const [state, formAction ] = useFormState(action, initialState)
  const { toast } = useToast()
}

export default FormContainer
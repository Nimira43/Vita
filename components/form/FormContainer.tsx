'use client'

import { actionFunction } from '@/utils/types'
import React from 'react'

const initialState = {
  message: ''
}

function FormContainer({
  action,
  children,
}: {
  action: actionFunction
  children: React.ReactNode
}) {}

export default FormContainer
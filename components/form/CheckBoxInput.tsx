'use client'

type CheckboxInputProps = {
  name: string
  label: string
  defaultChecked?: boolean
}

export default function CheckboxInput({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) {}
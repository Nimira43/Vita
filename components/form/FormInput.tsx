type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
}

function FormInput({
  label, name, type, defaultValue, placeholder
}: FormInputProps) {}
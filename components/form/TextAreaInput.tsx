import { Label } from '../ui/label'

type TextAreaInputProps = {
  name: string
  labelText?: string
  defaultValue?: string
}

function TextAreaInput({
  name,
  labelText, 
  defaultValue
}: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label 
        htmlFor={name}
        className='uppercase'
      >
        {labelText || name}
      </Label>
    </div>
  )

}

export default TextAreaInput
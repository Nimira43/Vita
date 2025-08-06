import { Label } from "../ui/label"

function ImageInput() {
  const name = 'image'

  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='uppercase'
      >
        Image
      </Label>
    </div>
  )
}

export default ImageInput
import { Label } from "../ui/label"

const name = 'price'
type FormInputNumberProps = {
  defaultValue?: number
}

function PriceInput(
  { defaultValue }: FormInputNumberProps
) {
  return (
    <div className='mb-2'>
      <Label
        htmlFor='price'
        className='uppercase'
      >
        Price (£)
      </Label>
    </div>
  )

}

export default PriceInput
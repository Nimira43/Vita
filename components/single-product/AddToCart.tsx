import { Button } from '../ui/button'

function AddToCart({productId}: {productId: string}) {
  return (
    <Button 
      className='uppercase mt-8'
      size='lg'
    >
      Add To Cart
    </Button>
  )
}

export default AddToCart
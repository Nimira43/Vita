import { RiHeartLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'

function FavouriteToggleButton({ productId }:{productId: string}) {
  return (
    <Button
      size='icon'
      variant='outline'
      className='p-2 cursor-pointer'
    >
      <RiHeartLine />
    </Button>
  )
}

export default FavouriteToggleButton
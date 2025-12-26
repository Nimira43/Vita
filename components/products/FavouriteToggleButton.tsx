import { RiHeartLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '../form/Buttons'
import { fetchFavouriteId } from '@/utils/actions'

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
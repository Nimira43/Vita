import { usePathname } from 'next/navigation'
import FormContainer from '../form/FormContainer'
import { toggleFavouriteAction } from '@/utils/actions'
import { CardSubmitButton } from '../form/Buttons'

type FavouriteToggleFormProps = {
  productId: string
  favouriteId: string | null
}

function FavouriteToggleForm({
  productId,
  favouriteId,
}: FavouriteToggleFormProps) {
  return (
    <div>
      FavouriteToggleForm      
    </div>
  )
}

export default FavouriteToggleForm
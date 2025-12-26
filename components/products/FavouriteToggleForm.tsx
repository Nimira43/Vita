import { usePathname } from 'next/navigation'
import FormContainer from '../form/FormContainer'
import { toggleFavouriteAction } from '@/utils/actions'
import { CardSubmitButton } from '../form/Buttons'

type FavouriteToggleFormProps = {
  productId: string
  favourite: string | null
}

function FavouriteToggleForm() {
  return (
    <div>
      FavouriteToggleForm      
    </div>
  )
}

export default FavouriteToggleForm
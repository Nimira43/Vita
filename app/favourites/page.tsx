import { fetchUserFavourites } from '@/utils/actions'
import SectionTitle from '@/components/global/SectionTitle'
import ProductsGrid from '@/components/products/ProductsGrid'

async function FavouritePage() {
  const favourites = await fetchUserFavourites()
  return (
    <div>
      <h1>Favourite Page</h1>
    </div>
  )
}
export default FavouritePage



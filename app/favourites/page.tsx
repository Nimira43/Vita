import { fetchUserFavourites } from '@/utils/actions'
import SectionTitle from '@/components/global/SectionTitle'
import ProductsGrid from '@/components/products/ProductsGrid'

async function FavouritePage() {
  const favourites = await fetchUserFavourites()

  if (favourites.length === 0) {
    return (
      <SectionTitle 
        text='You have no favourites yet.'
      />
    )
  }

  return (
    <div>
      <h1>Favourite Page</h1>
    </div>
  )
}
export default FavouritePage



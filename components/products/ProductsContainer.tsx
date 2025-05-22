import { fetchAllProducts } from '@/utils/actions'


async function ProductsContainer({
  layout,
  search,
}: {
  layout: string
  search: string
}) {
 const products = await fetchAllProducts() 
  
  return (
    <div>
      ProductsContainer      
    </div>
  )
}

export default ProductsContainer
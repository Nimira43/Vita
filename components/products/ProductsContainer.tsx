import { fetchAllProducts } from '@/utils/actions'

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string
  search: string
}) {
  const products = await fetchAllProducts() 
  const totalProducts = products.length
  const searchTerm = search
    ?
    `&search=${search}`
    :
    ''
  return (
    <section>
      <div className='flex justify-between items-center'>
        <h4 className='font-medium'></h4>
      </div>
    </section>
  )
}

export default ProductsContainer
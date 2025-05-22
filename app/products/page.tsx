import ProductsContainer from '@/components/products/ProductsContainer'

async function ProductsPage({
  searchParams,  
}: {
    searchParams: { layout?: string; search?: string }
}) {

  return (
    <div>
      <h1>Products Page</h1>
    </div>
  )
}
export default ProductsPage



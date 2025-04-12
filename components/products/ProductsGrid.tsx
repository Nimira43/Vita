import { formatCurrency } from '@/utils/format'
import { Product } from '@prisma/client'

function ProductsGrid({
  products
}: { products: Product[] }) {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { name, price, image } = product
        const productId = product.id
        const poundsAmount = formatCurrency(price)
        return (
          <article
            key={productId}
            className='group relative'>
            Grid
          </article>
        )
      })}   
      
    </div>
  )
}

export default ProductsGrid
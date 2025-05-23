import { formatCurrency } from '@/utils/format'
import { Product } from '@prisma/client'
import Link from 'next/link'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import FavouriteToggleButton from './FavouriteToggleButton'

function ProductsList({ products}: { products: Product[]}) {
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { name, price, image, company } = product
        const poundsAmount = formatCurrency(price)
        const productId = product.id

        return (

        )
      })}
    </div>
  )
}

export default ProductsList
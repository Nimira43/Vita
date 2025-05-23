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
          <article key={product.id} className='group relative'>
            <Link href={`/products/${productId}`}>
              <Card className='transform group-hover:shadow-xl transition shadow duration-500'>
                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                  <div className='relative h-64 md:h-48 md:w-48'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                      priority
                      className='w-full rounded-md object-cover'
                    />
                  </div>
                  <div>
                    <h2 className='text-4xl font-medium capitalize'>{name}</h2>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default ProductsList
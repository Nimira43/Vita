import { fetchAllProducts } from '@/utils/actions'
import { Button } from '../ui/button'
import Link from 'next/link'
import { TbLayoutGrid } from 'react-icons/tb'
import { Separator } from '../ui/separator'

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
        <h4 className='font-medium text-lg'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-x-4'>
          <Button 
            variant={layout === 'grid' ? 'default' : 'ghost'}
            size='icon'
            asChild
          >
            <Link
             href={`/products?layout=grid${searchTerm}`}
            >
              <TbLayoutGrid />
            </Link>
          </Button>
        </div>
      </div>
      <Separator className='mt-4' />
    </section>
  )
}

export default ProductsContainer
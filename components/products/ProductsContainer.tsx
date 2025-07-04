import { fetchAllProducts } from '@/utils/actions'
import { Button } from '../ui/button'
import Link from 'next/link'
import { TbLayoutGrid } from 'react-icons/tb'
import { BsList } from "react-icons/bs"
import { Separator } from '../ui/separator'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string
  search: string
}) {
  const products = await fetchAllProducts({
    search
  }) 
  const totalProducts = products.length
  const searchTerm = search
    ?
    `&search=${search}`
    :
    ''
  return (
    <>
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
            <Button 
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='icon'
              asChild
            >
              <Link
              href={`/products?layout=list${searchTerm}`}
              >
                <BsList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, we cannot find the product you are looking for...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}   
      </div>
    </> 
  )
}

export default ProductsContainer
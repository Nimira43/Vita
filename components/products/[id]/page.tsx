import BreadCrumbs from "@/components/single-product/BreadCrumbs"
import { fetchSingleProduct } from "@/utils/actions"
import { formatCurrency } from "@/utils/format"
import Image from "next/image"

async function SingleProductPage({ 
  params 
}: {
  params: { id: string } 
 }) {
  const product = await fetchSingleProduct(params.id)
  const { name, image, company, description, price } = product
  const poundsAmount = formatCurrency(price)
  
  return (
    <section>
      <BreadCrumbs name={product.name}/>
      <div className="className mt-5 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
            priority
            className='w-full rounded-md object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default page

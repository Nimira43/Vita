import BreadCrumbs from "@/components/single-product/BreadCrumbs"
import { fetchSingleProduct } from "@/utils/actions"
import { formatCurrency } from "@/utils/format"

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
        
      </div>
    </section>
  )
}

export default page

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
    </section>
  )
}

export default page

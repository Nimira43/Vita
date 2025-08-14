import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { faker } from '@faker-js/faker'

const createProductAction = async (formData: FormData) => {
  'use server'
  const name = formData.get('name') as string
  console.log(name)
}

function CreateProduct() {
  const name = faker.commerce.productName()
  const company = faker.company.name()
  const description = faker.lorem.paragraph({ min: 10, max: 12})

  return (
    <section>
      <h1 className='text-2xl font-medium mb-8 uppercase'>Create Product</h1>
      <div className='border p-8 rounded-md'>
      
      </div>
    </section>
  )
}

export default CreateProduct

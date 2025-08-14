import FormContainer from '@/components/form/FormContainer'
import { createProductAction } from '@/utils/actions'
import { faker } from '@faker-js/faker'

function CreateProduct() {
  const name = faker.commerce.productName()
  const company = faker.company.name()
  const description = faker.lorem.paragraph({ min: 10, max: 12})

  return (
    <section>
      <h1 className='text-2xl font-medium mb-8 uppercase'>Create Product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateProduct

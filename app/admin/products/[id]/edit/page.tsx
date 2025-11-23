import { SubmitButton } from '@/components/form/Buttons'
import CheckboxInput from '@/components/form/CheckBoxInput'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import TextAreaInput from '@/components/form/TextAreaInput'

async function EditProductPage({
  params
}: {
  params: { id: string }
}) {
  


  return (
    <section>
      <h1 className='text-2xl font-medium mb-8 uppercase'>Update Product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action=''>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <input
              type='hidden'
              name='id'
              value={id}
            />
            <FormInput 
              type='text'
              name='name'
              label='product name'
            />                      
            <FormInput 
              type='text'
              name='company'
              label='company'
            />     
            <PriceInput />                 
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
          />
          <div className='mt-6'>
            <CheckboxInput
              name='featured'
              label='featured'
            />
          </div>
          <SubmitButton
            text='update product'
            className='mt-8'
          />
        </FormContainer>
      </div>
    </section>
  )
}

export default EditProductPage



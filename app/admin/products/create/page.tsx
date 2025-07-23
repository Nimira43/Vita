const createProductAction = async (formData: FormData) => {
  'use server'
  const name = formData.get('name') as string
  console.log(name)
}

function CreateProductPage() {
  return (
    <section>
      <h1 className='text-2xl font-medium mb-8 uppercase'>Create Product</h1>
      <div className='border p-8 rounded-md'>
        <form action=''></form>
      </div>
    </section>
  )
}

export default CreateProductPage

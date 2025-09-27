import { createClient} from '@supabase/supabase-js'

const bucket = 'main-bucket'

export const supabase = createClient(
  process.env.SUPERBASE_URL as string,
  process.env.SUPERBASE_KEY as string
)

export const uploadImage = async (image: File) => {
  const timestamp = Date.now()
  const newName = `${timestamp}=${image.name}`

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: '3600',
    })
}
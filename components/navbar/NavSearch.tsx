import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '../ui/input'
import { useState } from 'react'

function NavSearch() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '')

  return (
    <Input 
      type='search'
      placeholder='Search product...'
      className='max-w-xs dark:bg-muted'
    />
  )
}
export default NavSearch
import Link from 'next/link'
import { Button } from '../ui/button'
import { GiTrade } from "react-icons/gi"
function Logo() {

  return (
    <Button size='icon' asChild className='rounded-full'>
      <Link href='/'>
        <GiTrade className='w-6 h-6 text-light ' />
      </Link>
    </Button>
  )
}
export default Logo
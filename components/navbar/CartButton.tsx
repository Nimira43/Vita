import { Button } from '@/components/ui/button'
import { PiShoppingCartLight } from 'react-icons/pi'
import Link from 'next/link'

async function CartButton() {
  const numItemsInCart = 9
  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/cart'>
        <PiShoppingCartLight />
        <span className='absolute -top-3 -right-3 bg-primary text-[#111] rounded-full h-6 w-6 flex items-center justify-center text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}
export default CartButton
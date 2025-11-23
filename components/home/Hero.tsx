import Link from 'next/link'
import { Button } from '../ui/button'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-medium text-4xl tracking-tight sm:text-6xl'>
          A Better Way to Shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>Discover a better way to shop at Vita—your one-stop destination for quality, style, and unbeatable convenience. Shop smart today!</p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products' className='uppercase'>Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero
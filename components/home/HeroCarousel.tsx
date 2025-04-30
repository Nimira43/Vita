import hero1 from '@/public/images/bed.jpg'
import hero2 from '@/public/images/kitchen-table.jpg'
import hero3 from '@/public/images/side-table.jpg'
import hero4 from '@/public/images/sofa.jpg'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'

const carouselImages = [hero1, hero2, hero3, hero4]

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent></CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroCarousel
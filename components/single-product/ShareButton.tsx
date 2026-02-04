import { IoShareSocial } from 'react-icons/io5'
import { BsTwitterX, BsInstagram } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

function ShareButton() {
  return (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant='outline'
        size='icon'
        className='p-2'
      >
        <IoShareSocial />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      side='top'
      align='end'
      sideOffset={10}
      className='flex items-center gap-x-2 justify-center w-full'
    >
      <GrFacebookOption />
      <BsTwitterX />
      <BsInstagram />
    </PopoverContent>
  </Popover>)
}

export default ShareButton
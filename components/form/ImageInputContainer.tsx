import { actionFunction } from '@/utils/types'
import Image from 'next/image';
import { useState } from 'react';


type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction
  text: string;
  children?: React.ReactNode
}


function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props
  const [isUpdateFormVisible, setUpdateFormVisible] = useState
   
  return ( 
    <div className='mb-8'>
      <Image
        src={image}
        width={200}
        height={200}
        className='rounded-md object-cover mb-4 w-[200px] h-[200px]'
        alt={name}      
      />

    </div>
   )
}
 
export default ImageInputContainer
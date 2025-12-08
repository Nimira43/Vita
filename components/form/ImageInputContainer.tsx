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
    <div>
  

    </div>
   )
}
 
export default ImageInputContainer
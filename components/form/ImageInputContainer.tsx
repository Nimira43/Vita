import { actionFunction } from '@/utils/types'


type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction
  text: string;
  children?: React.ReactNode
  
}


function ImageInputContainer() {
  return ( 
    <div>
      ImageInputContainer

    </div>
   )
}
 
export default ImageInputContainer
import { Skeleton } from '../ui/skeleton'

function LoadingTable({
  row = 5
}: {
  rows?: number
}) {
  return (
    <div className='mb-4 key={index}'>
      <Skeleton className='/>
    </div>
  )
}

export default LoadingTable

import { PiUserCircleLight } from 'react-icons/pi'
import { currentUser, auth } from '@clerk/nextjs/server'

async function UserIcon() {
  const user = await currentUser()
  const profileImage = user?.imageUrl


  return (
    <div>UserIcone</div>
  )
}
export default UserIcon
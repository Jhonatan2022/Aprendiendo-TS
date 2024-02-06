import { useAuth } from '../context/authContext'

function ProfilePage() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md mx-auto my-20">
      <h1 className="text-3xl text-center text-white">Profile</h1>
      <div className="text-white">
        {/* <p>Username: {user.username}</p> */}
        {/* <p>Email: {user.email}</p> */}
      </div>
    </div>
  )
}

export { ProfilePage }

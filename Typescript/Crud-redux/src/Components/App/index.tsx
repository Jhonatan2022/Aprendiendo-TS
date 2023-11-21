import { ListOfUsers } from '../ListOfUser'
import { CreateUser } from '../CreateUser'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <ListOfUsers />
      <CreateUser />
      <Toaster richColors />
    </>
  )
}

export { App }

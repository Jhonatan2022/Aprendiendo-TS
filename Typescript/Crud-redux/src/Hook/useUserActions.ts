import { type UserId, deleteUserById, addNewUser, type User } from '../Store/Users/Slice'
import { useAppDispatch } from './store'

export function useUserActions() {
  const dispatch = useAppDispatch()

  const addUser = ({ name, email, github }: User) => {
    dispatch(addNewUser({ name, email, github }))
  }

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return {
    removeUser,
    addUser
  }
}

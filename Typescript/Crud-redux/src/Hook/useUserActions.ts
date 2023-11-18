import { type UserId, deleteUserById } from '../Store/Users/Slice'
import { useAppDispatch } from './store'

export function useUserActions() {
  const dispatch = useAppDispatch()

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return {
    removeUser
  }
}

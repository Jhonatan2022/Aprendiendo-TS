import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer, { rollBackUser, type UserWithId } from './Users/Slice'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
  }

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action
    const previousState = store.getState()
    next(action)

    if (type === 'users/deleteUserById') {
      const userIdToRemove = payload
      const userToRemove = previousState.users.find(
        (user: UserWithId) => user.id === userIdToRemove
      )

      fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
        method: 'DELETE'
      })
        .then((res) => {
          if (res.ok) {
            toast.success(`User ${payload} deleted successfully`)
          } else {
            throw new Error('Error deleting user')
          }
        })
        .catch((err) => {
          toast.error(`Error deleting user ${userIdToRemove}`)
          if (userToRemove) store.dispatch(rollBackUser(userToRemove))
          console.log(err)
        })
    }

    if (type === 'users/addNewUser') {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST'
        // body: JSON.stringify(payload),
        // headers: {
        //   'Content-type': 'application/json; charset=UTF-8'
        // }
      })
        .then((res) => {
          if (res.ok) {
            toast.success(`User ${payload.name} added successfully`)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

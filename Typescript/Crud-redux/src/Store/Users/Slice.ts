import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'Jhonatan2022',
    email: 'j@gmail.com',
    github: 'jhonatan2022'
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'kk@gmail.com',
    github: 'manuel'
  },
  {
    id: '3',
    name: 'John Smith',
    email: 'sc@gmail.com',
    github: 'jose'
  }
]

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID().split('-')[0]
      state.push({ id, ...action.payload })
      // return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
    rollBackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(
        (user) => user.id === action.payload.id
      ) // TODO: check if user already exist
      if (!isUserAlreadyDefined) {
        state.push(action.payload)
      }
    }
  }
})

export default usersSlice.reducer

export const { deleteUserById, addNewUser, rollBackUser } = usersSlice.actions

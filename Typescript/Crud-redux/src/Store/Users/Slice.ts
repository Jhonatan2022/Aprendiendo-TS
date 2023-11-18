import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions

import { createSlice } from '@reduxjs/toolkit'

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

const initialState: UserWithId[] = [
  {
    id: '1',
    name: 'John Doe',
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
  reducers: {}
})

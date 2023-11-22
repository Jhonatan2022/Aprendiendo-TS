import { useEffect, useState } from 'react'
import { type User } from '../../Types/types'
import './Styles.css'
import { UsersLists } from '../UsersLists'

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>Tabla de usuarios</h1>
      <UsersLists users={users} />
    </>
  )
}

export { App }

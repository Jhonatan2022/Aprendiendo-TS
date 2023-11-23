import { useEffect, useState, useRef } from 'react'
import { type User } from '../../Types/types'
import './Styles.css'
import { UsersLists } from '../UsersLists'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortedCountry, setSortedCountry] = useState(false)
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const toggleSortByCountry = () => {
    setSortedCountry((prevState) => !prevState)
  }

  const sortedUsers = sortedCountry
    ? [...users].sort((a, b) => { // toSorted
        return a.location.country.localeCompare(b.location.country)
      })
    : users

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="app">
      <h1>Tabla de usuarios</h1>
      <header>
        <button onClick={toggleColors}>Colorear Filas</button>
        <button onClick={toggleSortByCountry}>
          {sortedCountry ? 'Desordenar' : 'Ordenar por país'}
        </button>
        <button onClick={handleReset}>Resetear</button>
      </header>
      <main>
        <UsersLists deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
      </main>
    </div>
  )
}

export { App }

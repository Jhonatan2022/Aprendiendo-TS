import { useEffect, useState, useRef, useMemo } from 'react'
import { SortBy, type User } from '../../Types/types.d'
import './Styles.css'
import { UsersLists } from '../UsersLists'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortedCountry, setSortedCountry] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const toggleSortByCountry = () => {
    const newSortBy =
      sortedCountry === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSortedCountry(newSortBy)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSortedCountry(sort)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
        return user.location.country
          .toLowerCase()
          .includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sortedCountry === SortBy.NONE) return filteredUsers

    const compareProperty: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last
    }

    return filteredUsers.sort((a, b) => {
      const extracProperty = compareProperty[sortedCountry]
      return extracProperty(a).localeCompare(extracProperty(b))
    })
  }, [filteredUsers, sortedCountry])

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
          {sortedCountry === SortBy.COUNTRY ? 'Desordenar' : 'Ordenar por país'}
        </button>
        <button onClick={handleReset}>Resetear</button>
        <input
          placeholder="Buscar país"
          onChange={(e) => {
            setFilterCountry(e.target.value)
          }}
        />
      </header>
      <main>
        <UsersLists
          deleteUser={handleDelete}
          showColors={showColors}
          users={sortedUsers}
          changeSort={handleChangeSort}
        />
      </main>
    </div>
  )
}

export { App }

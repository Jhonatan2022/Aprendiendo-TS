import { useEffect, useState, useRef, useMemo } from 'react'
import { SortBy, type User } from '../../Types/types.d'
import './Styles.css'
import { UsersLists } from '../UsersLists'

const fetchUsers = async (page: number) => {
  return await fetch(
    `https://randomuser.me/api?results=5&seed=jhonatan&page=${page}`
  ).then(async (res) => {
    if (!res.ok) throw new Error('Ha habido un error')
    return await res.json()
  })
    .then((res) => res.results)
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortedCountry, setSortedCountry] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

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
    setLoading(true)
    setError(false)
    fetchUsers(currentPage)
      .then((users) => {
        // then cuando se resuleve la promesa
        setUsers((prevUsers) => {
          const newUsers = prevUsers.concat(users)
          originalUsers.current = newUsers
          return newUsers
        })
      })
      .catch((err) => {
        setError(true)
        console.error(err)
      })
      .finally(() => {
        // cuando se resuelve o rechaza la promesa (siempre se ejecuta)
        setLoading(false)
      })
  }, [currentPage])

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
        {users.length > 0 && (
          <UsersLists
            changeSort={handleChangeSort}
            deleteUser={handleDelete}
            users={sortedUsers}
            showColors={showColors}
          />
        )}
        {loading && <strong>Cargando...</strong>}
        {error && <p>Ha habido un error</p>}
        {users.length === 0 && <p>No hay usuarios</p>}
        {!loading && !error && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            Cargar más
          </button>
        )}
      </main>
    </div>
  )
}

export { App }

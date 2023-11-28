import { useState, useMemo } from 'react'
import { SortBy, type User } from '../../Types/types.d'
import { useUsers } from '../../Hooks/useUsers'
import { Results } from '../Results'
import { UsersLists } from '../UsersLists'
import './Styles.css'

function App() {
  const { isLoading, isError, users, hasNextPage, refetch, fetchNextPage } =
    useUsers()

  const [showColors, setShowColors] = useState(false)
  const [sortedCountry, setSortedCountry] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const handleReset = () => {
    void refetch()
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
    // const filteredUsers = users.filter((user) => user.email !== email)
    // setUsers(filteredUsers)
  }

  return (
    <div className="app">
      <h1>Tabla de usuarios</h1>
      <Results />
      <header>
        <button onClick={toggleColors}>Colorear Filas</button>
        <button onClick={toggleSortByCountry}>
          {sortedCountry === SortBy.COUNTRY ? 'Desordenar' : 'Ordenar por país'}
        </button>
        <button onClick={() => handleReset}>Resetear</button>
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
        {isLoading && <strong>Cargando...</strong>}
        {isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}
        {!isLoading && !isError && hasNextPage && (
          <button
            onClick={() => {
              void fetchNextPage()
            }}
          >
            Cargar más
          </button>
        )}
        {!isLoading && !isError && !hasNextPage && (
          <strong>No hay más resultados</strong>
        )}
      </main>
    </div>
  )
}

export { App }

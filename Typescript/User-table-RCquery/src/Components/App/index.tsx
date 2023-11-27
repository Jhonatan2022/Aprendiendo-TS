import { useState, useMemo } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { SortBy, type User } from '../../Types/types.d'
import { UsersLists } from '../UsersLists'
import './Styles.css'

const fetchUsers = async ({ pageParam }: { pageParam?: number }) => {
  console.log('pageParam', pageParam)
  return await fetch(
    `https://randomuser.me/api?results=5&seed=jhonatan&page=${pageParam}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error('Ha habido un error')
      return await res.json()
    })
    .then((res) => {
      const nextCursor = Number(res.info.page) + 1
      return {
        users: res.results,
        nextCursor
      }
    })
}

function App() {
  const queryKey = ['users']
  const {
    isError,
    isLoading,
    data,
    refetch,
    fetchNextPage
  } = useInfiniteQuery<{ nextCursor: number, users: User[] }>({
    queryKey,
    // queryFn: async ({ pageParam }: any) => await fetchUsers(pageParam),
    queryFn: fetchUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  })

  console.log('data', data)

  const users: User[] = data?.pages.flatMap((page) => page.users) ?? []

  const [showColors, setShowColors] = useState(false)
  const [sortedCountry, setSortedCountry] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const handleReset = async () => {
    await refetch()
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
        {!isLoading && !isError && (
          <button onClick={() => fetchNextPage()}>
            Cargar más
          </button>
        )}
      </main>
    </div>
  )
}

export { App }

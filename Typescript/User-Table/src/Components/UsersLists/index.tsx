import { SortBy, type User } from '../../Types/types.d'

interface Props {
  changeSort: (sort: SortBy) => void
  deleteUser: (email: string) => void
  users: User[]
  showColors: boolean
}

function UsersLists({ changeSort, deleteUser, showColors, users }: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th
            onClick={() => {
              changeSort(SortBy.NAME)
            }}
          >
            Nombre
          </th>
          <th
            onClick={() => {
              changeSort(SortBy.LAST)
            }}
          >
            Apellido
          </th>
          <th
            onClick={() => {
              changeSort(SortBy.COUNTRY)
            }}
          >
            País
          </th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody className={showColors ? 'table--showColors' : 'table'}>
        {users.map((user) => {
          // const backgroundColor = index % 2 === 0 ? '#333' : '#555'
          // const color = showColors ? backgroundColor : 'transparent'

          return (
            <tr key={user.email}>
              <td style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={user.picture.thumbnail}
                  alt={user.name.title}
                  style={{ borderRadius: '50%' }}
                />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user.email)
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { UsersLists }

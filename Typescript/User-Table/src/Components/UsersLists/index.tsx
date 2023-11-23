import { type User } from '../../Types/types'

interface Props {
  deleteUser: (email: string) => void
  users: User[]
  showColors: boolean
}

function UsersLists({ deleteUser, showColors, users }: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColors ? backgroundColor : 'transparent'

          return (
            <tr key={user.email} style={{ backgroundColor: color }}>
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

import { useUsers } from '../../Hooks/useUsers'

function Results() {
  const { users } = useUsers()
  return <h3>Usuarios: {users.length} </h3>
}

export { Results }

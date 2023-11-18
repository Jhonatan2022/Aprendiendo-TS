import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Title,
  Badge
} from '@tremor/react'
import { Icons } from '../Icons'
import { useAppSelector } from '../../Hook/store'
import { useUserActions } from '../../Hook/useUserActions'

function ListOfUsers() {
  const { TrashIcon, EditIcon } = Icons()
  const users = useAppSelector((state) => state.users)
  const { removeUser } = useUserActions()

  return (
    <Card>
      <Title>
        Users
        <Badge style={{ marginLeft: '8px' }}>{users.length}</Badge>
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}
                  src={`https://unavatar.io/github/${item.github}`}
                  alt={item.name}
                />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <button type="button">
                  <EditIcon />
                </button>
                <button
                  type="button"
                  onClick={() => removeUser(item.id)}
                  aria-label="remove user"
                >
                  <TrashIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export { ListOfUsers }

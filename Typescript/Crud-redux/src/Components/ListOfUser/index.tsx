import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody
} from '@tremor/react'
import { Icons } from '../Icons'

const users: {
  id: string
  name: string
  email: string
  github: string
}[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'j@gmail.com',
    github: 'jhonatan2022'
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'kk@gmail.com',
    github: 'manuel'
  },
  {
    id: '3',
    name: 'John Smith',
    email: 'sc@gmail.com',
    github: 'jose'
  }
]

function ListOfUsers () {
  const { TrashIcon, EditIcon } = Icons()

  return (
    <Card>
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
                <button type='button' >
                  <EditIcon />
                </button>
                <button type='button' >
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

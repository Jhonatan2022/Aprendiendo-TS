import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta
} from '@tremor/react'

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
    github: 'johndoe'
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'kk@gmail.com',
    github: 'janedoe'
  },
  {
    id: '3',
    name: 'John Smith',
    email: 'sc@gmail.com',
    github: 'johnsmith'
  }
]

function ListOfUsers () {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Leads</TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Variance</TableHeaderCell>
            <TableHeaderCell className="text-right">Region</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <BadgeDelta deltaType={item.name} size="xs">
                  {item.name}
                </BadgeDelta>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export { ListOfUsers }

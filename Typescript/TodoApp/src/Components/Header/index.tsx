import { type TodoTitle } from '../../Types/types'
import { CreateTodo } from '../CreateTodo'

interface Props {
  addTodo: ({ title }: TodoTitle) => void
}

const Header: React.FC<Props> = ({ addTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src="https://www.svgrepo.com/show/374144/typescript.svg"
        />
      </h1>
      <CreateTodo addTodo={addTodo} />
    </header>
  )
}

export { Header }

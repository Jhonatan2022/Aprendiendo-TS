import { type ListTodos } from '../../Types/types'
import { Todo } from '../Todo'

interface Props {
  todos: ListTodos
  handleRemove: (id: string) => void
}

const Todos: React.FC<Props> = ({ todos, handleRemove }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleRemove={handleRemove}
          />
        </li>
      ))}
    </ul>
  )
}

export { Todos }

import { type ListTodos } from '../../Types/types'
import { Todo } from '../Todo'

interface Props {
  todos: ListTodos
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  )
}

export { Todos }

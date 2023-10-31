import { type TodoId, type ListTodos, type Todo as TodoType } from '../../Types/types'
import { Todo } from '../Todo'

interface Props {
  todos: ListTodos
  handleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  handleRemove: ({ id }: TodoId) => void
}

const Todos: React.FC<Props> = ({ todos, handleRemove, handleComplete }) => {
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
            handleComplete={handleComplete}
          />
        </li>
      ))}
    </ul>
  )
}

export { Todos }

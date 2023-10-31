import { useState } from 'react'
import { Todos } from '../Todos'
import { type TodoId, type Todo as TodoType } from '../../Types/types'

const todosMocks = [
  {
    id: '1',
    title: 'Learn React',
    completed: false
  },
  {
    id: '2',
    title: 'Learn Typescript',
    completed: true
  },
  {
    id: '3',
    title: 'Learn Redux',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(todosMocks)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        handleComplete={handleComplete}
        handleRemove={handleRemove}
        todos={todos} />
    </div>
  )
}

export { App }

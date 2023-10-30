import { useState } from 'react'
import { Todos } from '../Todos'

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

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        handleRemove={handleRemove}
        todos={todos} />
    </div>
  )
}

export { App }

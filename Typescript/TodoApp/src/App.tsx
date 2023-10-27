import { useState } from 'react'
import { Todos } from './Components/Todos'

const todosMocks = [
  {
    id: '1',
    title: 'Learn React',
    completed: false
  },
  {
    id: '2',
    title: 'Learn Typescript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn Redux',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos] = useState(todosMocks)

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  )
}

export { App }

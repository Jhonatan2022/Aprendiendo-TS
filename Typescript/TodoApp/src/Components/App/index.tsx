import { useState } from 'react'
import { Todos } from '../Todos'
import {
  type FilterValue,
  type TodoId,
  type Todo as TodoType
} from '../../Types/types'
import { TODO_FILTERS } from '../../Const/const'
import { Footer } from '../Footer'
import { todosMocks } from '../../Mock'

function App (): JSX.Element {
  const [todos, setTodos] = useState(todosMocks)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const activeCount = todos.filter((todo) => !todo.completed).length

  const removeTaskCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        handleComplete={handleComplete}
        handleRemove={handleRemove}
        todos={filteredTodos}
      />

      <Footer
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        filtersSelected={filterSelected}
        clearCompleted={removeTaskCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export { App }

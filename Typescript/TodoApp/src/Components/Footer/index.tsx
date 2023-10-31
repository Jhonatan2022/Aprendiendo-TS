import { type FilterValue, type ListTodos } from '../../Types/types'
import { Filters } from '../Filters'

interface Props {
  activeCount: number
  completedCount: number
  todos: ListTodos
  filtersSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filtersSelected, handleFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>tareas pendientes
        <strong>{completedCount}</strong>
      </span>
      <Filters
        filtersSelected={filtersSelected}
        filtersChange={handleFilterChange}
      />
    </footer>
  )
}

export { Footer }

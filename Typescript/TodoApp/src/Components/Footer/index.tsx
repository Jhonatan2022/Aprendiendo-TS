import { type FilterValue } from '../../Types/types'
import { Filters } from '../Filters'

interface Props {
  activeCount: number
  completedCount: number
  filtersSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  clearCompleted: () => void
}

const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filtersSelected, handleFilterChange, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        { activeCount === 0 && completedCount === 0 ? 'No hay tareas' : filtersSelected === 'all' ? `Hay ${activeCount + completedCount} tareas` : filtersSelected === 'active' ? `Tareas activas ${activeCount}` : filtersSelected === 'completed' ? `Tareas completadas ${completedCount}` : '---' }
      </span>
      <Filters
        filtersSelected={filtersSelected}
        filtersChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed"
          onClick={clearCompleted}
        >Borrar Completados</button>
      )}
    </footer>
  )
}

export { Footer }

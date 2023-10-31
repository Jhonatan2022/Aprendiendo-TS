import { FILTERS_BUTTONS } from '../../Const/const'
import { type FilterValue } from '../../Types/types'

interface Props {
  filtersSelected: FilterValue
  filtersChange: (filter: FilterValue) => void
}

const Filters: React.FC<Props> = ({ filtersSelected, filtersChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filtersSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                filtersChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export { Filters }

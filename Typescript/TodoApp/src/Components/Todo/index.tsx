import { type Todo as TodoType } from '../../Types/types'

interface Props extends TodoType {
  handleRemove: (id: string) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, handleRemove }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {
        handleRemove(id)
      }} />
    </div>
  )
}

export { Todo }

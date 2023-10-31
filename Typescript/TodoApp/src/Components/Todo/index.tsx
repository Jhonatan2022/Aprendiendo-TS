import { type TodoId, type Todo as TodoType } from '../../Types/types'

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void
  handleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleComplete }) => {
  const handleCompleteBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleComplete({ id, completed: event.target.checked })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleCompleteBox
          // ({ target }) => {
          // handleComplete({ id, completed: target.checked })
          // }
      }
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {
        handleRemove({ id })
      }} />
    </div>
  )
}

export { Todo }

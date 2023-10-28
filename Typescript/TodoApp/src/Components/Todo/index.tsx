import { type Todo as TodoType } from '../../Types/types'

type Props = TodoType

const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {}} />
    </div>
  )
}

export { Todo }

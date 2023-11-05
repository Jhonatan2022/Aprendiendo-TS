import { type TodoTitle } from '../../Types/types'
import { useState } from 'react'

interface Props {
  addTodo: ({ title }: TodoTitle) => void
}

const CreateTodo: React.FC<Props> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  )
}

export { CreateTodo }

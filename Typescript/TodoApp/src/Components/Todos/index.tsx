interface Todo {
  id: string
  title: string
  completed: boolean
}
type ListTodos = Todo[]

interface Props {
  todos: ListTodos
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export { Todos }

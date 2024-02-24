import { useNavigate } from 'react-router-dom'

function TasksPage() {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/new')
  }

  return (
    <div>
      <button onClick={onClick}>New Task
      </button>
      <h1>Tasks</h1>
    </div>
  )
}
export default TasksPage

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

function TasksPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  console.log(user)

  const onClick = () => {
    navigate('/profile')
  }

  return (
    <div>
      <button onClick={onClick}>Go to Profile Page
      </button>
      <h1>Tasks</h1>
    </div>
  )
}
export default TasksPage

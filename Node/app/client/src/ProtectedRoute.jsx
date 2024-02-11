import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/authContext'

function ProtectedRoute() {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" />

  return <Outlet />
}

export { ProtectedRoute }

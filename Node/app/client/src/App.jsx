import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/registerPage'
import { AuthProvider } from './context/authContext'
import LoginPage from './pages/loginPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import TasksPage from './pages/TasksPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>inicio</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={ <ProtectedRoute /> }>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/add-task" />
            <Route path="/tasks/:id" />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterPage } from './pages/registerPage'
import { AuthProvider } from './context/authContext'
import { LoginPage } from './pages/loginPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>inicio</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<h1> task page </h1>} />
          <Route path="/add-task" />
          <Route path="/tasks/:id" />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterPage } from './pages/registerPage'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>inicio</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={ <h1> task page </h1> } />
          <Route path="/add-task" />
          <Route path="/tasks/:id" />
          <Route path="/profile" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

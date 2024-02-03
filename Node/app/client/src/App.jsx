import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterPage } from './pages/registerPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>inicio</h1>}/>
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" />
        <Route path="/add-task" />
        <Route path="/tasks/:id" />
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  )
}

export default App

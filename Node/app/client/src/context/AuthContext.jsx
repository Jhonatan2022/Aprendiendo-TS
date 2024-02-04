import { createContext, useState, useContext } from 'react'
import { registerRequest } from '../api/auth'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const singup = async (user) => {
    try {
      const res = await registerRequest(user)
      setUser(res.user)
      setIsAuthenticated(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        singup,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

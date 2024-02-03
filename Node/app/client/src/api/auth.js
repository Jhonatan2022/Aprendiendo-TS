import axios from 'axios'

const API = 'http://localhost:1234/api'

export const registerRequest = async (user) => {
  return await axios.post(`${API}/register`, user)
}

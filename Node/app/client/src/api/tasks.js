import axios from './axios'

export const getTasksRequest = async () => {
  return await axios.get('/tasks')
}

export const getTaskRequest = async (id) => {
  return await axios.get(`/tasks/${id}`)
}

export const createTaskRequest = async (task) => {
  return await axios.post('/tasks', task)
}

export const updateTaskRequest = async (task) => {
  return await axios.put(`/tasks/${task._id}`, task)
}

export const deleteTaskRequest = async (id) => {
  return await axios.delete(`/tasks/${id}`)
}

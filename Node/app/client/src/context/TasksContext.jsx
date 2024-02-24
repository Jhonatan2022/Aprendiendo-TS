import { createContext, useContext, useState } from 'react'
import { createTaskRequest } from '../api/tasks'

const TasksContext = createContext()

export const useTasks = () => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return context
}

export function TasksProvider({ children }) {
  const [tasks] = useState([])

  const createTask = async (task) => {
    const res = await createTaskRequest(task)
    console.log(res)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

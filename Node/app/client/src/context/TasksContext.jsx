import { createContext, useContext, useState } from 'react'

const TasksContext = createContext()

export const useTasks = () => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return context
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([])

  console.log(setTasks)
  return (
    <TasksContext.Provider
      value={{
        tasks
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

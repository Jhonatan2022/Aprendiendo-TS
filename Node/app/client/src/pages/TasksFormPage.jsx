import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext'

function TasksFormPage() {
  const { register, handleSubmit } = useForm()
  const { createTask } = useTasks()

  const onSubmit = handleSubmit((data) => {
    createTask(data)
  })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md mx-auto my-20">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register('title')}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          autoFocus
        />
      </form>
      <textarea
        rows="3"
        placeholder="Description"
        {...register('description')}
        className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
      ></textarea>

      <button
        className="w-full bg-zinc-500 text-white px-4 py-2 my-2 rounded-md hover:bg-blue-600"
        type="submit"
      >
        Save
      </button>
    </div>
  )
}

export default TasksFormPage

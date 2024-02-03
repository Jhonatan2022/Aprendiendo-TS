import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

function RegisterPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    registerRequest(data)
  })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md mx-auto my-20">
      <form
        onSubmit={onSubmit}
      >
        <input
          type="text"
          {...register('username', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          placeholder="Username"
        />

        <input
          type="email"
          {...register('email', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          placeholder="Email"
        />

        <input
          type="password"
          {...register('password', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          placeholder="Password"
        />

        <button
          type="submit"
          className="w-full bg-zinc-500 text-white px-4 py-2 my-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export { RegisterPage }

import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { singup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks')
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit((data) => {
    singup(data)
  })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md mx-auto my-20">
      {registerErrors.map((error, i) => (
        <div key={i} className="bg-red-600 text-white p-1">
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <h1 className="text-3xl text-center text-white">Register</h1>
        <input
          type="text"
          {...register('username', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

        <input
          type="email"
          {...register('email', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}

        <input
          type="password"
          {...register('password', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

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

export default RegisterPage

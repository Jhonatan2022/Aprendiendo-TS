import { Card, Button, TextInput, Title, Badge } from '@tremor/react'
import { useUserActions } from '../../Hook/useUserActions'
import { useState } from 'react'

function CreateUser() {
  const { addUser } = useUserActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult(null)
    const form = event.currentTarget
    const formData = new FormData(form)

    console.log(formData)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github) {
      setResult('ko')
      return
    }

    addUser({ name, email, github })
    form.reset()
    setResult('ok')
  }

  return (
    <Card style={{ marginTop: '16px' }}>
      <Title>Create User</Title>
      <form onSubmit={handleSubmit}>
        <TextInput name="name" placeholder="Name" />
        <TextInput name="email" placeholder="Email" />
        <TextInput name="github" placeholder="Github" />

        <div>
          <Button type="submit" style={{ marginTop: '16px' }}>
            Create User
          </Button>
          <span>
            {result === 'ok' && <Badge color="green">Created!</Badge>}
            {result === 'ko' && <Badge color="red">Error!</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}

export { CreateUser }

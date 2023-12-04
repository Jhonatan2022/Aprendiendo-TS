import { Container, Stack, Typography } from '@mui/material'
import { Icons } from '../../Icons'

function App() {
  const { JavascriptIcon } = Icons()

  return (
    <main>
      <Container>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavascriptIcon />
          <Typography variant="h2" component="h1">
            Javascript Quizz
          </Typography>
        </Stack>
      </Container>
    </main>
  )
}

export { App }

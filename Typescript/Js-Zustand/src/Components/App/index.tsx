import { Container, Stack, Typography } from '@mui/material'
import { Icons } from '../../Icons'
import { Start } from '../Start'
import { useQuestionsStore } from '../../Store/Questions'
import { Game } from '../Game'

function App() {
  const { JavascriptIcon } = Icons()
  const question = useQuestionsStore((state) => state.questions)

  return (
    <main>
      <Container sx={{ margin: '0 auto', maxWidth: '70%' }} >
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
        {question.length === 0 && <Start />}
        {question.length > 0 && <Game />}
      </Container>
    </main>
  )
}

export { App }

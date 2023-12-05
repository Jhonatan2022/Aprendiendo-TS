import { Button } from '@mui/material'
import { useQuestionsStore } from '../../Store/Questions'

const LIMIT_QUESTIONS = 10

function Start() {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)

  const handdleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button onClick={handdleClick} variant="contained">
      Start
    </Button>
  )
}

export { Start }

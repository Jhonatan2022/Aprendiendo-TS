import { Button } from '@mui/material'
import { useQuestionsData } from '../../Hooks/useQuestionsData'
import { useQuestionsStore } from '../../Store/Questions'

function Footer() {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const { reset } = useQuestionsStore((state) => state)

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`Bien: ${correct} - Mal: ${incorrect} - ? ${unanswered}`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>Reiniciar Quizz</Button>
      </div>
    </footer>
  )
}

export { Footer }

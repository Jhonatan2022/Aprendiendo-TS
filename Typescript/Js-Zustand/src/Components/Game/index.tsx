import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useQuestionsStore } from '../../Store/Questions'
import { type Question as QuestionType } from '../../Types/types'

const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card variant="outlined" sx={{ marginTop: '1rem', padding: '1rem' }}>
      <Typography variant="h5" textAlign="center">
        {info.question}
      </Typography>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ borderRadius: '10px' }}
      >
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgColor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={answer}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

function Game() {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)

  const questionInfo = questions[currentQuestion]

  return <Question info={questionInfo} />
}

export { Game }

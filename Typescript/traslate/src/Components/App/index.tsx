import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from '../../Hooks/useStore'
import { AUTO_LANGUAGE } from '../../Constants/const'
import { ArrowIcon } from '../../Icons'
import { LanguageSelector } from '../LanguageSelector'
import { SectionType } from '../../Types/types.d'
import { TextArea } from '../TextArea'
import './Styles.css'

function App () {
  const {
    loading,
    fromLanguage,
    interchangeLanguages,
    toLanguage,
    setFromLanguage,
    setToLanguage,
    fromText,
    result,
    setFromText,
    setResult
  } = useStore()

  return (
    <Container fluid>
      <h1>Google Traslate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />

            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
              />
          </Stack>
        </Col>

        <Col>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={() => {
              interchangeLanguages()
            }}
          >
            <ArrowIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
              />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export { App }

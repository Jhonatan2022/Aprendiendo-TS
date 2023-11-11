import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import './Styles.css'
import { useStore } from '../../Hooks/useStore'
import { AUTO_LANGUAGE } from '../../Constants/const'
import { ArrowIcon } from '../../Icons'
import { LanguageSelector } from '../LanguageSelector'
import { SectionType } from '../../Types/types'

function App () {
  const {
    fromLanguage,
    interchangeLanguages,
    toLanguage,
    setFromLanguage,
    setToLanguage
  } = useStore()

  return (
    <Container fluid>
      <h1>Google Traslate</h1>

      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}

          <Form.Control
            as="textarea"
            placeholder="Enter text to translate..."
            autoFocus
          />
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
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export { App }

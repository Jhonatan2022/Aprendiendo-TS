import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from '../../Constants/const'
import { type FromLanguage, type Language, SectionType } from '../../Types/types.d'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label="Selecciona un idioma" onChange={handleChange} value={value} >
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

      {Object.entries(SUPORTED_LANGUAGES).map(([key, languageName]) => (
        <option key={key} value={key}>
          {languageName}
        </option>
      ))}
    </Form.Select>
  )
}

export { LanguageSelector }

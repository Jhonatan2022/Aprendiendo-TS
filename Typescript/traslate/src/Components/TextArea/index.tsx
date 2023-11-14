import { Form } from 'react-bootstrap'
import { SectionType } from '../../Types/types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyle = { border: 0, height: '200px', width: '200px' }

const getPlaceholder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Ingresa el texto a traducir'
  if (loading === true) return 'Traduciendo...'
  return 'Traducción'
}

const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonStyle
      : { ...commonStyle, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      onChange={handleChange}
      value={value}
    />
  )
}

export { TextArea }

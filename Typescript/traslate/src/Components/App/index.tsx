import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react'
import { type State } from '../../Types/types'

const initialState: State = {
  frontLanguage: 'auto',
  toLanguage: 'en',
  frontText: '',
  result: '',
  loading: false
}

function reducer (state: State, action) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      frontLanguage: state.toLanguage,
      toLanguage: state.frontLanguage
    }
  }

  if (type === 'SET_FRONT_LANGUAGE') {
    return {
      ...state,
      frontLanguage: payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_FRONT_TEXT') {
    return {
      ...state,
      loading: true,
      frontText: payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: payload
    }
  }

  return state
}

function App () {
  const [state, dispatch] = useReducer(initialState)

  return (
    <div className="App">
      <h1>Google Traslate</h1>
    </div>
  )
}

export { App }

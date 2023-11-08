import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react'
import { type Action, type State } from '../../Types/types'
import './Styles.css'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

function App () {
  const [{ fromLanguage }, dispatch] =
    useReducer(reducer, initialState)

  console.log({ fromLanguage })

  return (
    <div className="App">
      <h1>Google Traslate</h1>
      <button onClick={() => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' })
      }}>Change to Spanish</button>
    </div>
  )
}

export { App }

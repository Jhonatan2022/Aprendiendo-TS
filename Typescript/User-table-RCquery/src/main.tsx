import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Components/App'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)

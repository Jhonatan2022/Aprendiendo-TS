import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { App } from './Components/App'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'
import './index.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client} >
    <React.StrictMode>
      <App />
      <ReactQueryDevtools buttonPosition='bottom-left' />
    </React.StrictMode>
  </QueryClientProvider>
)

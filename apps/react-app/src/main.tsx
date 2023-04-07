import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ComponentProvider from './ComponentsProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // TODO: FIX THIS ERROR 
  // @ts-expect-error
  <React.StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </React.StrictMode>,
)

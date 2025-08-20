import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { NhostProvider } from '@nhost/react'
import { nhost } from './nhost'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NhostProvider nhost={nhost}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NhostProvider>
  </React.StrictMode>
)
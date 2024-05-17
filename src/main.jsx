import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Contexts } from './Context/stateContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexts>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Contexts>
  </React.StrictMode>,
)

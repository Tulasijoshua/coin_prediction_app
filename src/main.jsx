import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PredictionProvider from './context/PredictionContext.jsx'
import AuthProvider from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PredictionProvider>
          <App />
        </PredictionProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

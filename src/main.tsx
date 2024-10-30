import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { DashboardApp } from './DashboardApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardApp />
    </BrowserRouter>
  </React.StrictMode>,
)

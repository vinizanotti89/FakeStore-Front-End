import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles'

import { Login } from './containers/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Login />
    <GlobalStyle />
    </Router>
  </StrictMode>,
)

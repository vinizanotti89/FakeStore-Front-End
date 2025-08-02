import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes'
import GlobalStyle from './styles/globalStyles'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
    <ToastContainer autoClose={3000} theme='colored'/>
  </React.StrictMode>,
)

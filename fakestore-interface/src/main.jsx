import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

// Providers/contexts
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

//Estilos globais
import GlobalStyle from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
        <ToastContainer autoClose={3000} theme="colored" />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);
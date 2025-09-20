import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

// Providers/contexts
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './config/stripeConfig';

//Estilos globais
import GlobalStyle from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <GlobalStyle />
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);

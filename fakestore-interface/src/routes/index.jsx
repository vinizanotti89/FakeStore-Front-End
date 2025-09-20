import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Login } from '../pages/Login';
import { Register } from '../containers/Register';
import ResetarSenha from '../containers/ResetPassword';
import ResetarToken from '../containers/ResetToken';
import { ProductDetails } from '../pages/ProductDetails';
import { CategoryPage } from '../pages/CategoryPage';
import { CartPage } from '../pages/CartPage';
import Checkout from '../containers/Checkout/index';

import { Home } from '../pages/Home/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <Layout>
        <ProductDetails />
      </Layout>
    ),
  },
  {
    path: '/category/:categoryId',
    element: (
      <Layout>
        <CategoryPage />
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Layout>
        <Checkout />,
      </Layout>
    ),
  },

  // Páginas de autenticação SEM o header
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/resetar-senha/:token',
    element: <ResetarSenha />,
  },
  {
    path: '/reset-token/:token',
    element: <ResetarToken />,
  },
]);

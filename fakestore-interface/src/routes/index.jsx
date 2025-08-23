import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../containers/Register";
import ResetarSenha from "../containers/ResetPassword";
import ResetarToken from "../containers/ResetToken";
import { ProductDetails } from '../pages/ProductDetails';
//import { CategoryPage } from './pages/CategoryPage';

import { Home } from "../pages/Home/index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product/:id",
        element: <ProductDetails />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Register />,
    },
    {
        path: "/resetar-senha/:token",
        element: <ResetarSenha />,
    },
    {
        path: "/reset-token/:token",
        element: <ResetarToken />,
    },
])


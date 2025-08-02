import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import ResetarSenha from "../containers/ResetPassword";
import ResetarToken from "../containers/ResetToken";
import { Home } from "../containers/Home/index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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


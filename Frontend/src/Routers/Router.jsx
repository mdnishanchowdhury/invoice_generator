import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SaveDocuments from "../Page/SaveDocuments/SaveDocuments";
import SignUp from "../Page/SignUp/SignUp";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/saveDocuments',
                element: <SaveDocuments></SaveDocuments>
            }
        ]
    },
]);
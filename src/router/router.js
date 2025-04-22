import {createBrowserRouter} from 'react-router';
import {Home} from '../pages/home.jsx';
import {Login} from '../pages/login.jsx';
export const router = createBrowserRouter([
    {
        path: "",
        Component: Home,
    },
    {
        path: "login",
        Component: Login,
    }
]);
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Portada from "./components/Portada";
import Enviarmensaje from "./components/Enviarmensaje";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/portada',
        element: <Portada />
    },
    {
        path: '/enviarmensaje',
        element: <Enviarmensaje />
    }
];

export default AppRoutes;

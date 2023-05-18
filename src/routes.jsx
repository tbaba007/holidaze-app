import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";


const routes=createBrowserRouter([
    {
        path:'*',
        element:<NotFound/>
    },
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default routes;
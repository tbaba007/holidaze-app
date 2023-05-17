import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound";


const routes=createBrowserRouter([
    {
        path:'*',
        element:<NotFound/>
    }
])

export default routes;
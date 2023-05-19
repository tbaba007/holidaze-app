import {lazy,Suspense} from 'react'
import { createBrowserRouter } from "react-router-dom";
import Loading from './components/Loading/Loading';

const Home=lazy(()=>import("./pages/Home"));
const Login=lazy(()=>import("./pages/Login"))
const NotFound=lazy(()=>import("./pages/NotFound"))

const routes=createBrowserRouter([
    {
        path:'*',
        element:<Suspense fallback={<Loading/>}>
        <NotFound/>
        </Suspense>
    },
    {
        path:'/',
        element:<Suspense fallback={<Loading/>}>
                <Home/>
                </Suspense>
    },
    {
        path:"/login",
        element:<Suspense fallback={<Loading/>}>
        <Login/>
        </Suspense>
    }
])

export default routes;
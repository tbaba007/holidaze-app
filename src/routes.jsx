import { lazy, Suspense } from "react"
import { createBrowserRouter,Navigate } from "react-router-dom"
import Loading from "./components/Loading/Loading"

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/User/Login"))
const NotFound = lazy(() => import("./pages/NotFound"))
const SignUp=lazy(()=>import('./pages/User/SignUp'))

const isAuthenticated=localStorage.getItem('user');

const RouteGuard=(props)=>{
    const {component:Component,...rest}=props;
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
    return <Component {...rest}/>
}

const routes = createBrowserRouter([
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    )
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    )
  }
])

export default routes

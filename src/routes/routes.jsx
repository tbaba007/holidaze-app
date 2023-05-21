import { lazy, Suspense } from "react"

import { createBrowserRouter, Navigate } from "react-router-dom"
const Loading=lazy(()=>import('../components/ui/Loading/Loading'));
const Home = lazy(() => import("../pages/Home"))
const Login = lazy(() => import("../pages/User/Login"))
const NotFound = lazy(() => import("../pages/NotFound"))
const SignUp=lazy(()=>import('../pages/User/SignUp'))
const ViewDetails=lazy(()=>import('../pages/VenueDetails'))

const isAuthenticated=localStorage.getItem('user');

const RouteGuard=(props)=>{
    const {children}=props;
    
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
    return children
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
  },
  {
    path:'/details/:id',
    element:(
      <Suspense>
        <RouteGuard>
        <ViewDetails/>
        </RouteGuard>
      </Suspense>
    )
  }
])

export default routes

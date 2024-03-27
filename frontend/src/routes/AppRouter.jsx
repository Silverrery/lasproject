import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Navbar from '../layout/Navbar'
import Home from '../layout/Home'
import Equipment from '../layout/Equipment'
import ShoppingCart from '../layout/ShoppingCart'
import Return from '../layout/Return'
import History from '../layout/History'
import Confirm from '../layout/Confirm'
import Bill from '../layout/Bill'

import AdminHome from '../admin/adminhome'
import NavbarAdmin from '../admin/NavbarAdmin'
import Re from '../admin/Re'
import Details from '../layout/Details'




const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Outlet />
      
      
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
      { path: '/loginForm', element: <LoginForm />},
      { path: '/Home', element: <Home />},
      { path: '/Equipment', element: <Equipment />},
      { path: '/ShoppingCart', element: <ShoppingCart />},
      
      

    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Outlet />
    </>,
    children: [
        { index: true, element: <Home /> },
        { path: '/home', element: <Home />},
        { path: '/Equipment', element: <Equipment />},
        { path: '/ShoppingCart', element: <ShoppingCart />},
        { path: '/Return', element: <Return />},
        { path: '/History', element: <History />},
        { path: '/Confirm', element: <Confirm />},
        { path: '/Bill', element: <Bill />},
        { path: '/Details', element: <Details />},
      ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <NavbarAdmin />
      <Outlet/>
      </>
    ),
    children: [
      { index: true, element: <AdminHome />},
      { path: 'Re', element: <Re />},
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.role === 'admin' ? adminRouter : user ?  userRouter : guestRouter;
  return (
    <RouterProvider router={finalRouter} />
  )
}

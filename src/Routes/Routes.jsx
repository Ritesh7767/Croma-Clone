import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Mobile from '../pages/Mobile/Mobile'
import OnePlus from '../pages/Mobile/OnePlus/OnePlus'
import Error from '../pages/ErrorPage/Error'
import OnePlusDetails from '../pages/Mobile/OnePlus/OnePlusDetails'
import CartPage from '../pages/CartPage/CartPage'
import Profile from '../pages/ProfilePage/Profile'
import PrivateRoute from './PrivateRoutes'

const RouterProvider = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mobilephones'>
          <Route index element={<Mobile/>}/>
          <Route path='oneplus'>
            <Route index element={<OnePlus/>}/>
            <Route path=':id' element={<OnePlusDetails/>}/>
          </Route>
          <Route path=':id' element={<Error/>}/>
        </Route>
        <Route path=':id' element={<Error/>}/>
        <Route path='/404 page not found' element={<Error/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/user-profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
    </Routes>
  )
}

export default RouterProvider
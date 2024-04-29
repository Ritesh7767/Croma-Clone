import { useContext, useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Footer from './Components/Footer/Footer'
import { loginContext } from './LoginContext'
import Login from './Components/Login/Login'
import RouterProvider from './Routes/Routes'
import { ThemeContext } from './Context/themeContext'

function App() {

  let {login} = useContext(loginContext)
  let {dark} = useContext(ThemeContext)

  return (
    <>
    {login && <Login/>}
    <div className={`${login && 'opacity-0'} z-[2] absolute top-0 left-0 right-0 ${dark && 'darkTheme'}`}>
      <NavBar/>
      <RouterProvider/>
      <Footer/>
    </div>
    </>
  )
}

export default App

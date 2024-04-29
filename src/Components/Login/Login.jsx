import React, { useContext } from 'react'
import './Login.css'
import { ImCross } from "react-icons/im";
import { loginContext } from '../../LoginContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { IsAuth } from '../../Context/AuthContext';

const Login = () => {

  let {login, setLogin} = useContext(loginContext)
  let {isAuth, setIsAuth} = useContext(IsAuth)
  let location = useLocation()

  console.log(location)
  let navigate = useNavigate()

  const handleClick = () => {
    if(location.pathname == '/user-profile'){
      // navigate('/')
      if(isAuth){
        console.log(isAuth)
        return setLogin(false)
      }

      setLogin(false)
      navigate('/')
    }
    setLogin(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsAuth(true)
    handleClick()
  }

  return (
      <div className={`fixed top-1/4 left-[30%] w-[42%] z-[3] rounded-sm text-center box-border p-10 bg-[#191919] text-white`}>
        <span onClick={handleClick} className='absolute top-2 cursor-pointer right-4'><ImCross/></span>
          <form onSubmit={handleSubmit}>
              <div className='relative flex items-center w-9/12 m-auto h-12'>
                  <span className='absolute text-xs left-[46.5%] border-[1px] rounded-sm p-1 bg-[#191919]'>OR</span>
                  <span className='border-[1px] p-1 w-1/2 h-full flex items-center justify-center text-sm border-slate-700'>Login</span>
                  <span className='border-[1px] p-1 w-1/2 h-full flex items-center justify-center text-sm border-slate-700'>Create Account</span>
              </div>
              <label className='text-sm mt-4 mb-2 inline-block'>Please Enter your Email ID or Phone number</label><br />
              <input required type='text' placeholder='Enter your Email ID or Phone number' className='w-9/12 h-12 bg-inherit border-[1px] outline-none rounded-sm mt-4 mb-4'/><br />
              <input type="checkbox" checked className='bg-[#00E9BF] text-black signInCheckbox mb-4 mr-2'/>
              <label>keep me signed in</label><br />
              <span className='text-sm font-thin inline-block mb-5'>By continuing you agree to our <a className='text-[#00E9BF] underline'>Terms & Use</a> & <a className='text-[#00E9BF] underline'>Privacy Policy</a></span>
              <br />
              <input className='bg-[#00E9BF] rounded-lg w-9/12 text-slate-800 font-bold p-4 text-sm' type="submit" placeholder='Continue' value='Continue'/>
          </form>
      </div>
  )
}

export default Login
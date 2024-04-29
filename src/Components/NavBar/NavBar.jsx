import React, { useContext, useRef } from 'react'
import './NavBar.css'
import { SlMenu } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { PiAddressBook } from "react-icons/pi";
import { GiCube } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineDevices } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { Opacity } from '../../OpacityContext';
import Menu from './DropDown/Menu';
import {loginContext} from '../../LoginContext';
import { Link, useNavigate } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from '../../Context/themeContext';
import { IsAuth } from '../../Context/AuthContext';

const NavBar = () => {

  let {opacity, setOpacity} = useContext(Opacity)
  let navigate = useNavigate()

  let {login, setLogin} = useContext(loginContext)
  let {dark, setDark} = useContext(ThemeContext)
  let {isAuth, setIsAuth} = useContext(IsAuth)

  console.log(dark)

  const handleClick = () => {
    if(!isAuth) {
      setLogin(true)
      setOpacity(true)
    }
    else {
      setIsAuth(false)
    }
  }

  return (
    <>
    <nav className='navParent'>
      <ul className='nav1'>
        <li>
          <img src="/Images/logo/logo.svg" alt="" onClick={() => navigate('/')}/>
        </li>
        <li>
          <div className='menu relative'>
            <span>
              <SlMenu/>
            </span>
            Menu
            <Menu/>
          </div>
        </li>
        <li>
          <input type="text" placeholder='What are you looking for ?'/>
        </li>
      </ul>
      <ul className='nav2'>
        <li className='text-2xl' onClick={() => setDark(!dark)}>
          {!dark ? <MdLightMode/> : <MdDarkMode/>}
        </li>
        <li>
          <span>Mumbai</span>
        </li>
        <li className='profileLogo relative' onMouseOver={() => setOpacity(true)} onMouseOut={() => setOpacity(false)}>
          <CgProfile/>
          <div className='tooltipContainer absolute w-[25vw] h-[85vh] right-[-8vw] top-[15vh] flex flex-col bg-[#191919] overflow-scroll overscroll-y-contain'>
            <div onClick={() => navigate('/user-profile')}>
              <CgProfile/>
              <div>
                <h3>My Profile</h3>
                <span>Edit your basic details</span>
              </div>
            </div>
            <div>
              <PiAddressBook/>
              <div>
                <h3>My Address</h3>
                <span>Manage your saved addresses</span>
              </div>
            </div>
            <div>
              <GiCube/>
              <div>
                <h3>My Orders</h3>
                <span>View,track,cancel orders and buy</span>
              </div>
            </div>
            <div>
              <MdLocalOffer/>
              <div>
                <h3>My Privilege Offers</h3>
                <span>Exclusive offers for you</span>
              </div>
            </div>
            <div>
              <FaRegHeart/>
              <div>
                <h3>My Wishlist</h3>
                <span>Have a look at your products</span>
              </div>
            </div>
            <div>
              <MdOutlineDevices/>
              <div>
                <h3>My Devices & Plans</h3>
                <span>Manage your devices and plans</span>
              </div>
            </div>
            <div>
              <MdOutlineMessage/>
              <div>
                <h3>My Service and Requests</h3>
                <span>Manage complaints and feedbacks</span>
              </div>
            </div>
            <div onClick={handleClick}>
              <FaPowerOff/>
              <div>
                <h3>{isAuth ? 'Logout' : 'Login'}</h3>
                <span></span>
              </div>
            </div>
          </div>
        </li>
        <Link to={`/cart`}>
          <li className='cartLogo'>
          <FaShoppingCart/>
          </li>
        </Link>
      </ul>
    </nav>
    </>
  )
}

export default NavBar
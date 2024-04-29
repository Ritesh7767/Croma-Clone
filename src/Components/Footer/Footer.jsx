import React from 'react'
import './Footer.css'
import { SiYoutube } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer cromaContainer flex  mt-[10vh] mb-[10vh]">
        <div className='w-1/3 border-r-[1px] border-white'>
            <h3 className='font-bold'>CONNECT WITH US</h3>
            <input type="text" placeholder='Enter Email ID' className='bg-white rounded-md w-3/4 h-[6vh] p-2 focus:outline-none text-black'/>
            <div className='flex justify-around text-2xl mt-3 w-3/4'>
                <span className='hover:text-red-500'><SiYoutube/></span>
                <span className='hover:text-blue-500'><FaFacebookF/></span>
                <span><FaInstagram/></span>
                <span className='hover:text-blue-500'><FaLinkedinIn/></span>
                <span className='hover:text-blue-500'><FaTwitter/></span>
            </div>
            <p className='mt-[8vh] w-3/4'>© Copyright 2023 Croma. All rights reserved</p>
        </div>
        <div className='w-1/3 border-r-[1px] border-white footerList'>
            <ul>
                <li>
                About Croma
                </li>
                <li>
                Help And Support
                </li>
                <li>
                FAQs
                </li>
                <li>
                Buying Guide
                </li>
                <li>
                Return Policy
                </li>
                <li>
                B2B Orders
                </li>
                <li>
                Store Locator
                </li>
                <li>
                E-Waste
                </li>
            </ul>
            <ul>
                <li>
                Franchise Opportunity
                </li>
                <li>
                Site Map
                </li>
                <li>
                Careers At Croma
                </li>
                <li>
                Terms Of Use
                </li>
                <li>
                Disclaimer
                </li>
                <li>
                Privacy Policy
                </li>
                <li>
                Unboxed
                </li>
                <li>
                Gift Card
                </li>
            </ul>
        </div>
        <div className='w-1/3 footerList'>
        <ul>
                <li>
                Televisions & Accessories
                </li>
                <li>
                Home Appliances
                </li>
                <li>
                Phones & Wearables
                </li>
                <li>
                Computers & Tablets
                </li>
                <li>
                Kitchen Appliances
                </li>
                <li>
                Audio & Video
                </li>
                <li>
                Health & Fitness
                </li>
            </ul>
            <ul>
                <li>
                Grooming & Personal Care
                </li>
                <li>
                Cameras & Accessories
                </li>
                <li>
                Smart Devices
                </li>
                <li>
                Gaming
                </li>
                <li>
                Accessories
                </li>
                <li>
                Top Brands
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
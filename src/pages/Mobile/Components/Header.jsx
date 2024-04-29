import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <p className='ml-10 mt-6 text-sm'>Phones & Wearables &#10095; <span className='font-bold'>Mobile Phones</span></p>
        <div className='containerClass'>
            <h2 className='mobileHeading font-light'>Mobile Phones</h2>
        </div>
        <img src="/Images/mobile/Poster/img1.webp" className='relative left-0 right-0'/>
        <div className='containerClass'>
            <h2 className='font-bold text-2xl'>Treat yourself to a new Mobile Phone</h2>
            <p className='w-2/3 mt-4 mb-4'>
            Experience the world at your fingertips! Work, socialise, book a ride, play games, listen to music, watch your favourite shows, take a photo, or simply make a call! Buy a Mobile Phone from Croma that does it all and then some.
            </p>
        </div>
    </div>
  )
}

export default Header
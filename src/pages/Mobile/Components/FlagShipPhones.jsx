import React from 'react'
import Carousel from './Carousel'

const FlagShipPhones = () => {
  return (
    <div className='containerClass'>
        <h2 className='mobileHeading'>Flagship Phones</h2>
        <Carousel height={35}>
            <img src="/Images/mobile/flagship/img1.webp" className='rounded-lg' />
            <img src="/Images/mobile/flagship/img2.webp" className='rounded-lg' />
            <img src="/Images/mobile/flagship/img3.webp" className='rounded-lg' />
            <img src="/Images/mobile/flagship/img4.webp" className='rounded-lg' />
        </Carousel>
    </div>
  )
}

export default FlagShipPhones
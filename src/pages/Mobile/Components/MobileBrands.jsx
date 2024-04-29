import React from 'react'
import Carousel from './Carousel'

const MobileBrands = () => {
  return (
    <div className='containerClass'>
        <h1 className='mobileHeading'>Pick Your Smartphone Brand</h1>
        <Carousel width={24} height={27}>
            <img src="/Images/mobile/brand/img1.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img2.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img3.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img4.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img5.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img6.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img7.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img8.webp" className='rounded-lg' />
            <img src="/Images/mobile/brand/img9.webp" className='rounded-lg' />
        </Carousel>
    </div>
  )
}

export default MobileBrands
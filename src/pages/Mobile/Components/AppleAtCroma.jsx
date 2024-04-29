import React from 'react'
import Carousel from './Carousel'


const AppleAtCroma = () => {
  return (
    <div className='containerClass'>
        <h1 className='mobileHeading'>Apple At Croma</h1>
        <Carousel height={35}>
            <img src="/Images/mobile/apple/img1.webp"/>
            <img src="/Images/mobile/apple/img2.webp"/>
            <img src="/Images/mobile/apple/img3.webp"/>
        </Carousel>
    </div>

  )
}

export default AppleAtCroma
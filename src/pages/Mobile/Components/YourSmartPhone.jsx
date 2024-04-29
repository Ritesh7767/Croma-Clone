import React, { useContext } from 'react'
import Carousel from './Carousel'

const YourSmartPhone = () => {

  return (
    <div className='bg-[#353535]'>
      <div className='containerClass'>
        <h1 className='mobileHeading'>Your Smartphone</h1>
        <Carousel width={24} height={55}>
          <img src="/Images/mobile/yourSmartPhone/img1.webp"/>
          <img src="/Images/mobile/yourSmartPhone/img2.webp"/>
          <img src="/Images/mobile/yourSmartPhone/img3.webp"/>
          <img src="/Images/mobile/yourSmartPhone/img4.webp"/>
          <img src="/Images/mobile/yourSmartPhone/img5.webp"/>
          <img src="/Images/mobile/yourSmartPhone/img6.webp"/>
        </Carousel>
      </div>
    </div>
  )
}

export default YourSmartPhone
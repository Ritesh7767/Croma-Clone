import React from 'react'
import Carousel from './Carousel'

const Budget = () => {
  return (
    <div className='containerClass'>
        <h1 className='mobileHeading'>For Your Budget</h1>
        <Carousel width={24}>
            <img src="/Images/mobile/budget/img1.webp" alt="" />
            <img src="/Images/mobile/budget/img2.webp" alt="" />
            <img src="/Images/mobile/budget/img3.webp" alt="" />
            <img src="/Images/mobile/budget/img4.webp" alt="" />
            <img src="/Images/mobile/budget/img5.webp" alt="" />
            <img src="/Images/mobile/budget/img6.webp" alt="" />
        </Carousel>
    </div>
  )
}

export default Budget
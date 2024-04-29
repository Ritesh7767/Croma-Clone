import React, {useContext} from 'react'
import Carousel from './Carousel'

const ChooseYourType = () => {


  return (
    <div className='containerClass h-[45vh]'>
      <h2 className='mobileHeading'>Choose Your Type</h2>
        <Carousel height={45} width={33}>
          <img src="/Images/mobile/choose/img1.webp" className='rounded-lg'/>
          <img src="/Images/mobile/choose/img2.webp" className='rounded-lg'/>
          <img src="/Images/mobile/choose/img3.webp" className='rounded-lg'/>
        </Carousel>
    </div>
  )
}

export default ChooseYourType
import React, { createElement, useContext, useRef } from 'react'
import Carousel from './Carousel'

export const  KnowYourMobile = () => {
    
    let height = 45
    let width = 24

    let Elements = []
    for(let x = 1; x <= 9; x++){
        let image = createElement('img',
        {
            src : `/Images/mobile/knowYour/img${x}.webp`,
            alt:'mobilePhotos',
             key: x
        })
        Elements.push(image)
    }


  return (
    <>
        <div className='containerClass'>
            <h2 className='mobileHeading'>Know Your Mobile Phones</h2>
            <Carousel height={height} width={width}>
                {Elements}
            </Carousel>
        </div>

    </>
  )
}

export default KnowYourMobile
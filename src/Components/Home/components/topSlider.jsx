import React, { useEffect, useState } from 'react'
import './topSlider.css'

const TopSlider = () => {

  let [counter, setCounter] = useState(1)
  let [autoPlay, setAutoPlay] = useState(true)

  const handleClick = (n) => {
    setCounter(prev => {
      if(prev == 8){
        return 1
      }
      else if(prev == 0){
        return 8
      }
      else{
        return prev + n
      }      
    })
}

  useEffect(() => {
    let id;
    if(autoPlay){
      id = setInterval(() => {
        handleClick(1)
      }, 7000)
    }

    return () => {
      console.log("interval is cleared")
      clearInterval(id)
    }
  },[])

  return (
    <>

        <div className="slider-container">
                <img src="/Images/homeImages/topSlider/img1.webp" style={{display : counter == 1 ? 'block' : 'none'}}/>
                <img src="/Images/homeImages/topSlider/img2.webp" style={{display : counter == 2 ? 'block' : 'none'}}/>
                <img src="/Images/homeImages/topSlider/img3.webp" style={{display : counter == 3 ? 'block' : 'none'}}/>
                <img src="/Images/homeImages/topSlider/img4.webp" style={{display : counter == 4 ? 'block' : 'none'}}/>
                <img src="/Images/homeImages/topSlider/img5.webp" style={{display : counter == 5 ? 'block' : 'none'}}/>
                <img src="/Images/homeImages/topSlider/img6.webp" style={{display : counter == 6 ? 'block' : 'none'}}/>
                <img src="/Images/homeImages/topSlider/img7.webp" style={{display : counter == 7 ? 'block' : 'none'}}/>
                <img src="/Images/homeImages/topSlider/img8.webp" style={{display : counter == 8 ? 'block' : 'none'}}/>
              <a className='prev cursor-pointer' onClick={() => handleClick(-1)}>&#10094;</a>
              <a className='next cursor-pointer' onClick={() => handleClick(1)}>&#10095;</a>
            <div className='dot-container'>
              <span className={counter == 1 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
              <span className={counter == 2 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
              <span className={counter == 3 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
              <span className={counter == 4 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
              <span className={counter == 5 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
              <span className={counter == 6 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
              <span className={counter == 7 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
              <span className={counter == 8 ? 'active dot' : "dot"}>
                <span className='track'></span>
              </span>
            </div>
          </div>
    </> 
  )
}

export default TopSlider
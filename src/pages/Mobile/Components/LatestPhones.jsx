import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const LatestPhones = () => {

  let navigate = useNavigate()

  const handleClick = () => {
    navigate('/mobilephones/oneplus')
  }

  return (
    <div className='containerClass'>
        <h2 className='mobileHeading'>Latest Mobile Phones For You</h2>
        <div className='grid cursor-pointer grid-flow-row grid-cols-4 gap-4 w-full m-auto rounded'>
            <img src="/Images/mobile/latestMobiles/img1.webp" className='col-span-2 rounded-md'/>
            <img src="/Images/mobile/latestMobiles/img2.webp" className='col-span-2 rounded-md'/>
            <img src="/Images/mobile/latestMobiles/img3.webp" onClick={handleClick}/>
            <img src="/Images/mobile/latestMobiles/img4.webp"/>
            <img src="/Images/mobile/latestMobiles/img5.webp"/>
            <img src="/Images/mobile/latestMobiles/img6.webp"/>
        </div>
    </div>

  )
}

export default LatestPhones
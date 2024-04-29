import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Error = () => {

    let param = useParams()
    console.log(param)
    
    let navigate = useNavigate()

    const handleClick = () => {
      navigate('/')
    }

  return (
    // <h1 className='font-bold mt-[12vh] text-white text-xl'>Error</h1>
    <div className='w-screen h-screen mt-[19vh]'>
      <div className='w-[38%] m-auto'>
        <img src="/Images/Error/img1.webp" className='h-[30vh] w-full inline mt-20'/>
        <h1 className='text-white mt-14 text-2xl'>4O4 Page Not Found</h1>
        <button className='text-white w-2/5 border font-bold rounded-md h-10' onClick={handleClick}>Retry</button>
      </div>
    </div>
  )
}

export default Error
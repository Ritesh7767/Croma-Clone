import React from 'react'
import { useSelector } from 'react-redux'
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OnePlus = () => {
    console.log("this is oneplus")

    let data = useSelector(state => state.onePlusReducer)
    console.log(data)

  return (
    <div className='containerClass mt-[12vh]'>
      <div>
        <p className='text-xs inline-block mt-1 mb-1'>Campaign &#10095; <span className='font-bold'>OnePlus 12R 5G</span></p>
        <h1 className='mobileHeading text-3xl'>OnePlus 12R 5G</h1>
      </div>
      <div className='grid grid-flow-row grid-cols-3 gap-10 gap-y-9'>
        {data?.map((ele,i) => {
          let {title, rating , price} = ele
          price = price.toLocaleString('en-IN', {
            minimumFractionDigits : 2,
            maximumFractionDigits : 2
          })
          return (
            <Link to={`/mobilephones/oneplus/${title}`} >
              <div className='h-[65vh] relative'>
                  <span className='absolute top-3 right-4 rounded-full bg-black bg-opacity-15 text-xl p-3 font-thin hover:text-[#12DAA8] transition-colors'><FaRegHeart/></span>
                <div className='h-[40vh] flex justify-center items-center bg-[#393939] rounded-2xl'>
                  <img src={`/Images/onePlus/img${i+1}.webp`} className='h-[80%]' />
                </div>
                <h2 className='mt-6 font-bold text-lg'>{title}</h2>
                <p className='mt-4 flex items-center text-[#12DAA8]'>{rating} <span><IoMdStar/></span> </p>
                <span className='inline-block mt-4 font-extrabold text-xl'>&#8377;{price}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default OnePlus
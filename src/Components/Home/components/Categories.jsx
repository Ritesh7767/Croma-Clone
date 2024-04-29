import React, { createElement, useEffect, useRef, useState } from 'react'
import './Categories.css'
import { Link, useNavigate } from 'react-router-dom'

const Categories = () => {

    let [slide, setSlide] = useState(0)
    let elements = []
    let navigate = useNavigate()

    const handleClick = () => {
      navigate('/mobilePhones')
    }

        for(let i = 0; i < 18; i++){
            let element = createElement('div',
             {className : "cursor-pointer",
              style : {
                left : `${i * 10.1}%`,
                transition : '0.5s ease-in-out',
                transform : `translateX(-${slide * 100}%)`
              },
              key : i
            },
              createElement('img',
               {src :`/Images/homeImages/categories/img${i+ 1}.webp`, className : "", onClick : handleClick}
               , null))
            elements.push(element)
        }

        console.log(elements)
  return ( 
    <>
    <div className='categories-parent'>
        <a className='categories-prev' onClick={() => setSlide(prev => prev - 8)}>&#10094;</a>
        <div className="categories-container">
            {   
                elements.map(element => {
                    return (
                        element
                    )
                })
            }
        </div>
        <a className='categories-next' onClick={() => setSlide(prev => prev + 8)}>&#10095;</a>
    </div>
    </>
  )
}

export default Categories
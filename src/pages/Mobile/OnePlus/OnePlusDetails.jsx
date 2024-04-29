import React, { createElement, useEffect, useMemo, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import './OnePlus.css'

const OnePlusDetails = () => {

    let [translate, setTranslate] = useState(0)
    let [savingTranslate, setSavingTranslate] = useState(0)
    let [cartDisplay, setCartDisplay] = useState('invisible')
    let [disabledBtn, setDisabledBtn] = useState(JSON.parse(localStorage.getItem('id')) || [])
    let imageArr = []
    let image1 = []

    let params = useParams()
    let data = useSelector(state => state.onePlusReducer)
    let product = data.filter(ele => ele.title == params.id) || null
    let navigate = useNavigate()

    console.log(product)

    if(!product) navigate('/404 page not found')

    let mobileColor = product[0]?.color

    const handleClick = ele => {

      let set = new Set([...disabledBtn, ele.id])
      localStorage.setItem('id', JSON.stringify([...set]))
      setDisabledBtn([...set])
    }

    console.log(disabledBtn)

    window.onscroll = () => {
      if(window.pageYOffset){
        setCartDisplay('visible')
      }
      else{
        setCartDisplay('invisible')
      }
    }

    for(let x = 0; x < 7; x++){
      let img = createElement('img', {
        src : `/Images/onePlus/${mobileColor}/img${x + 1}.webp`,
        style : {
          position : 'absolute',
          top : `${x * 25}%`,
          height : '23%',
          transform : `translateY(-${translate * 100}%)`,
          transition : `transform 0.6s ease-in-out`,
        },
        className : `border border-slate-700 cursor-pointer rounded-sm ${translate == x && 'outline-2 outline outline-[#12DAA8]'} `,
        onClick : () => setTranslate(x),
        key : x
      },
        null
      )
      
      let img1 = createElement("img", {
        src : `/Images/onePlus/${mobileColor}/img${x + 1}.webp`,
        style : {
          position : 'absolute',
          left : `${x * 100}%`,
          transform : `translateX(-${translate * 100}%)`,
          transition : 'transform 0.4s ease-in-out',
          width : '100%',
          height : '100%',
        },
        className : '',
        key : x
      })
      image1.push(img1)
      imageArr.push(img)
    }

  return (
    <div className='containerClass mt-[12vh] flex h-[85vh] '>
        <div className='w-[50%] h-[80%]'>
          <div className='flex h-[80%]'>
            <div className='w-1/5'>
                <a className='h-[7.5%] text-2xl flex justify-center items-center rotate-90 cursor-pointer' onClick={() => setTranslate(prev => prev - 1)}>&#10094;</a>
              <div className={`h-[85%] overflow-hidden relative flex flex-col items-center`}>
                {imageArr.map(ele => ele)}
              </div>
                <a className='h-[7.5%] text-2xl flex justify-center items-center rotate-90 cursor-pointer' onClick={() => setTranslate(prev => prev + 1)}>&#10095;</a>
            </div>
            <div className='relative w-[80%] overflow-hidden'>
              {image1.map(img => {
                return (
                  <div className=''>
                    {img}
                  </div>
                )
              })}
            </div>
        </div>
      </div>
        <div className='w-[50%] flex justify-center overflow-auto detailContainer'>
          <div className='w-[95%]'>

          {
            product.map((ele, i) => {
              
              let {id, title, rating, price, emi, ramOptions, ram, storageOptions, storage, color, superSavings, keyFeatures} = ele
              price = price.toLocaleString('en-IN', {
                minimumFractionDigits : 2,
                maximumFractionDigits : 2
              })
              emi = emi.toLocaleString('en-IN', {
                minimumFractionDigits : 2,
                maximumFractionDigits : 2
              })
              return (
                <>
                <div className='container flex flex-col gap-6 text-xs mb-3' key={i}>

                <div>
                  <h1 className='font-bold text-lg'>{title}</h1>
                  <div className='text-[#12DAA8] flex items-center mb-2 text-lg'> <span>{rating}</span> <span><IoMdStar/></span> </div>
                </div>
                  <div className='flex text-2xl justify-between w-[70%] mt-[-20px] items-center'>
                    <div className='font-bold flex flex-col'>
                      <div>&#8377;{price}</div>
                      <span className='text-xs'>(Incl. all Taxes)</span>
                    </div>
                    <div className='relative border'>
                      <div className='w-10'></div>
                      <span className='absolute left-2 -top-3 bg-[#191919] text-sm border'>OR</span>
                    </div>
                    <div className='flex flex-col'>
                      <div className=''>&#8377;{`${emi}/mo*`}</div>
                      <a className='text-[#12DAA8] underline text-xs'>EMI Options</a>
                    </div>
                  </div>
                  <div className=''>
                    <h3 className='text-xs mb-3'>RAM</h3>
                    <div className='flex gap-2'>
                    {
                      ramOptions.map((ele, i) => {
                        
                        return (
                          <span className={`flex border justify-center items-center w-[14%] h-10 rounded-md ${ele == ram && 'outline outline-[#12DAA8] -outline-offset-1 outline-1'} text-xs font-bold `} key={i}>
                          {ele}GB
                          </span>
                        )
                      }
                      )
                    }
                    </div>
                  </div>
                  <div className=''>
                    <h3 className='text-xs mb-3'>Internal Storage</h3>
                    <div className='flex gap-2'>
                    {storageOptions.map(ele => (
                        <span className={`border flex justify-center items-center w-[14%] h-10 rounded-md font-bold ${ele == storage && 'outline outline-[#12DAA8] -outline-offset-1 outline-1'}`}>{ele}GB</span>
                    ))}
                  </div>
                  </div>
                  <div>
                    <h3 className='mb-2'>Color</h3>
                    <span className='border flex justify-center items-center w-[12%] h-10 rounded-md border-[#12DAA8] text-xs font-bold '>{color}</span>
                    <div></div>
                  </div>
                </div>
                  <div className='relative h-[25vh] mb-4'>
                    <h2 className='text-md font-bold border-b mb-1 '>{'Super Savings (4 OFFERS))'}</h2>
                    <div className='relative ml-3 h-[18vh] overflow-hidden'>
                      {superSavings.map((offer, i)=> (
                        <div className={`absolute w-[30%] h-[80%] border border-slate-600 rounded-md overflow-hidden text-xs p-3`} style={{left : `${i * 33.4}%`, transform : `translateX(-${savingTranslate* 100}%)`, transition : 'transform 0.3s ease-in-out'}}>{offer}</div>
                      ))}
                    </div>
                    <a onClick={()=> setSavingTranslate(prev => prev - 1)} className='absolute text-white text-2xl cursor-pointer top-[50%] left-[-2.5%] '>&#10094;</a>
                    <a onClick={()=> setSavingTranslate(prev => prev + 1)} className='absolute text-white text-2xl cursor-pointer top-[50%] right-[-2.5%] '>&#10095;</a>
                  </div>
                  <div className=''>
                  <h2 className='text-md mb-3 font-bold'>Key Features</h2>
                  <ul className='list-disc text-sm inline-block ml-7'>
                  {keyFeatures.map(ele => (
                    <li>{ele}</li>
                  ))}
                  </ul>
                </div>
                <div className={`bg-[#191919] fixed right-0 left-0 bottom-0 ${cartDisplay}`}>
                  <div className='w-[82%] ml-10 h-16 flex justify-between items-center'>
                    <div className='w-[32%] text-sm font-bold flex justify-around items-center'>
                      <img src={`/Images/onePlus/${mobileColor}/img1.webp`} className='w-14'/>
                      <div>
                        <h3>{title}</h3>
                        <div>&#8377;{price}</div>
                      </div>
                    </div>
                    <div className='w-[30%] h-10 flex justify-between font-bold text-sm'>
                        <button className='rounded-lg bg-[#12DAA8] text-slate-950 w-[48%] h-[100%]'>Buy Now</button>
                        <button className='rounded-lg border w-[48%] bg-[#353535]' onClick={() => handleClick(ele)} disabled={disabledBtn.includes(id) ? true : false}>{disabledBtn.includes(id) ? "Added to Cart" : 'Add to Cart'}</button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
          </div>
        </div>

    </div>
  )
}

export default OnePlusDetails
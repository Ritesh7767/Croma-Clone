import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartPage.css'
import { IoMdStar } from "react-icons/io";

const CartPage = () => {

  // localStorage.removeItem("id")
  let localData = JSON.parse(localStorage.getItem("id")) || []
  let [cartData, setCartData] = useState([])
  console.log(localData)

  let productData = useSelector(state => state.onePlusReducer)

  useEffect(() => {

    localData.forEach(id => {
      productData.forEach(product => {
        product.id == id && setCartData(prev => [...prev, product])
      })
    })
    console.log(productData)

  }, [])

  const handleClick = product => {
    console.log('this is handleClick')
    let filteredData = localData.filter(id => id != product.id)
    console.log(filteredData)
    localStorage.setItem('id' , JSON.stringify(filteredData))
    setCartData(prev => prev.filter(ele => ele.id != product.id))
  }

  let totalPrice = 0

  return (
    <div className='bg-[#F9F9F9] border mt-[12vh]'>
      <div className='w-[90%] mb-[40vh] m-auto mt-5'>
        <h1 className='mt-[7vh] text-black font-bold text-2xl'>Your Cart</h1>
        <div className='flex text-black gap-4 mt-3'>
            <div className='w-[70%] text-black'>
              <div className='w-full h-[10vh] bg-white'>
                <div className='w-[92%] h-full flex justify-between items-center m-auto text-black'>
                    <div className='flex justify-center items-center'>
                      <div className='rounded-full border-2 w-8 h-8 flex justify-center items-center border-black mr-2'>%</div>
                      <span className='text-xl font-bold'>Apply Coupon</span>
                    </div>
                    <div>&#10095;</div>
                </div>
              </div>
                <div className='mt-8 flex flex-col gap-10'>
                  {
                    cartData?.map(ele => {
                      console.log(ele)
                      let {color, price, title, emi} = ele
                      totalPrice += price
                      price = price.toLocaleString('en-IN', {
                        minimumFractionDigits : 2,
                        maximumFractionDigits : 2
                      })
                      emi = emi.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits : 2
                      })
                      return (
                        <>
                        <div className='flex h-[38vh] pt-5 bg-white justify-between'>
                          <div className='w-[20%] mr-8'>
                            <img src={`/Images/onePlus/${color}/img1.webp`} className=''/>
                          </div>
                          <div className='w-[50%] -ml-16 flex flex-col gap-2'>
                            <h1 className='font-bold'>{title}</h1>
                            <p className='flex text-slate-600'><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/></p>
                            <div className='flex gap-3 text-sm'>
                              <div className='border-r border-black p-1'>
                                Express Delivery By today | 99
                              </div>
                              <div>
                                Standary Delivery By 29 April 2024 | Free 
                              </div>
                            </div>
                            <div className='flex gap-3 text-xs'>
                              <button className='w-2/5 border border-black rounded-md h-8 font-bold hover:border-[#12DAA8]'>Move to Wishlist</button>
                              <button className='w-2/6 border border-black rounded-md h-8 font-bold hover:border-[#12DAA8]' onClick={() => handleClick(ele)}>Remove</button>
                            </div>
                          </div>
                          <div className='mr-3'>
                            <div className='border-b border-black'>
                              <h2 className='font-bold text-xl'>&#8377;{price}</h2>
                              <p className='text-xs text-end'>(Incl. all Taxes)</p>
                            </div>
                            <div>
                              <h2 className='font-bold text-xl'>&#8377;{emi}/mo*</h2>
                              <p className='text-xs text-end'>
                                <a className='text-[#267862] underline text'>EMI options</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                      )
                    })
                  }
                </div>
            </div>
            <div className='bg-white w-[30%] h-[25vh] text-black'>
              <div className='w-[95%] m-auto'>
              <h1 className='font-bold text-lg mb-2'>{`Order Summary (${cartData.length} items)`}</h1>
              <p className='flex justify-between text-sm mb-2'><span>Original Price</span><span>&#8377;{totalPrice.toLocaleString('en-IN', {minimumFractionDigits : 2, maximumFractionDigits : 2})}</span></p>
              <p className='flex justify-between text-sm mb-3'><span>Total Price</span><span>&#8377;{totalPrice.toLocaleString('en-IN', {minimumFractionDigits : 2, maximumFractionDigits : 2})}</span></p>
              <button className='w-full bg-[#12DAA8] h-10 rounded-md font-bold text-sm hover:bg-[#479e88]'>Checkout</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
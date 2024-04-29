import React, { useState } from 'react'
import './Offers.css'

export const TopOffers = () => {
    
    return (
        <div className='flex justify-around items-center cromaContainer m-auto'>
            <img src="/Images/homeImages/offers/img1.webp" className='w-[48%] rounded-lg box-border'/>
            <img src="/Images/homeImages/offers/img2.webp" className='w-[48%] rounded-lg box-border'/>
        </div>
  )
}

export const BankOffers = () => {

    let [moveSlide, setMoveSlide] = useState(0)
    return (
        <>
        <div className='relative w-[98%] m-auto'>
            <div className='headingContainer'>
                <h2 className='offerHeading'>Exciting Bank Offers For You</h2>
                <div className='cromaContainer bankOfferSlider box-border overflow-hidden'>
                    <img src="/Images/homeImages/offers/bankOffers/img1.webp" style={{transform : `translateX(-${moveSlide * 103}%)`,transition : '0.6s linear' ,left: `1%`}} className='rounded-lg'/>
                    <img src="/Images/homeImages/offers/bankOffers/img2.webp" style={{transform : `translateX(-${moveSlide * 103}%)`,transition : '0.6s linear' ,left: `51%`}} className='rounded-lg'/>
                    <img src="/Images/homeImages/offers/bankOffers/img3.webp" style={{transform : `translateX(-${moveSlide * 103}%)`,transition : '0.6s linear' ,left: `101%`}} className='rounded-lg'/>
                </div>
            </div>
            <button className='absolute font-bold text-xl top-2/3 left-0' onClick={() => setMoveSlide(prev => prev - 1)}>&#10094;</button>
            <button className='absolute font-bold text-xl top-2/3 right-0' onClick={() => setMoveSlide(prev => prev + 1)}>&#10095;</button>
        </div>
        </>
    )
}

export const BrandPartner = () => {
    return (
        <div className="headingContainer">
            <h2 className='offerHeading'>New Favourites from our Brand Partners</h2>
            <img src="/Images/homeImages/brandPartners/img1.webp" className='rounded-lg w-full'/>
            <img src="/Images/homeImages/brandPartners/img2.webp" className='rounded-lg w-full mt-5'/>
        </div>
    )
}

export const DayDeals = () => {
    return (
        <div className='headingContainer'>
            <h2 className='offerHeading'>Deals Of The Day</h2>
            <div className='flex justify-between'>
                <img src="/Images/homeImages/dayDeals/img1.webp" className='w-[24%] rounded-lg'/>
                <img src="/Images/homeImages/dayDeals/img2.webp" className='w-[24%] rounded-lg'/>
                <img src="/Images/homeImages/dayDeals/img3.webp" className='w-[24%] rounded-lg'/>
                <img src="/Images/homeImages/dayDeals/img4.webp" className='w-[24%] rounded-lg'/>
            </div>
        </div>
    )
}

export const TataNeo = () => {
    return (
        <div className="headingContainer">
            <h2 className='offerHeading'>Experience Croma On Tata Neu!</h2>
            <img src="/Images/homeImages/tataNeo/img1.webp" className='rounded-lg w-full'/>
        </div>
    )
}

export const Curated = () => {
    return (
        <div className='headingContainer'>
            <h2 className='offerHeading'>Exclusively Curated For You</h2>
            <div className='flex justify-start items-center'>
                <img src="/Images/homeImages/curated/img1.webp" className='w-[11vw] h-[15vh]'/>
                <img src="/Images/homeImages/curated/img2.webp" className='w-[11vw] h-[15vh]'/>
                <img src="/Images/homeImages/curated/img3.webp" className='w-[11vw] h-[15vh]'/>
                <img src="/Images/homeImages/curated/img4.webp" className='w-[11vw] h-[15vh]'/>
                <img src="/Images/homeImages/curated/img5.webp" className='w-[11vw] h-[15vh]'/>
                <img src="/Images/homeImages/curated/img6.webp" className='w-[11vw] h-[15vh]'/>
                <img src="/Images/homeImages/curated/img7.webp" className='w-[11vw] h-[15vh]'/>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <img src="/Images/homeImages/curated/img8.webp" className='w-[49%] rounded-lg'/>
                <img src="/Images/homeImages/curated/img9.webp" className='w-[49%] rounded-lg'/>
            </div>
        </div>
    )
}

export const NewArrivals = () => {
    return (
        <div className='headingContainer'>
            <h2 className='offerHeading'>New Arrivals</h2>
            <div className='flex justify-between items-center'>
                <img src="/Images/homeImages/newArrivals/img1.webp" className='w-[24%] rounded-lg' />
                <img src="/Images/homeImages/newArrivals/img2.webp" className='w-[24%] rounded-lg' />
                <img src="/Images/homeImages/newArrivals/img3.webp" className='w-[24%] rounded-lg' />
                <img src="/Images/homeImages/newArrivals/img4.webp" className='w-[24%] rounded-lg' />
            </div>
        </div>
    )
}

export const PassionateBrands = () => {
    return (
        <div className="headingContainer">
            <h2 className='offerHeading'>Brands We Are Passionate About</h2>
            <div className='flex justify-between items-center'>
                <img src="/Images/homeImages/passionate/img1.webp" className='rounded-lg w-[10vw]' />
                <img src="/Images/homeImages/passionate/img2.webp" className='rounded-lg w-[10vw]' />
                <img src="/Images/homeImages/passionate/img3.webp" className='rounded-lg w-[10vw]' />
                <img src="/Images/homeImages/passionate/img4.webp" className='rounded-lg w-[10vw]' />
                <img src="/Images/homeImages/passionate/img5.webp" className='rounded-lg w-[10vw]' />
                <img src="/Images/homeImages/passionate/img6.webp" className='rounded-lg w-[10vw]' />
                <img src="/Images/homeImages/passionate/img7.webp" className='rounded-lg w-[10vw]' />
                <img src="/Images/homeImages/passionate/img8.webp" className='rounded-lg w-[10vw]' />
            </div>
        </div>
    )
}

export const WhyCroma = () => {
    return (
        <div className="headingContainer">
            <h2 className="offerHeading">Why Croma?</h2>
            <img src="/Images/homeImages/whyCroma/img1.webp" className='w-full rounded-lg h-[33vh]' />
        </div>
    )
}


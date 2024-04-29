import React, { useContext } from 'react'
import TopSlider from './components/topSlider'
import Categories from './components/Categories'
import { BankOffers, BrandPartner, Curated, DayDeals, NewArrivals, PassionateBrands, TataNeo, TopOffers, WhyCroma } from './components/Offers'
import { Opacity } from '../../OpacityContext'

const Home = () => {

  let {opacity} = useContext(Opacity)

  return (
    <>
    <div className={opacity ? 'opacity-25' : ''}>

        <TopSlider/>
        <Categories/>
        <br /><br />
        <TopOffers/>
        <BankOffers/>
        <BrandPartner/>
        <DayDeals/>
        <TataNeo/>
        <Curated/>
        <NewArrivals/>
        <PassionateBrands/>
        <WhyCroma/>
    </div>
    </>
  )
}

export default Home
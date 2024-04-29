import React from 'react'
import KnowYourMobile from './Components/KnowYourMobile'
import LatestPhones from './Components/LatestPhones'
import ChooseYourType from './Components/ChooseYourType'
import YourSmartPhone from './Components/YourSmartPhone'
import './Mobile.css'
import AppleAtCroma from './Components/AppleAtCroma'
import MobileBrands from './Components/MobileBrands'
import Budget from './Components/Budget'
import YourMobilePhones from './Components/YourMobilePhones'
import FlagShipPhones from './Components/FlagShipPhones'
import CromaAdvantage from './Components/CromaAdvantage'
import Overview from './Components/Overview'
import Header from './Components/Header'

const Mobile = () => {
    console.log("this is mobile phones")
  return (
    <div className="mobile-container m-auto mt-[12vh]">
        <Header/>
        <KnowYourMobile/>
        <LatestPhones/>
        <ChooseYourType/>
        <YourSmartPhone/>
        <AppleAtCroma/>
        <MobileBrands/>
        <Budget/>
        <YourMobilePhones/>
        <FlagShipPhones/>
        <CromaAdvantage/>
        <Overview/>
    </div>
  )
}

export default Mobile
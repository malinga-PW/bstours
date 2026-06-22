import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourGuideInner from '../Components/Guide/TourGuideInner'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function TourGuide() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Tour Guide"
      />
      <TourGuideInner />
      <FooterOne />
      <ScrollToTop />
    </>
  )
}

export default TourGuide

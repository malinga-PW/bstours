import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ServiceInner from '../Components/Services/ServiceInner'
import TourTwo from '../Components/Tour/TourTwo'
import PricingPlan from '../Components/Services/PricingPlan'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function Service() {
    return (
        <div>
            <HeaderOne />
            <Breadcrumb
                title="Services"
            />
            <ServiceInner />
            <TourTwo />
            <PricingPlan className="space-bottom"/>
            <FooterOne />
            <ScrollToTop />
        </div>
    )
}

export default Service

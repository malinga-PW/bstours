import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import DestinationDetailsMain from '../Components/Destination/DestinationDetailsMain'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function DestinationDetails() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Destination Details"
            />
            <DestinationDetailsMain />
            <FooterOne />
            <ScrollToTop />
        </>
    )
}

export default DestinationDetails

import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutFour from '../Components/About/AboutFour'
import OfferTwo from '../Components/Offer/OfferTwo'
import ElementSection from '../Components/Elements/ElementSection'
import TourGuideTwo from '../Components/Guide/TourGuideTwo'
import TestimonialOne from '../Components/Testimonials/TestimonialOne'
import BrandOne from '../Components/Brand/BrandOne'
import GalleryFive from '../Components/Gallery/GalleryFive'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About BSTours.lk"
            />
            <AboutFour />
            <OfferTwo />
            <ElementSection />
            <TourGuideTwo />
            <TestimonialOne />
            <BrandOne/>
            <GalleryFive />
            <FooterOne />
            <ScrollToTop />
        </>
    )
}

export default About

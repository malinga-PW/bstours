import React from 'react'
import { Link } from 'react-router-dom'

function FooterOne() {
    return (
        <footer className="footer-wrapper footer-layout1">
import React from 'react'
import { Link } from 'react-router-dom'

function FooterOne() {
    return (
        <footer className="footer-wrapper footer-layout1">
            <div className="widget-area">
                <div className="container">
                    <div className="newsletter-area">
                        <div className="newsletter-top">
                            <div className="row gy-4 align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="newsletter-title text-capitalize mb-0">
                                        නවතම පුවත් ලබාගන්න
                                    </h2>
                                </div>
                                <div className="col-lg-7">
                                    <form className="newsletter-form">
                                        <input
                                            className="form-control "
                                            type="email"
                                            placeholder="ඊමේල් ලිපිනය"
                                            required=""
                                        />
                                        <button type="submit" className="th-btn style3">
                                            දැන්ම එකතු වෙන්න <img src="/assets/img/icon/plane.svg" alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                    <Link to="/">
                                        <img src="/assets/img/bstours-logo.png" alt="BSTours.lk" style={{height:"50px"}} />
                                    </Link>

        </footer>

    )
}

export default FooterOne

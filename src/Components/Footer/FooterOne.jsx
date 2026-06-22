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
                                    </div>
                                    <p className="about-text">
                                        BSTours.lk යනු ඉන්දියාව (දඹදිව), තායිලන්තය, බැංකොක් සහ ශ්‍රී ලංකාවේ බෞද්ධ වන්දනා චාරිකා සඳහා විශේෂිත වූ ආයතනයකි. වසර 20 කට වැඩි විශ්වාසනීය සේවාවකි.
                                    </p>
                                    <div className="th-social">
                                        <Link to="https://facebook.com/bstourslk">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="https://wa.me/94712333322">
                                            <i className="fab fa-whatsapp" />
                                        </Link>
                                        <Link to="https://instagram.com/bstourslk">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link to="https://youtube.com/@bstourslk">
                                            <i className="fab fa-youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">ඉක්මන් සබැඳි</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <Link to="/">මුල් පිටුව</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">අප ගැන</Link>
                                        </li>
                                        <li>
                                            <Link to="/tour">සංචාරක පැකේජ</Link>
                                        </li>
                                        <li>
                                            <Link to="/destination">ගමනාන්ත</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">අප හා සම්බන්ධ වන්න</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">ලිපිනය</h3>
                                <div className="th-widget-contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <Link to="tel:+94712333322" className="info-box_link">
                                                    +94 71 2 33 33 22
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/envelope.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <Link
                                                    to="mailto:info@bstours.lk"
                                                    className="info-box_link"
                                                >
                                                    info@bstours.lk
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/location-dot.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>No 16/A Madiwela Rd, Nugegoda, Sri Lanka</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Instagram</h3>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_1.jpg"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_2.jpg"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_3.jpg"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_4.jpg"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_5.jpg"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_6.jpg"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="copyright-wrap background-image"
                style={{ backgroundImage: "url('/assets/img/bg/copyright_bg_1.jpg')" }}
            >
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <p className="copyright-text">
                                Copyright 2025 <Link to="/">BSTours.lk</Link>. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-end d-none d-md-block">
                            <div className="footer-card">
                                <span className="title">We Accept</span>
                                <img src="/assets/img/shape/cards.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default FooterOne

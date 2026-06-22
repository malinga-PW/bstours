import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Gallery/Modal';

function FooterFour() {
    const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalImage, setModalImage] = useState('');
    
        // Function to open the modal with the selected image
        const openModal = (imageSrc, event) => {
            event.preventDefault(); // Prevent default link behavior
            setModalImage(imageSrc);
            setIsModalOpen(true);
        };
    
        // Function to close the modal
        const closeModal = () => {
            setIsModalOpen(false);
        };
    return (
        <footer className="footer-wrapper bg-title footer-layout2 shape-mockup-wrap">
            <div className="widget-area">
                <div className="container">
                    <div className="newsletter-area">
                        <div className="newsletter-top">
                            <div className="row gy-4 align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="newsletter-title text-white text-capitalize mb-0">
                                        get updated the latest newsletter
                                    </h2>
                                </div>
                                <div className="col-lg-7">
                                    <form className="newsletter-form style2">
                                        <input
                                            className="form-control "
                                            type="email"
                                            placeholder="Enter Email"
                                            required=""
                                        />
                                        <button type="submit" className="th-btn style1">
                                            Subscribe Now <img src="/assets/img/icon/plane2.svg" alt="" />
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
                                        BSTours.lk specializes in Buddhist pilgrimage tours to India (Dambadiwa), 
                                        Thailand, Bangkok, and Sri Lanka tours. Over 20+ years of trusted service.
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
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/tour">Tour Packages</Link>
                                        </li>
                                        <li>
                                            <Link to="/destination">Destinations</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Get In Touch</h3>
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
                                            <p>789 Inner Lane, Holy park, California, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Instagram Post</h3>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_1.jpg"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_1.jpg', e)}
                                        />
                                        <Link
                                            to="///assets/img/widget/gallery_1_1.jpg"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_1.jpg', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_2.jpg"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_2.jpg', e)}
                                        />
                                        <Link
                                            to="///assets/img/widget/gallery_1_2.jpg"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_2.jpg', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_3.jpg"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_3.jpg', e)}
                                        />
                                        <Link
                                            to="///assets/img/widget/gallery_1_3.jpg"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_3.jpg', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_4.jpg"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_4.jpg', e)}
                                        />
                                        <Link
                                            to="///assets/img/widget/gallery_1_4.jpg"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_4.jpg', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_5.jpg"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_5.jpg', e)}
                                        />
                                        <Link
                                            to="///assets/img/widget/gallery_1_5.jpg"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_5.jpg', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_6.jpg"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_6.jpg', e)}
                                        />
                                        <Link
                                            to="///assets/img/widget/gallery_1_6.jpg"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/widget/gallery_1_6.jpg', e)}
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
            <div className="copyright-wrap">
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
            <div
                className="shape-mockup movingX d-none d-xxl-block"
                style={{ top: '24%', left: '5%' }}
            >
                <img src="/assets/img/shape/shape_8.png" alt="shape" />
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </footer>

    )
}

export default FooterFour

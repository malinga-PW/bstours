import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NiceSelect from './NiceSelect';
import MobileMenu from './MobileMenu';
import LoginForm from './LoginForm';
import LanguageSwitcher from './LanguageSwitcher';

function HeaderOne() {
    const languageOptions = [
        { value: "language", label: "Language" },
        { value: "EN", label: "English" },
        { value: "SI", label: "සිංහල" },
    ];
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/*============================== Header Area ==============================*/}
            <header className="th-header header-layout1">
                <div className="header-top">
                    <div className="container th-container">
                        <div className="row justify-content-center justify-content-xl-between align-items-center">
                            <div className="col-auto d-none d-md-block">
                                <div className="header-links">
                                    <ul>
                                        <li className="d-none d-xl-inline-block">
                                            <i className="fa-sharp fa-regular  fa-location-dot" />
                                            <span>No 16/A Madiwela Rd, Nugegoda, Sri Lanka</span>
                                        </li>
                                        <li className="d-none d-xl-inline-block">
                                            <i className="fa-regular fa-clock" />
                                            <span>Weekdays: 8.00 am - 8.00 pm</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-right">
                                    <div className="currency-menu">
                                        <div id="google_translate_element" style={{ display: 'none' }}></div>
                                        <LanguageSwitcher />
                                    </div>

                                    <div className="header-links">
                                        <ul>
                                            <li className="d-none d-md-inline-block">
                                                <Link to="/faq">නිතර අසන ප්‍රශ්න</Link>
                                            </li>
                                            <li className="d-none d-md-inline-block">
                                                <Link to="/contact">සහාය</Link>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsLoginFormOpen(true)}
                                                >
                                                    ගිණුමට පිවිසෙන්න / ලියාපදිංචි වන්න
                                                    <i className="fa-regular fa-user" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    {/* Main Menu Area */}
                    <div className="menu-area">
                        <div className="container th-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link to="/">
                                            <img src="/assets/img/bstours-logo.png" alt="BSTours.lk" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto me-xl-auto">
                                    <nav className="main-menu d-none d-xl-inline-block">
                                        <ul>
                                            <li>
                                                <Link to="/">මුල් පිටුව</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">අප ගැන</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">චාරිකා සහ සේවා</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/tour">චාරිකා පැකේජ</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/destination">ගමනාන්ත</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service">සේවාවන්</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/activities">ක්‍රියාකාරකම්</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/gallery">ඡායාරූප</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">ලිපි</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">අප හා සම්බන්ධ වන්න</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-xl-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                    >
                                        <i className="far fa-bars" />
                                    </button>
                                </div>
                                <div className="col-auto d-none d-xl-block">
                                    <div className="header-button">
                                        <Link to="/contact" className="th-btn style3 th-icon">
                                            වෙන්කරවා ගන්න
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="logo-bg bg-mask"
                            style={{
                                WebkitMaskImage: "url(/assets/img/logo_bg_mask.png)",
                                maskImage: "url(/assets/img/logo_bg_mask.png)"
                            }} />
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <LoginForm isOpen={isLoginFormOpen} onClose={() => setIsLoginFormOpen(false)} />
        </>

    )
}

export default HeaderOne

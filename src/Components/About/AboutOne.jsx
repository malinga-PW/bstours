import React from 'react'
import { Link } from 'react-router-dom'

function AboutOne() {
    return (
        <div
            className="about-area position-relative overflow-hidden space"
            id="about-sec"
        >
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xl-6">
                            <div className="img1">
                                <img src="/assets/img/normal/about_1_1.jpg" alt="About" style={{ borderRadius: '20px', width: '100%', objectFit: 'cover' }} />
                            </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="ps-xl-4 ms-xl-2">
                            <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                <span className="sub-title style1 ">BSTours.lk වෙත සාදරයෙන් පිළිගනිමු</span>
                                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                    වන්දනා සහ සංචාර සඳහා ඔබේ විශ්වාසවන්ත සහකරු
                                </h2>
                                <p className="sec-text mb-30" style={{ lineHeight: '1.8' }}>
                                    BS Tours යනු "බුදුසුවඳ දඹදිව වන්දනා" (Budusuwanda Dambadiwa Wandanaa) යන තේමාව යටතේ ක්‍රියාත්මක වන, ලංකාවේ ඇති දඹදිව වන්දනා සංචාරක ආයතන (Dambadiwa Tour Travel Agencies) අතරින් විශිෂ්ටතම සහ හොඳම ආයතනයයි. ශ්‍රී ලංකාවේ ප්‍රමුඛතම රූපවාහිනී නාලිකාවක් වන දෙරණ (Derana) නාලිකාව මඟින් විකාශය වන "දෙරණ දඹදිව වරම්" වැඩසටහනේ දඹදිව වන්දනා චාරිකා සඳහා නිල වශයෙන් තෝරාගෙන ඇත්තේ ද BS Tours ආයතනයයි. ඔවුන් මේ වන විට සාර්ථක දඹදිව වන්දනා ගමන් වාර 200කට වඩා වැඩි ප්‍රමාණයක් සංවිධානය කර ඇත. ඉතාමත් සුවපහසුවෙන්, ආරක්ෂිතව මෙන්ම සෞඛ්‍යාරක්ෂිතව දඹදිව පුණ්‍ය භූමිය වැඳපුදා ගැනීමට ශ්‍රී ලංකාවේ ඇති හොඳම සහ විශ්වාසවන්තම ආයතනය වන්නේ BS Tours ආයතනයයි.
                                </p>
                            </div>
                            <div className="about-item-wrap">
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/map3.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">දඹදිව වන්දනා චාරිකා</h5>
                                        <p className="about-item_text">
                                            දඹදිව පුදබිම් ආවරණය වන පරිදි සැපපහසු ප්‍රවාහන හා නවාතැන් පහසුකම් සහිත විශේෂිත වන්දනා චාරිකා.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/guide.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">පළපුරුදු මඟපෙන්වන්නන්</h5>
                                        <p className="about-item_text">
                                            සෑම ස්ථානයකදීම මනා අවබෝධයකින් යුතුව මඟපෙන්වීමට පළපුරුදු සිංහල කතා කරන මඟපෙන්වන්නන්.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-35">
                                <Link to="/about" className="th-btn style3 th-icon">
                                    තවත් විස්තර
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xl-block"
                    style={{
                        top: "12%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{
                        top: "20%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xl-block"
                    style={{
                        top: "14%",
                        left: "-10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-shape movingX d-none d-xxl-block"
                    style={{
                        bottom: "0%",
                        right: "-11%",
                    }}
                >
                    <img src="/assets/img/normal/about-slide-img.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-rating d-none d-xxl-block"
                    style={{
                        bottom: "50%",
                        right: "-20%",
                    }}
                >
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>4.9k</span>
                </div>
                <div
                    className="shape-mockup about-emoji d-none d-xxl-block"
                    style={{
                        bottom: "25%",
                        right: "5%",
                    }}
                >
                    <img src="/assets/img/icon/emoji.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default AboutOne

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "කමල් පෙරේරා",
    designation: "වන්දනා චාරිකා",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "අපගේ දඹදිව වන්දනා චාරිකාව සඳහා විශිෂ්ට සේවාවක් ලැබුණි. නවාතැන් වල සිට ප්‍රවාහනය දක්වා සියල්ල මනාව සංවිධානය කර තිබුණි. බෞද්ධ වන්දනා චාරිකා සඳහා බෙහෙවින් නිර්දේශ කරමි.",
  },
  {
    name: "සමන්තා ප්‍රනාන්දු",
    designation: "තායිලන්ත චාරිකා",
    image: "/assets/img/testimonial/testi_1_2.jpg",
    text: "අපගේ තායිලන්ත සංචාරය ඉතාමත් අපූරුයි! BSTours.lk සෑම දෙයක්ම හොඳින් සැලසුම් කළා. මඟපෙන්වන්නා ඉතා දැනුම්වත් වූ අතර සිංහල භාෂාවෙන් කතා කිරීම අපගේ ගමන වඩාත් පහසු කළා.",
  },
  {
    name: "නිමල් ද සිල්වා",
    designation: "ඉන්දියානු චාරිකා",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "මම බුදු සුවඳ දඹදිව වන්දනා චාරිකාවට එක් වුණා. එය මගේ ජීවිතයේ අමතක නොවන අත්දැකීමක්. සියලුම පූජනීය ස්ථාන ආවරණය කළ අතර සංවිධාන කටයුතු විශිෂ්ටයි.",
  },
  {
    name: "දිලානි ජයවර්ධන",
    designation: "පවුලේ චාරිකා",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "අපි අපේ ශ්‍රී ලංකා සංචාරය BSTours සමඟ වෙන්කරවා ගත් අතර එය අපූරුයි. වෘත්තීය කණ්ඩායම, සුවපහසු වාහන සහ මුදලට සරිලන විශිෂ්ට සේවාවක්.",
  },
  {
    name: "තුසිත කුමාර",
    designation: "බැංකොක් චාරිකා",
    image: "/assets/img/testimonial/testi_1_2.jpg",
    text: "බැංකොක් චාරිකාව ඉතා මනාව සැලසුම් කර තිබුණි. ප්‍රධාන විහාරස්ථාන සහ සාප්පු සංකීර්ණ සියල්ල නැරඹීමට හැකි විය. හෝටලය සහ මඟපෙන්වන්නාගේ සහය ඉතා විශිෂ්ටයි.",
  },
  {
    name: "ප්‍රියා වික්‍රමසිංහ",
    designation: "වන්දනා චාරිකා",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "ඉන්දියානු වන්දනා චාරිකා සඳහා හොඳම සංචාරක ආයතනයයි. වීසා බලපත්‍රයේ සිට හෝටලය දක්වා සියල්ල වෘත්තීය මට්ටමින් සිදු කළා. නැවතත් ඔවුන් සමඟ සංචාරය කිරීමට බලාපොරොත්තු වෙමි.",
  },
];

function TestimonialOne() {
  return (
    <section className="testi-area overflow-hidden space shape-mockup-wrap" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">පාරිභෝගික අදහස්</span>
          <h2 className="sec-title">අප ගැන ඔවුන් පවසන දේ</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            slidesPerGroup={1}
            speed={1200}
            breakpoints={{
              0: { slidesPerView: 1},
              767: { slidesPerView: 2},
              992: { slidesPerView: 2},
              1200: { slidesPerView: 2},
              1400: { slidesPerView: 3},
            }}
            className="testiSlider1 has-shadow"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={item.image} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{item.name}</h3>
                        <span className="testi-card_desig">{item.designation}</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star" />
                      ))}
                    </div>
                  </div>
                  <p className="testi-card_text">{item.text}</p>
                  <div className="testi-card-quote">
                    <img src="/assets/img/icon/testi-quote.svg" alt="img" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-pagination" />
        </div>
      </div>
      <div className="shape-mockup d-none d-xl-block" style={{bottom:"-2%", right:"0%"}}>
        <img src="/assets/img/shape/line2.png" alt="shape" />
      </div>
      <div className="shape-mockup movingX d-none d-xl-block" style={{top:"30%", left:"5%"}}>
        <img src="/assets/img/shape/shape_7.png" alt="shape" />
      </div>
    </section>
  );
}

export default TestimonialOne;

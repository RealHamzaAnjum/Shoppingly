import React from 'react';
import './Hero.css';
import arrow_icon from '../../Assets/arrow.png';
import hero_image from '../../Assets/hero_image.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Autoplay, Scrollbar } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <div className="banner_main">
      <Swiper
        scrollbar={{ hide: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-fluid banner_1 py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div className="pt-md-4">
                    <h6 className="pb-3">
                      <NavLink to="#">
                        <span className="icon">
                          <LiaStarSolid />
                        </span>
                      </NavLink>
                      NEW ARRIVALS ONLY
                    </h6>
                    <h1>Microphone Mhp Headphone white</h1>
                    <p className="py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores incidunt necessitatibus ea nam doloribus
                      eius, molestias quasi repellat iusto repellendus
                      consequuntur commodi. Obcaecati, dicta velit.
                    </p>
                    <div className="banner_btns">
                      <button className='btn btn-primary'> Latest Collection <img src={arrow_icon} alt='' /> </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-center text-md-right" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div className="banner_col2">
                    <img src={hero_image} className="img-fluid" alt="Hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-fluid banner_2 py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div className="banner_col1 pt-md-4">
                    <h6 className="pb-3">
                      <NavLink to="#">
                        <span className="icon">
                          <LiaStarSolid />
                        </span>
                      </NavLink>
                      NEW ARRIVALS ONLY
                    </h6>
                    <h1>Microphone Mhp Headphone white</h1>
                    <p className="py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores incidunt necessitatibus ea nam doloribus
                      eius, molestias quasi repellat iusto repellendus
                      consequuntur commodi. Obcaecati, dicta velit.
                    </p>
                    <div className="banner_btns">
                      <button className='btn btn-primary'> Latest Collection <img src={arrow_icon} alt='' /> </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center text-md-right" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <div className="banner_col2">
                    <img src={hero_image} className="img-fluid" alt="Hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;

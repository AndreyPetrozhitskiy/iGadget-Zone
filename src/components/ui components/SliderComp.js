import React from "react"
import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';



import iphone15 from '../../image/iphone15pro.png'
import '../../style/slider.scss'


const SliderComp = () => {
  return (
    <div >
         
              
            <Swiper 
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            
            modules={[Autoplay,Pagination]}  
            loop={true}
            >
        <SwiperSlide> 
          <div className="slider__slide-img__1" >
          
                  <div className="slider__slide-p">
                  <div className="slider__slide-p-fade"></div>
                    <p className="">iPhone 15 Pro</p>
                  </div>
                
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="slider__slide-img__2">
                  <div className="slider__slide-p">
                  <div className="slider__slide-p-fade"></div>
                  <p className="">iPhone 14 Pro</p>
                  </div>
                
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="slider__slide-img__3">
                  <div className="slider__slide-p">
                  <div className="slider__slide-p-fade"></div>
                    <p className="">iPhone 13 Pro</p>
                  </div>
                
               
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="slider__slide-img__4">
                  <div className="slider__slide-p">
                    <div className="slider__slide-p-fade"></div>
                    <p className="">Apple MacBook Pro</p>
                  </div>
                
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default SliderComp;

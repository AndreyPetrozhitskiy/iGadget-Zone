import React from "react"


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../style/slider-product.scss'
import { Navigation } from 'swiper/modules';

import Photo from '../../image/large_30059040bb 1.png'
import Static from "../../image/heart.png";
import Heart from "../../image/serdce.svg";

const SliderProduct = (props) => {
  
  const array_product = props.array_product

  console.log(array_product)
  return (
    <div className="slider__product">
      
      <Swiper
           modules={[Navigation]} 
           navigation={{
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           }} 
           initialSlide={0}
           spaceBetween={35}
           slidesPerView={6}
           mousewheel={true}
        className=" slider__product--swiper"
      >
          {array_product.map((item, itemIndex) => (
            <SwiperSlide key={itemIndex} className="slider__product--swiper__item" >
            <img src={item.Photo} />
                <p>{item.Model} </p>
                <p>{item.Price}   {"₽"} </p>
                <div className="slider__product--swiper__item-two">
                    <div className="slider__product--swiper__item-two-content">
                        <button >В корзину</button>
                        <div className="slider__product--swiper__item-two-content-btnka">
                          <img src={Heart} /> 
                        </div>
                        <div className="slider__product--swiper__item-two-content-btnka">
                          <img src={Static} /> 
                        </div>
                    </div>
                </div>
            </SwiperSlide>
         ))}
        {/* <SwiperSlide className="slider__product--swiper__item" >
        <img src={Photo} />
            <p>iPhone 13 Pro 128Gb </p>
            <p>67 499  {"₽"} </p>
            <div className="slider__product--swiper__item-two">
                <div className="slider__product--swiper__item-two-content">
                    <button >В корзину</button>
                    <div className="slider__product--swiper__item-two-content-btnka">
                      <img src={Heart} /> 
                    </div>
                    <div className="slider__product--swiper__item-two-content-btnka">
                      <img src={Static} /> 
                    </div>
                </div>
            </div>
        </SwiperSlide> */}
       
      
    
      </Swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  )
};

export default SliderProduct;

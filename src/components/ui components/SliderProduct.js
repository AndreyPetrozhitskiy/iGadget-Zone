import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../style/slider-product.scss'
import { Navigation } from 'swiper/modules';
import Static from "../../image/heart.png";
import Heart from "../../image/serdce.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {newItem} from "../../store/BasketSlice"
const SliderProduct = (props) => {
  const dispatch = useDispatch()
  const addToBasket = () => {
    
  }
  // Форматирование цеников
    function formatPrice(price) {
      if (typeof price === 'number') {
        price = price.toString();
      }
      
      if (price.length > 3) {
        price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      }
      
      return price;
    }
  // Product (Инфа для слайдов)
  const array_product = props.array_product
  const slider_index = props.slider_index
  const [basket, setBasket] = useState([]);
  function StateBasket(index) {
    setBasket(prevBasket => {
      const newBasket = [...prevBasket];
      newBasket[index] = newBasket[index] ? newBasket[index] + 1 : 1;
      return newBasket;
    });
  }
  return (
    <div className="slider__product">
      <div className={`swiper-button-prev-${slider_index}`} ></div>
      <Swiper
           modules={[Navigation]} 
           navigation={{
               nextEl: `.swiper-button-next-${slider_index}`,
               prevEl: `.swiper-button-prev-${slider_index}`,
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
                <p>{formatPrice(item.Price)}   {"₽"} </p>
                  <div className="slider__product--swiper__item--buttons">
                    {/* <button onClick={StateBasket}>{buttonText}</button> */}



                    <button onClick={()=>dispatch(newItem({Model:item.Model, Price:item.Price,Photo:item.Photo,Key:itemIndex}))}>
                      Купить
                    </button>

                    {/* <button onClick={() => StateBasket(itemIndex)}>
                      {basket[itemIndex] ? 'В корзине' : 'Купить'}
                    </button> */}




                        <div className="slider__product--swiper__item--buttons-btnka">
                          <img className="card_button--basket" src={Heart} /> 
                        </div>
                        <div className="slider__product--swiper__item--buttons-btnka">
                          <img  className="card_button--basket" src={Static} />
                        </div>
                  </div>
            </SwiperSlide>
         ))}
      </Swiper>
        <div className={`swiper-button-next-${slider_index}`}></div>
    </div>
  )
};
export default SliderProduct;

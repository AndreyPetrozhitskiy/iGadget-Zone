import React from "react"

import iphone15 from '../../image/iphone15pro.png'

import '../../style/slider.css'
const SliderComp = () => {
  return (
    <div className="slider">
        
       
            <div className="slider__slide">
              <img className="slider__slide-img" src={iphone15} />
              <p className="slider__slide-p">Iphone 15 pro</p>
            </div>
            <div className="slider__slide">
              <img className="slider__slide-img" src={iphone15} />
              <p className="slider__slide-p">Iphone 15 pro</p>
            </div>
            <div className="slider__slide">
              <img className="slider__slide-img" src={iphone15} />
              <p className="slider__slide-p">Iphone 15 pro</p>
            </div>
        
            
          
    </div>
  )
};

export default SliderComp;

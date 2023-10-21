import React from "react"
import '../../style/oneblock.scss'
import ipad from '../../image/ipad.png'
import macbook from '../../image/macbook.png'
import SliderComp from "../ui components/SliderComp";


const OneBlock = () => {
  return (
    <div className="oneblock">
        <div className="oneblock__container">
              <div className="oneblock__container--slider">
                <SliderComp />
              </div>
              <div className="oneblock__container--bricks">
                <div className="oneblock__container--brick-one">
                    <img src={ipad} className="oneblock__container--brick__img" />
                    <p className="oneblock__container--brick__p">Apple Ipad 2022</p>
                </div>
                <div className="oneblock__container--bricks-two">
                    <img src={macbook} className="oneblock__container--brick__img" />
                    <p className="oneblock__container--brick__p">Apple MacBook Pro 13.6</p>
                </div>
              </div>
              
      </div>


    </div>
    
  )
};

export default OneBlock;

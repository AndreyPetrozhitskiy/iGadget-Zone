import React, { useState } from "react"
import "../../style/Basket.scss"
import img from "../../image/oppo.webp"

const ItemBasket = () => {
   const [countItem,setСountItem] = useState(1)
   function countAdd(){
    setСountItem(
        countItem + 1
    )
   }
   function countSub(){
    if (countItem > 1) {
        setСountItem(countItem - 1);
     }

    //  Либо удаление 
   }
  return (
    <div className="basket__container--product-item">
              <img src={img} />

            <div className="basket__container--product-item__block">
              <div className="basket__container--product-item__info">
                  <h1>Умные супер пупер часы</h1>
                  <p>80 0000 ₽</p>
                  </div>

                <div className="basket__container--product-item__info-counter">
                    <div className="counter">
                        <p onClick={countSub}>-</p>
                        <h1>{countItem}</h1>
                        <p onClick={countAdd}>+</p>
                    </div>
                    <h1>80 0000 ₽</h1>
                </div>
              </div>

    </div>
  )
};

export default ItemBasket;

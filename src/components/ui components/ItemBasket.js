import React, { useState } from "react"
import "../../style/Basket.scss"
const ItemBasket = (props) => {
  
   function formatPrice(price) {
    if (typeof price === 'number') {
      price = price.toString();
    }
    if (price.length > 3) {
      price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return price;
  }
  return (
    <div className="basket__container--product-item">
            <img src={props.photo} />
            <div className="basket__container--product-item__block">
              <div className="basket__container--product-item__info">
                  <h1>{props.model}</h1>
                  <p> {formatPrice(props.price)}   {"₽"}</p>
                  </div>

                <div className="basket__container--product-item__info-counter">
                    <div className="counter">
                        <p onClick={console.log("-")}>-</p>
                        <h1>{props.count}</h1>
                        <p onClick={console.log("+")}>+</p>
                    </div>
                    <h1>{formatPrice(props.countprice)}   {"₽"} </h1>
                </div>
              </div>
    </div>
  )
};
export default ItemBasket;

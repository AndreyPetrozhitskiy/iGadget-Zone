import React from "react"
import "../../style/Basket.scss"
import ItemBasket from "../ui components/ItemBasket";

const Bascket = () => {
  return (
    <div className="Basket">
      <div className="basket__container">
        <h1>Корзина</h1>
      <div className="basket__container-content">
          <div className="basket__container--product">
            <ItemBasket />
          </div>
          <div className="basket__container--payment">
              <div className="basket__container--payment-promo">
                  <h1>Введите промокод</h1>
                  <input type="text" placeholder="Промокод"/>
                  <p>Активировать</p>
              </div>
              <div className="basket__container--payment-result">
                    <div className="basket__container--payment-result__price-p">
                      <span>Итого к оплате:</span>  
                      <span>130 997 ₽</span>  
                    </div>
                  <input className="basket__container--payment-result__button" type="button" value="Оформить заказ"  />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Bascket;
// Корзина

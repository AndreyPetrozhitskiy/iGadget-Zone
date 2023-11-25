import React from "react"
import "../../style/Basket.scss"
import ItemBasket from "../ui components/ItemBasket";
import { useSelector } from "react-redux";

const Bascket = () => {
  const BasketData = useSelector(state => state.basket.BasketMassive)
    // Суммируем все countPrice из массива BasketData
    
    const totalPayment = BasketData.reduce((acc, item) => acc + item.countPrice, 0);


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
    <div className="Basket">
      <div className="basket__container">
        <h1>Корзина</h1>
      <div className="basket__container-content">
          <div className="basket__container--product">
            {BasketData.map((item )=>(
              <ItemBasket 
              count={item.Count} 
              countprice={item.countPrice} 
              photo={item.Photo} 
              model={item.Model} 
              price={item.Price} 
              key={item.Key}/>  
            ))}
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
                      <span>{formatPrice(totalPayment)} ₽</span>  
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

import React from "react"
import "../../style/delivery.scss"

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="dilivery__container">
        <h1>Доставка</h1>
        <p>Наш интернет-магазин осуществляет отправку товаров по Владивостоку и регионам России:</p>

        <p>Стоимость:</p>
        <ol >
          <li>По Владивостоку — от 200 руб. </li>
          <li>Самовывоз из нашего розничного магазина – бесплатно!</li>
          <li>Почтовая доставка ТК СДЕК по России — от 300 руб. в зависимости от адреса доставки. </li>
        </ol>

        <p>Сроки:</p>
        <ol >
          <li>По Владивостоку – в тот же день или на следующий день.</li>
          <li>Самовывоз – в тот же день или на следующий день.</li>
          <li>Почтовая доставка ТК СДЕК по России – от 2 дней в зависимости от региона.</li>
        </ol>
      </div>
    </div>
  )
};

export default Delivery;
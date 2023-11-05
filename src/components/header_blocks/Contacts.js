import React from "react"
import "../../style/contact.scss"
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contacts = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <h1>Контакты</h1>
        <p>Адрес: Приморский край, г. Владивосток, ул. Гоголя 41</p>
        <p>Телефон отдела продаж: +7(999)999-9-999</p>
        <p>Email: shop@igadget-zone.ru</p>
        <p>График работы магазина:</p>
        <p>Каждый день с 10:00 до 20:00</p>
        <YMaps  >
            <Map className="contact__container--map" defaultState={{ center: [43.124297, 131.904823], zoom: 17 }}  />
        </YMaps>
      </div>
    </div>
  )
};

export default Contacts;

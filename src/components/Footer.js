import React from "react"
import "../style/footer.scss"
import Logo from "../image/logo.svg"
import {NavLink } from 'react-router-dom'
import Insta from "../image/_instagram.png"
import Whatsap from "../image/_whatsapp.png"
import Tg from "../image/_telegram.png"
import Bank from "../image/bank.png"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__container--logo-block">
            <NavLink to='/'> <img src={Logo} /></NavLink>
            </div>
            <div className="footer__container--info-block">
              <div className="footer__container--info-block__nav">

                <div className="footer__container--info-block__nav-links">
                  <NavLink to='/company'> <p>О компании</p></NavLink>
                  <NavLink to='/contacts'><p>Контакты</p></NavLink>
                  <NavLink to='/delivery'><p>Доставка</p></NavLink>
                  <NavLink to='/payment'><p>Оплата</p></NavLink>
                  <NavLink to='/news'><p>Новости</p></NavLink>
                </div>

                <div className="footer__container--info-block__nav-info">
                  <NavLink to='/zakaz'> <p>Как сделать заказ?</p></NavLink>
                  <NavLink to='/garanty'><p>Гарантия и Возврат</p></NavLink>
                  <NavLink to='/outconnection'><p>Обратная связь</p></NavLink>
                  <NavLink to='/oferta'><p>Оферта и политика конфиденциальности</p></NavLink>
                </div>

              </div>
              <div className="footer__container--info-block__contact">
                  <h1>КОНТАКТЫ</h1>
                  <p>+7 (999) 999-9-999</p>
                  <p>Приморский край , г. Владивосток , ул. Гоголя 41</p>
                  <div className="footer__container--info-block__contact-img_block">
                    <img src={Insta} />
                    <img src={Whatsap} />
                    <img src={Tg} />
                  </div>
              </div>
            </div>
            <div className="footer__container--bank">
              <img src={Bank} />
            </div>
        </div>
    </div>
  )
};

export default Footer;

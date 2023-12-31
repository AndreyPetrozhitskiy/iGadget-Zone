import "../style/header.scss";
import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "tailwindcss/tailwind.css";
import Logo from "../image/logo.svg";
import Lupa from "../image/lupa.svg";
import Human from "../image/human.svg";
import Static from "../image/heart.png";
import Heart from "../image/serdce.svg";
import Basket from "../image/basket.svg";
import Chevron from "../image/chevron-down.svg";
import { useSelector } from "react-redux";
import {NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
const Header = () => {
  const DataAuth = useSelector(state => state.auth.authdataMassive)
  const BasketData = useSelector(state => state.basket.BasketMassive)
  const Name = DataAuth[0].login
  const priceBusket = BasketData.reduce((acc, item) => acc + item.countPrice, 0);
  function formatPrice(price) {
    if (typeof price === 'number') {
      price = price.toString();
    }
    
    if (price.length > 3) {
      price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    
    return price;
  }
  const ggg = () =>{
    alert("Открылся каталог с этой категорией")
  }
  const ggg1 = () =>{
    alert("Пошел поиск")
  }

  // Получение массива с инфой
  const dropdownsData = useSelector(state => state.data.oneBlockDataMassive);

  const [dropdowns, setDropdowns] = useState(
    dropdownsData.map((item) => ({
      ...item,
      isOpen: false,
    })),
  );

  const toggleDropdown = (index) => {
    setDropdowns((prevDropdowns) => {
      const updatedDropdowns = prevDropdowns.map((dropdown, i) => {
        return {
          ...dropdown,
          isOpen: i === index ? !dropdown.isOpen : false,
        };
      });
      return updatedDropdowns;
    });
  };

  return (
    <motion.div className="header"
    initial={{ opacity: 0.5, y: -75 }}
    animate={{ opacity: 1,y:0 }}
    transition={{
      duration:0.7,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    >
      <div className="header__container">
        <div className="header__container-link--block">
          <div className="header__container-link--block-link">
          <NavLink to='/company'> <p id="company" >О компании</p></NavLink>
          <NavLink to='/contacts'><p id="contacts">Контакты</p></NavLink>
          <NavLink to='/delivery'><p id="delivery">Доставка</p></NavLink>
          <NavLink to='/payment'><p id="payment">Оплата</p></NavLink>
          <NavLink to='/news'><p id="news">HTML 5 API</p></NavLink>
          </div>
          <div className="header__container-link--block-number">
            <p>+7 (999) 999-9-999</p>
          </div>
        </div>

        <div className="header__container-search--block">
          <NavLink to='/'><img className="header__container-search--block-logo" src={Logo} id="logo-header"/></NavLink>
          <div className="header__container-search--block-search_bar">
            <input
              className="header__container-search--block-search_bar-input"
              type="text"
              placeholder="Поиск"
            />
            <div className="header__container-search--block-search_bar-button__block">
              <img
                onClick={ggg1}
                className="header__container-search--block-search_bar-button"
                src={Lupa}
              />
            </div>
          </div>
          <div className="header__container-search--block-search_bar-icons__block">
            <div className="header__container-search--block-search_bar-icons__block-user">
            <NavLink to='/auth'><img
                id="user-auth"
                className="header__container-search--block-search_bar-icons__block-human"
                src={Human}
              /></NavLink>
              <p className="header__container-navbar--block__name">{Name}</p>
            </div>
           
            <img
              className="header__container-search--block-search_bar-icons__block-static"
              src={Static}
            />
            <img
              className="header__container-search--block-search_bar-icons__block-heart"
              src={Heart}
            />
            <div className="header__container-search--block-search_bar-icons__block--basket__block">
            <NavLink to='/basket'><img
                id="basket"
                className="header__container-search--block-search_bar-icons__block-basket"
                src={Basket}
              /></NavLink>
              <p className="header__container-search--block-search_bar-icons__block-price">
                 {formatPrice(priceBusket)}   {"₽"} 
              </p>
            </div>
            
         
          </div>
        </div>

        <div className="header__container-navbar--block">
          {dropdowns.map((dropdown, index) => (
            <div className="relative" data-te-dropdown-ref key={index}>
              <div
                className="header__container-navbar--block-item"
                onClick={() => toggleDropdown(index)}
              >
                <p>{dropdown.title}</p>
                <img
                  className={dropdown.isOpen ? "rotate-180" : ""}
                  src={Chevron}
                  alt="Chevron"
                />
              </div>
              <CSSTransition
                in={dropdown.isOpen}
                timeout={50}
                classNames="dropdown"
                unmountOnExit
              >
                <ul className="header__container-navbar--block-item-drop__down">
                  {dropdown.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" onClick={ggg}>{item}</a>
                    </li>
                  ))}
                </ul>
              </CSSTransition>
              
            </div>
          ))}
          
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

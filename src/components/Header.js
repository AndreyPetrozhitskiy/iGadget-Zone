import '../style/header.css'
import React from "react"
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'tailwindcss/tailwind.css';


import Logo from '../image/logo.svg'
import Lupa from '../image/lupa.svg'
import Human from '../image/human.svg'
import Static from '../image/heart.png'
import Heart from '../image/serdce.svg'
import Basket from '../image/basket.svg'
import Chevron from '../image/chevron-down.svg'
const Header = () => {

const dropdowns = [
    {
      title: 'Смартфоны',
      isOpen: useState(false),
      items: [
        'Apple iPhone',
        'Samsung',
        'Xiaomi',
        'Huawei',
        'Honor',
        'OnePlus',
        'Realme',
        'Asus',
      ],
    },
    // Добавьте другие списки и их элементы, если необходимо
    {
      title: 'Ноутбуки',
      isOpen: useState(false),
      items: [
        'Apple MacBook',
        'Xiaomi',
        'Honor',
      ],
    },
    {
        title: 'Планшеты',
        isOpen: useState(false),
        items: [
          'Apple Ipad',
          'Xiaomi',
          'Honor',
        ],
      },
      {
        title: 'Наушники',
        isOpen: useState(false),
        items: [
          'Apple AirPods',
          'Xiaomi',
          'Honor',
        ],
      },
      {
        title: 'Телевизоры',
        isOpen: useState(false),
        items: [
          'Samsung',
          'Xiaomi',
          'Honor',
        ],
      },
      {
        title: 'Аксессуары',
        isOpen: useState(false),
        items: [
          'Защитные стекла',
          'Чехлы',
        ],
      },
  ];

  const toggleDropdown = (index) => {
    dropdowns[index].isOpen[1](!dropdowns[index].isOpen[0]);
    // Закройте другие списки при открытии этого списка, если это необходимо
    dropdowns.forEach((dropdown, i) => {
      if (i !== index) {
        dropdown.isOpen[1](false);
      }
    });
  };
  return (
    <div className='header'>

      <div className='header__container'>
        <div className='header__container-link--block'>
            <div className='header__container-link--block-link'> 
                <p>О компании</p>
                <p>Контакты</p>
                <p>Доставка</p>
                <p>Оплата</p>
                <p>Новости</p>
            </div>
            <div className='header__container-link--block-number'>
                <p>+7 (999) 999-9-999</p>
            </div>
        </div>

        <div className='header__container-search--block'>
            <img className='header__container-search--block-logo' src={Logo} />
            <div className='header__container-search--block-search_bar'>
                <input className='header__container-search--block-search_bar-input' type='text' />
                <div className='header__container-search--block-search_bar-button__block'>
                    <img className='header__container-search--block-search_bar-button' src={Lupa} />
                </div> 
            </div> 
            <div className='header__container-search--block-search_bar-icons__block'>
                <img className='header__container-search--block-search_bar-icons__block-human' src={Human} />
                <img className='header__container-search--block-search_bar-icons__block-static' src={Static} />
                <img className='header__container-search--block-search_bar-icons__block-heart' src={Heart} />
                <img className='header__container-search--block-search_bar-icons__block-basket' src={Basket} />
                <p className='header__container-search--block-search_bar-icons__block-price'>133 000 ₽</p>
            </div>
        </div>

        <div className='header__container-navbar--block'>
                    {dropdowns.map((dropdown, index) => (
                        <div className="relative" data-te-dropdown-ref key={index}>
                            <div className="header__container-navbar--block-item" onClick={() => toggleDropdown(index)}>
                                <p>{dropdown.title}</p>
                                <img className={dropdown.isOpen[0] ? 'rotate-180' : ''} src={Chevron} alt="Chevron" />
                            </div>
                            <CSSTransition
                                in={dropdown.isOpen[0]}
                                timeout={50}
                                classNames="dropdown"
                                unmountOnExit
                            >
                                <ul className="header__container-navbar--block-item-drop__down">
                                    {dropdown.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a href="#">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CSSTransition>
                        </div>
                    ))}
        </div>
      </div>
    </div>
  )
};

export default Header;

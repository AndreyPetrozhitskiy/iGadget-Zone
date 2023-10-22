import { useState } from "react";


const dropdowns = [
    {
      title: 'Смартфоны',
      isOpen: false,
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
    {
      title: 'Ноутбуки',
      isOpen: false,
      items: [
        'Apple MacBook',
        'Xiaomi Notebook',
        
      ],
    },
    {
        title: 'Планшеты',
        isOpen: false,
        items: [
          'Apple Ipad',
          'Xiaomi',
          'Lenovo',
        ],
      },
      {
        title: 'Наушники',
        isOpen: false,
        items: [
          'Apple AirPods',
          'Xiaomi',
          'Honor',
        ],
      },
      {
        title: 'Телевизоры',
        isOpen: false,
        items: [
          'Samsung',
          'Xiaomi',
          'JBL',
        ],
      },
      {
        title: 'Аксессуары',
        isOpen: false,
        items: [
          'Защитные стекла',
          'Чехлы',
        ],
      },
  ];
  export default dropdowns;
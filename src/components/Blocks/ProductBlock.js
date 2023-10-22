import React, { useState,useEffect } from "react"
import '../../style/productblock.scss'
import SliderProduct from "../ui components/SliderProduct";
const ProductBlock = (props) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
      };
    const mass = props.mass
  return (
    <div className="product__block">
      <div className="product__block-container">
        <p className="product__block-container__h1">{props.h1}</p>
        <div className="product__block-container__nav-block">
                {mass.map((item, itemIndex) => (
                    <div
                    className={`product__block-container__nav-block--item ${
                        selectedItem === item || (itemIndex === 0 && selectedItem === null)
                        ? "selected"
                        : ""
                    }`}
                    key={itemIndex}
                    onClick={() => handleItemClick(item)}
                    >
                    <p>{item}</p>
                    </div>
                ))}
        </div>
        <div className="product__block-container__slider">
            <SliderProduct />
            {/* В него будут передаваться пропсы(фотографию и массив с данными:
                Массив ввида
                    Телефоны
                        Бренд:Apple
                            1 Карточка
                                Модель:
                                Цена:
                                Фото:
                            2 Карточка
                                Модель:
                                Цена:
                                Фото:
                            3 Карточка
                                Модель:
                                Цена:
                                Фото:
                            4 Карточка
                                Модель:
                                Цена:
                                Фото:
                        Бренд:Samsung
                            1 Карточка
                                Модель:
                                Цена:
                                Фото:
                            2 Карточка
                                Модель:
                                Цена:
                                Фото:
                            3 Карточка
                                Модель:
                                Цена:
                                Фото:
                            3 Карточка
                                Модель:
                                Цена:
                                Фото:
                    Ноутбуки
                        Бренд:Apple
                            1 Карточка
                                Модель:
                                Цена:
                                Фото:
                            2 Карточка
                                Модель:
                                Цена:
                                Фото:
                            3 Карточка
                                Модель:
                                Цена:
                                Фото:
                            4 Карточка
                                Модель:
                                Цена:
                                Фото:
                    И т.д
                ) */}
        </div>
      </div>
    </div>
  )
};

export default ProductBlock;

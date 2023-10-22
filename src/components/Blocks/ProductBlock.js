import React, { useState,useEffect } from "react"
import '../../style/productblock.scss'
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
      </div>
    </div>
  )
};

export default ProductBlock;

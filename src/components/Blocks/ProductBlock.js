import React, { useState } from "react";
import "../../style/productblock.scss";
import SliderProduct from "../ui components/SliderProduct";
const ProductBlock = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const mass = props.mass;
  const data_slider = props.data

  

  
  // console.log(Object.keys(data_slider))
  return (
    <div className="product__block">
      <div className="product__block-container">
        <p className="product__block-container__h1">{props.h1}</p>
        <div className="product__block-container__nav-block">
          {mass.map((item, itemIndex) => (
            <div
              className={`product__block-container__nav-block--item ${
                selectedItem === item ||
                (itemIndex === 0 && selectedItem === null)
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
        {Object.keys(data_slider).map((item, itemIndex) => (
           
            <SliderProduct key={itemIndex} array_product={data_slider[item]}/>
          ))}
          {/* <SliderProduct /> */}
           


              

        </div>
      </div>
    </div>
  );
};

export default ProductBlock;

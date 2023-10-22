import React, { useState,useEffect } from "react"
import '../../style/productblock.scss'
const ProductBlock = (props) => {
    // const [color,setColor] = useState(false)
    // const [count,setCount] = useState(0)
    // // const ColorChange = () => {
    // //     setCount(count +1, () => {
    // //         console.log(count)
    // //     } )
    // //     if (count == 1) {
    // //         setColor(true, () => {
    // //             console.log(color); 
    // //           });
    // //     }
     
    // // }
    // const ColorChange = () => {
    //     setCount(count + 1);
    //     console.log(count)
    //   };
    // useEffect(() => {
    //     if (count == 1) {
    //       setColor(true);
    //       console.log(color); // Это значение будет задержано на следующем рендере
    //     }
    //   }, [count]);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
      };
    //  const ColorChange = () => {

    //  }
    // const mass =[
    //     "Apple","Samsung","Honor"
    // ]
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

import React from "react"
import OneBlock from './Blocks/OneBlock';
import ProductBlock from './Blocks/ProductBlock.js';
// Redux
import { useDispatch, useSelector } from 'react-redux';
const HomePage = () => {
    const dispatch = useDispatch()
    // Получение массива с инфой
    const dropdowns = useSelector(state => state.data.oneBlockDataMassive);
  
  return (
    
    <div className="HomePage">
      <OneBlock />
      <p className='app__p'>Большой выбор цифровой техники</p>
      {dropdowns.map((item, itemIndex) => (
        <ProductBlock slider_index={itemIndex} key={itemIndex} h1={dropdowns[itemIndex].title}  data={dropdowns[itemIndex].product[0]} />
      ))}
    </div>
  )
};

export default HomePage;

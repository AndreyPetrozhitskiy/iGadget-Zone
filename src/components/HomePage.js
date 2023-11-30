import React from "react"
import OneBlock from './Blocks/OneBlock';
import ProductBlock from './Blocks/ProductBlock.js';
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from 'react-redux';
const HomePage = () => {
    const dispatch = useDispatch()
    // Получение массива с инфой
    const dropdowns = useSelector(state => state.data.oneBlockDataMassive);
  
  return (
    
    <motion.div className="HomePage"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    
    >
      <OneBlock />
      <p className='app__p'>Большой выбор цифровой техники</p>
      {dropdowns.map((item, itemIndex) => (
        <ProductBlock slider_index={itemIndex} key={itemIndex} h1={dropdowns[itemIndex].title}  data={dropdowns[itemIndex].product[0]} />
      ))}
    </motion.div>
  )
};

export default HomePage;

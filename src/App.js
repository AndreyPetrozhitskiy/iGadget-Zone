import React from 'react';
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import OneBlock from './components/Blocks/OneBlock.js';
import Footer from './components/Blocks/Footer.js';
import ProductBlock from './components/Blocks/ProductBlock.js';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const dropdowns = useSelector( state => state )

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
      for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
  return (
    <div className="App">
      <Header  />
      <OneBlock />
      <p className='app__p'>Большой выбор цифровой техники</p>
      {dropdowns.map((item, itemIndex) => (
        <ProductBlock key={itemIndex} h1={dropdowns[itemIndex].title} mass={dropdowns[itemIndex].items} />
      ))}
      <Footer />
     <ButtonUp />
    </div>
  );
}

export default App;

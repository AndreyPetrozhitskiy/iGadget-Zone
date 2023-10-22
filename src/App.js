import React from 'react';
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import OneBlock from './components/Blocks/OneBlock.js';
import Footer from './components/Blocks/Footer.js';
import ProductBlock from './components/Blocks/ProductBlock.js';
import dropdowns from "./data";
function App() {
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
      <Header />
      <OneBlock />
      <p className='app__p'>Большой выбор цифровой техники</p>
      <ProductBlock h1={dropdowns[0].title} mass={dropdowns[0].items} />
      <ProductBlock h1={dropdowns[1].title} mass={dropdowns[1].items} />
      <ProductBlock h1={dropdowns[2].title} mass={dropdowns[2].items} />
      <ProductBlock h1={dropdowns[3].title} mass={dropdowns[3].items} />
      <Footer />
     <ButtonUp />
    </div>
  );
}

export default App;

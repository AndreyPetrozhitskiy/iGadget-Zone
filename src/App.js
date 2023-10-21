import React from 'react';
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import OneBlock from './components/Blocks/OneBlock.js';
import Footer from './components/Blocks/Footer.js';
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
      <Footer />
     <ButtonUp />
    </div>
  );
}

export default App;

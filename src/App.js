import React from 'react';
import { useSelector } from "react-redux";
// Компоненты
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import Footer from './components/Footer.js';

import AppRouter from './components/AppRouter.js';

function App() {
    // Плавный переход по ссылкам
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
      <AppRouter />
      <Footer />
     <ButtonUp/>
    </div>
  );
}

export default App;

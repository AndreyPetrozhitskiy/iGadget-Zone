import React from 'react';
import {Routes, Route,Link } from 'react-router-dom'
// Компоненты
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';

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
      <Header  />
      <Routes >
        <Route path='/' element={<HomePage />}/>
      </Routes>
      <Footer />
     <ButtonUp />
    </div>
  );
}

export default App;

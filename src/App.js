import React from 'react';
import {Routes, Route,Link } from 'react-router-dom'
// Компоненты
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import Company from './components/header_blocks/Company.js';
import Contacts from './components/header_blocks/Contacts.js';
import Delivery from './components/header_blocks/Delivery.js';
import Payment from './components/header_blocks/Payment.js';
import News from './components/header_blocks/News.js';
import NotFaundPage from './components/Blocks/NotFaundPage.js';


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
        <Route path='/company' element={<Company />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/news' element={<News />}/>
        <Route path='*' element={<NotFaundPage />}/>
      </Routes>
      <Footer />
     <ButtonUp />
    </div>
  );
}

export default App;

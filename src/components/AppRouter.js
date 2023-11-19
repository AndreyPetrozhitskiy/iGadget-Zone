import React from "react"
import {Routes, Route,Link } from 'react-router-dom'

import HomePage from './HomePage.js';
import Company from './header_blocks/Company.js';
import Contacts from './header_blocks/Contacts.js';
import Delivery from './header_blocks/Delivery.js';
import Payment from './header_blocks/Payment.js';
import News from './header_blocks/News.js';
import NotFaundPage from './Blocks/NotFaundPage.js';
import Auth from './Blocks/Auth.js';
import Register from './Blocks/Register.js';
import Basket from './Blocks/Basket.js';

const AppRouter = () => {
  return (
    <Routes >
        <Route path='/' element={<HomePage />}/>
        <Route path='/company' element={<Company />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/basket' element={<Basket />}/>
        <Route path='*' element={<NotFaundPage />}/>
      </Routes>
  )
};

export default AppRouter;

import React from 'react';
// Компоненты
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import Footer from './components/Footer.js';
import AppRouter from './components/AppRouter.js';
import Location from './components/Blocks/Location.js';

function App() {
  return (
    <div className="App">
      {/* <Location /> */}
      <Header />
      <AppRouter />
      <Footer />
      <ButtonUp/>
      
    </div>
  );
}
export default App;

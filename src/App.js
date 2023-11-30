import React from 'react';
// Компоненты
import Header from './components/Header.js';
import ButtonUp from './components/ui components/ButtonUp.js';
import Footer from './components/Footer.js';
import AppRouter from './components/AppRouter.js';

function App() {
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

import React from 'react';
import Home from './pages/HeroContainer';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Product from './pages/Product';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Home/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
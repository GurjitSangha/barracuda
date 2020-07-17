import React from 'react';
import './App.css';

import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Specials from './components/Specials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="App">
      <TopBar />
      <Header />
      <Hero />
      <Menu />
      <Specials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

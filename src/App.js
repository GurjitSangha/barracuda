import React from 'react';
import './App.css';

import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Hero />
    </div>
  );
}

export default App;

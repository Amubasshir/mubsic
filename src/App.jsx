import React from 'react';
import './App.css';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
const App = () => {
  return (
    <div className=" App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
    </div>
  );
};

export default App;

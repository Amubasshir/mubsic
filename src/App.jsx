import React from 'react';
import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
const App = () => {
  return (
    <div className=" App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Footer />
    </div>
  );
};

export default App;

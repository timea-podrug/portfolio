import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;

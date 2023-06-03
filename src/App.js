import React from 'react';
import './App.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PortfolioWebsiteDetails from './components/portfolioDetails/portfolioWebsiteDetails';
import PortfolioWebsite from './components/portfolio/portfolio_website';
import Homepage from './components/Homepage';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/portfolioWebsite" element={<PortfolioWebsite />}></Route>
        <Route  path='/PortfolioWebsiteDetails' element={<PortfolioWebsiteDetails />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route  path='/about' element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route  path='/portfolio' element={<PortfolioWebsite />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
       
      </Routes>
    </Router>
  );
}

export default App;

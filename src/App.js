import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/portfolio/portfolio';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PortfolioWebsiteDetails from './components/portfolioDetails/portfolioWebsiteDetails';
import PortfolioWebsite from './components/portfolio/portfolio_website';




function App() {
  return (
<Router>
    <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />          
        </main>
        <Footer />
        <ScrollUp />
       

      
         <Routes>

          <Route path="/portfolioWebsite" element={<PortfolioWebsite />}></Route>
          <Route exact path='/PortfolioWebsiteDetails' element={<PortfolioWebsiteDetails />}></Route>
        </Routes>
      </Router>

    


  );
}

export default App;

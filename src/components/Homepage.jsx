import React from 'react';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Footer from './footer/footer';
import ScrollUp from './scrollup/ScrollUp';
import Portfolio from './portfolio/portfolio';

function Homepage() {
    return (
        <>
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

        </>

    );
}
export default Homepage;

import React from "react";
import "./portfolio.css";
import Next from "./next";
import TechEventsApp from "./techEventsApp";
import PortfolioWebsite from "./portfolio_website";





const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Projects I Worked On</span>
            <PortfolioWebsite/>
            
            <TechEventsApp/>

            <Next/>
        </section>
        


    )
}
export default Portfolio
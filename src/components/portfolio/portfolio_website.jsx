import React from "react";
import "./portfolio.css";
import Video from "../../assets/portfolioWebsite_video.mp4";
import { Link } from "react-router-dom";
import ReactLogo from "../../assets/react.png";
import CssLogo from "../../assets/css.png";
import HtmlLogo from "../../assets/html.png"

const PortfolioWebsite = () => {
    return (
        <div className="portfolio_container container grid">
            <div className="portfolio_content">

                <div className="project_languages" id="techevents_icons">
                    <a href="https://www.instagram.com/timea_podrug/" target="_blank">
                        <img src={ReactLogo} alt="" width="40px" />
                    </a>

                    <a href="https://www.linkedin.com/in/timea-podrug-30a910216/" target="_blank">
                        <img src={CssLogo} alt="" width="40px" />
                    </a>
                    <a href="https://www.linkedin.com/in/timea-podrug-30a910216/" target="_blank">
                        <img src={HtmlLogo} alt="" width="40px" />
                    </a>


                </div>
                <video width="460" height="205" className="portfolio_video" controls autoPlay loop playsInline>
                    <source src={Video} />

                    does not support
                </video>

            </div>
            <div className="portfolio_data portfolio_content portfolio_description" >
                <p className="portfolio_description">
                    <p className="subtitle">Portfolio Website</p>
                    
                    <br />
                    In today's digital age, having a portfolio website has become essential for professionals and creatives alike. It serves as a platform to showcase our skills, accomplishments, and experiences to potential clients, employers, or collaborators.<br></br><br></br> As a passionate individual seeking to make a mark in my field, I embarked on the journey of creating my own portfolio website.

                </p>

                <Link to="/PortfolioWebsiteDetails" target="_blank" className="button button--flex">Read On</Link>
                <a href="https://github.com/timea-podrug/portfolio" className="button button--flex">Github</a>
                <a href="" className="button button--flex">Live demo</a></div>

        </div>





    )
}
export default PortfolioWebsite;
import React from "react";
import "./portfolio.css";
import Video from "../../assets/techEventsApp_video.mp4";






const TechEventsApp = () => {
    return (
        <div className="portfolio_container container grid">
            
            <div className="portfolio_data portfolio_content portfolio_description" >
                <p className="portfolio_description">
                <p className="subtitle">Tech Events App</p>
                <br />
                Tech Events App is an application designed to find events in the IT industry. It allows users to find lectures, gatherings, panel discussions and conferences without the need to search the Internet or social networks.
                </p>
                <a href="#" className="button button--flex">Read On
                </a>

            </div>
            <div className="portfolio_content">
                

                <video width="150px" height="320px" className="app_video" controls autoPlay loop playsInline>
                    <source src={Video} />
                   
                    does not support
                </video>

            </div>
        </div>




    )
}
export default TechEventsApp
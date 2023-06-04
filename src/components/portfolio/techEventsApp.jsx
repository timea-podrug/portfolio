import React from "react";
import "./portfolio.css";
import Video from "../../assets/techEventsApp_video.mp4";
import AndroidStudio from "../../assets/android-studio-icon.png";
import Java from "../../assets/java-logo.png";






const TechEventsApp = () => {
    return (
        <div className="portfolio_container container grid">

            <div className="portfolio_data portfolio_content portfolio_description" >
                <p className="portfolio_description">
                    <p className="subtitle">Tech Events App</p>
                    <br />
                    If you're seeking inspiration, knowledge, or networking opportunities in the tech industry, TechEventsApp is here to guide you.
                    <br></br><br></br>
                    Whether you're a developer, designer, entrepreneur, or simply passionate about technology, TechEventsApp is your go-to resource for staying up-to-date with the latest happenings in the tech world.
                </p>

                {/* <a href="#" className="button button--flex">Read On</a> */}
                <a href="https://github.com/timea-podrug/techEventsApp" className="button button--flex">Github</a>
                {/* <a href="" className="button button--flex" disabled>Live demo</a> */}

            </div>
            <div className="portfolio_content">

                <div className="project_languages" id="techevents_icons">
                    <a href="https://www.instagram.com/timea_podrug/" target="_blank">
                        <img src={AndroidStudio} alt="" width="40px" />
                    </a>

                    <a href="https://www.linkedin.com/in/timea-podrug-30a910216/" target="_blank">
                        <img src={Java} alt="" width="40px" />
                    </a>


                </div>
                <video width="150px" height="320px" className="app_video" controls autoPlay loop playsInline>
                    <source src={Video} />

                    does not support
                </video>


            </div>

        </div >




    )
}
export default TechEventsApp
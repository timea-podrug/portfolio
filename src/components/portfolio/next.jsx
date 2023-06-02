import React from "react";
import "./portfolio.css";





const Next = () => {
    return (
        <div className="portfolio_container container grid">
            <div className="portfolio_content">
                

                <iframe className="portfolio_video" width="560" height="315" src="https://www.youtube.com/embed/dAdb2X_GRxs?loop=1&autoplay=1&playlist=dAdb2X_GRxs" title="YouTube video player" frameborder="0" allow=" accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div className="portfolio_data portfolio_content portfolio_description" >
                <p className="portfolio_description">
                <p className="subtitle">NEXT</p>
                <br />
                The goal of the conference is to show young people the possibilities and community that <b> Split</b> and <b> Croatia</b> have. <br></br><br></br>

                    <span id="date"> 25. MARCH, SPLIT, DOM MLADIH </span><br></br><br></br>
                    4 lectures and 1 panel discussion: entrepreneurship, technology, innovation, design and
                    personal development all in one place. <br></br>

                    There were more than <b> 300</b> high school students, students and other young people in the audience.

                </p>
                <a href="#" className="button button--flex">Read On
                </a>

            </div>
        </div>




    )
}
export default Next
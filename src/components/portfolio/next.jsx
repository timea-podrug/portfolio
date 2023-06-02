import React from "react";
import "./portfolio.css";
import Slika from "../../assets/next2.jpg"





const Next = () => {
    return (
        <div className="portfolio_container container grid">
            <div className="portfolio_content">

                <iframe className="portfolio_video" width="560" height="315" src="https://www.youtube.com/embed/dAdb2X_GRxs?loop=1&autoplay=1&playlist=dAdb2X_GRxs" title="YouTube video player" frameborder="0" allow=" accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div className="portfolio_data portfolio_content portfolio_description" >
                <p className="portfolio_description">
                    <p className="subtitle">NEXT</p>
                    Cilj konferencije je pokazati mladima mogućnosti i zajednicu koju Split i Hrvatska imaju. <br></br><br></br>

                    <span id="date"> 25. OŽUJKA SPLIT DOM MLADIH </span><br></br><br></br>
                    4 predavanja i 1 panel rasprava: poduzetništvo, tehnologija, inovacija, dizajn i
                    osobni razvoj sve na jednom mjestu. <br></br>

                    U publici je bilo više od 300 srednjoškolaca, studenata i ostalih mladih.

                </p>
                <a href="#" className="button button--flex">Read On
                </a>

            </div>
        </div>




    )
}
export default Next
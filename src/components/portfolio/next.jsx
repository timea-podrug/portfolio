import React from "react";
import "./portfolio.css";
import Slika from "../../assets/next2.jpg"




const Next = () => {
    return (
        <div className="portfolio_container container grid">
            <img alt="#" src={Slika} className="portfolio_img" />
            <div className="portfolio_data">
                <p className="subtitle">NEXT</p>
                
                <br></br>
                <p className="portfolio_description">
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
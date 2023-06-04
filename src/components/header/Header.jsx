import React, {useState} from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/Contact";
const Header =()=>{
    /*CHANGE BACKGROUND HEADER*/
    
    /*TOGGLE MENU*/
    const[Toggle, showMenu]= useState(false);
    const[activeNav, setActiveNav]=useState("#home");

    return(
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav_logo">Portfolio</Link>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <Link to="/home" className="nav_link">
                                <i className="uil uil-estate nav_icon"></i> Home
                            </Link>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills"  className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>
                        

                        <li className="nav_item">
                            <a href="#portfolio"  className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
                <hr></hr>
            </nav>
        </header>
    )
}
export default Header;
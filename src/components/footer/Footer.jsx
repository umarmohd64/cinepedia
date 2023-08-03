import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                This web-application has been made solely by me. I have employed the use of <b><em>React.js</em></b> for managing front-end of this project.
                In order to manage the states and UI, <b><em>Redux, and Redux-Toolkit </em></b> have been used.
                Also, this project utilizes a good implication of <b><em>SCSS</em></b> as the styling framework to make it super-responsive for all devices.
                I have taken the data of various movies, and TV shows as well as people from the TMDB website and respective <b><em>API calls</em></b> have been made in order to display and manage the same. 
                Firstly, a proper environment was made including base URLs and tokens and further API calling was done according to the requirements. <br />
                I have tried to cover some additional and core concepts of React.js such as <em>JSX, props, states,  props, various hooks</em>  as well as <em>conditional rendering and components' lifecycle</em> to build a proper user-interface. <br />
                <em>P.S.: I have made the logo myself</em> <br /><br />

                Thank you for choosing <em> <b>Cinepedia</b></em> , your ultimate destination for all things movies and TV shows! <br />
                Lights, camera, action - let the movie journey begin!
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/umarmohd64">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a> 
           
                    <a href="https://www.linkedin.com/in/mohammadumar64/">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a> 

                    <a href="https://instagram.com/umaryaarrr?igshid=MzRlODBiNWFlZA==">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a> 

                    <a href="https://www.facebook.com/profile.php?id=100068907237290">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </a> 


             
                </div>
            </ContentWrapper>

            <div className="copyright">
                <p> © 2023 | Made By UMAR </p>
            </div>
        </footer>
    );
};

export default Footer;
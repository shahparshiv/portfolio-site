import React from "react";
import './footer.scss';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import ghub from '../assets/github.png';

const Footer = () =>{
    return(
        <div className="footer-container">
            <h6>Let's Connect</h6>
            <ul className="social-container">
                <li>
                    <a href="www.linkedin.com">
                        <img src={linkedin} alt='linkedin-icon'/>
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com">
                        <img src={ghub} alt='linkedin-icon'/>
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com">
                        <img src={insta} alt='linkedin-icon'/>
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com">
                        <img src={twitter} alt='linkedin-icon'/>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Footer;
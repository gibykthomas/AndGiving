import React from "react";
import InfoCard from './InfoCard.jsx';
import charityimg from "../../img/Mask Group.jpg";
import placeholderLogo from "../../img/placeholderLogo.png";
import { NavLink } from 'react-router-dom';
import './landingPage.css';

const LandingPage = () => {
    return (
        <div className="wholePage">
            <NavLink className="nav-link" to="/">

                <div className="logo">
                    <img src={placeholderLogo} alt="Charity img" width="8%" height="8%" />
                    <h1>Digital</h1>
                </div>
            </NavLink>
            <div className="wrapper">
                <InfoCard />
                <img src={charityimg} className="main-img" alt="Charity img" width="45%" height="50%" />

            </div>
        </div>
    )
}


export default LandingPage;
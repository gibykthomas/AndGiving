import React from "react";
import InfoCard from './InfoCard.jsx';
import charityimg from "../../img/Mask Group.jpg";
import placeholderLogo from "../../img/placeholderLogo.png";


import './landingPage.css';
//two main divs -> img and info -> 
//info into two divs one with progress bar another with title and button

const LandingPage = () => {
    return (
        <div className="wholePage">
            <div className="logo">
                <img src={placeholderLogo} alt="Charity img" width="8%" height="8%" />
                <h1>Digital</h1>
            </div>
            <div className="wrapper">
                <InfoCard />
                <img src={charityimg} className="main-img" alt="Charity img" width="40%" height="45%" />

            </div>
        </div>
    )
}


export default LandingPage;
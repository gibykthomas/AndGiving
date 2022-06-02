import React from "react";
import { NavLink } from 'react-router-dom';
import placeholderLogo from "../../img/placeholderLogo.png";
import './logo.css';


const Logo = () => {
    return (
        <div className="container">

            <NavLink className="nav-link row" to="/">

                <div className="logo">
                    <img src={placeholderLogo} alt="AND logo" />
                    <h1>Digital</h1>
                </div>
            </NavLink>
        </div>
    )
}

export default Logo;
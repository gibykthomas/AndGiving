import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './infoCard.css'
import ProgressBar from '../InfoCard/ProgrssBar/ProgressBar.jsx';
import { NavLink } from 'react-router-dom';


const InfoCard = () => {

    return (
        
        <div className="info-card col-md-7 col-lg-6 col-xl-6">
            <div className='top'>
                <h1 className='title'>242 <br></br>
                    Fundraising<br></br>
                    Challenge</h1>
                <p>We’re aiming to raise up to £20,000 to support people impacted by the invasion of Ukraine. </p>

                <NavLink className="nav-link" to="/leaderboard">
                    <button type="button" className="btn btn-light to-leaderboard">VIEW LEADERBOARD</button>

                </NavLink>

            </div>
            <div className="bottom">

                <ProgressBar />

                <h5 className="target-label">Target: £10 000 </h5>
            </div>

        </div>
    )
}

export default InfoCard
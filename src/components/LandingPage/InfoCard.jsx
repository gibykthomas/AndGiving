import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage.css'
import ProgressBar from './ProgressBar';
import {NavLink, Link, withRouter } from 'react-router-dom';


// title and button progress bar
const InfoCard = () => {
    return (
        <div className="infoCard">
            <div className='top'>
                <h1 className='title'>242 <br></br>
                    Fundraising<br></br>
                    Challenge</h1>
                <p>Vulputate eu scelerisque felis imperdiet proin fermentum leo. Est lorem ipsum dolor sit. </p>
            
                <NavLink
          data-dd-action-name="home-nav-link"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          to="/leaderboard">
             <button type="button" className="btn btn-light learn">LEARN MORE</button>

        </NavLink>
            
                {/* <Link to="/shop"> */}
                    {/* <button type="button" className="btn btn-light learn">LEARN MORE</button></Link> */}

            </div>
            <div className="bottom">

                <ProgressBar />

                <h5 className="target-label">Target: £10 000 </h5>
            </div>
        </div>
    )
}

export default InfoCard
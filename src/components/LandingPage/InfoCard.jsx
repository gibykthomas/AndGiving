import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage.css'
import ProgressBar from './ProgressBar';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../useContext/DataContext';


const InfoCard = () => {
    const {data, setData}= useContext(DataContext)

    return (
        <div className="infoCard">
            <div className='top'>
                <h1 className='title'>242 <br></br>
                    Fundraising<br></br>
                    Challenge</h1>
                <p>Vulputate eu scelerisque felis imperdiet proin fermentum leo. Est lorem ipsum dolor sit. </p>

                <NavLink className="nav-link" to="/leaderboard">
                    <button type="button" className="btn btn-light learn">VIEW LEADERBOARD</button>

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
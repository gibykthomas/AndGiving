import React,{useContext} from "react";
import InfoCard from './InfoCard.jsx';
import charityimg from "../../img/Mask Group.jpg";
import placeholderLogo from "../../img/placeholderLogo.png";
import { NavLink } from 'react-router-dom';
import './landingPage.css';
import axios from "axios";
import { DataContext } from '../../useContext/DataContext';



const LandingPage = () => {

    const {data, setData}= useContext(DataContext)

    React.useEffect(() => {
        axios.get(`https://sheet.best/api/sheets/a958d2bd-fe72-483c-a828-941c3563df09`)
            .then(res => {
                const clubData = res.data;
                setData(clubData)
            })
            .catch((error) => {
                console.warn('Error fetching repos: ', error)
                this.setState({
                    error: `There was an error fetching the repositories.`
                })
            })
      }, []);

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
                <img src={charityimg} className="main-img" alt="Charity img" />

            </div>
        </div>
    )
}


export default LandingPage;
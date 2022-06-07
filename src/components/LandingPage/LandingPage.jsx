import React, { useContext } from "react";
import InfoCard from '../LandingPage/InfoCard/InfoCard.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import ImageCard from '../LandingPage/ImageCard/ImageCard.jsx';
import './landingPage.css';
import axios from "axios";
import { DataContext } from '../../useContext/DataContext';



const LandingPage = () => {

    const { setData } = useContext(DataContext)

    React.useEffect(() => {
        axios.get(`https://sheet.best/api/sheets/7deab1e4-fab8-4cb2-9fdd-8c2a1f72cfe3`)
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
    });

    return (
        <div className="whole-page container-fluid">
                <Logo />
            <div className="container">
                <div className="wrapper row g-3">
                    <InfoCard />
                    <ImageCard />
                </div>
            </div>
        </div>
    )
}


export default LandingPage;
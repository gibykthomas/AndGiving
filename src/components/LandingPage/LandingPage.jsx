import React, { useContext } from "react";
import InfoCard from '../LandingPage/InfoCard/InfoCard.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import ImageCard from '../LandingPage/ImageCard/ImageCard.jsx';
import './landingPage.css';
import axios from "axios";
import { DataContext } from '../../useContext/DataContext';



const LandingPage = () => {

    const { data,setData } = useContext(DataContext)

    React.useEffect(() => {
        axios.get(`https://sheet.best/api/sheets/87f43c47-3c43-4941-a9b2-f0569dafc098`)
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
    },[]);

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
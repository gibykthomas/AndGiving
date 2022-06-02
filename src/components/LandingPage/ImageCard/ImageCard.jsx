import React from "react";
import './imageCard.css';
import charityimg from "../../../img/Mask Group.jpg";



const ImageCard = () => {
    return (
        <div className="col-md-7 col-lg-6 col-xl-6 img-div">
        <img src={charityimg} className="main-img" alt="Charity img" />
    </div>
    )
}

export default ImageCard;
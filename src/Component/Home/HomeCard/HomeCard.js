import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './HomeCard.css'

const HomeCard = (props) => {
    const { Image, Type, VehicleId } = props.vehicle;
    const history = useHistory();
    const handleBookNow = () => {
        history.push(`/destination/${VehicleId}`)
    }
    return (

        <div>
            <div className="card cards" style={{ width: " 15rem" ,  height:"18rem" }}>
                <img className="card-img-top" src={Image} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"> Vehicle Type:{Type}</p>
                    <br />
                    <button onClick={handleBookNow}>Book Now</button>
                </div>
            </div>
        </div>





    );
};

export default HomeCard;
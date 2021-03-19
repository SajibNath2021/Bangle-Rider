import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const HomeCard = (props) => {
    const { Image, Type, VehicleId } = props.vehicle;
    const history = useHistory();
    const handleBookNow = () => {
        history.push(`/destination/${VehicleId}`)
    }
    return (

        <div>
            <div className="card" style={{ width: " 18rem" ,  height:"20rem" }}>
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
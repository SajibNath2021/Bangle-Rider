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

        <div className='col-md-3 d-flex justify-content-center' style={{marginTop:'20Vh'}}>
            <div type="button" onClick={handleBookNow} className="card cards " style={{ width: " 37Vh" ,  height:"35Vh"} }>
                <img className="card-img-top" src={Image} alt="Card image cap" />
              
                <div className="card-body">
                    <h5 className="card-text">{Type}</h5>
                   
                    <button className="bookNow">Book Now</button>
                </div>
            </div>
        </div>





    );
};

export default HomeCard;
import React from 'react';
import { useParams } from 'react-router';

const DestinationDetails = (props) => {
    const { VehicleId } = useParams();
    const vehicleData = props.vehicleType;
    const {type , price , site, img}= vehicleData;
    // const found = vehicleData.find(element => element.type === VehicleId)
   
    
    return (
        <div>
            <h1>details</h1>
            <p>{price}</p>
            <p>{site}</p>
        </div>
    );
};

export default DestinationDetails;
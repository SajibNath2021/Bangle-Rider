import React from 'react';
import { useParams } from 'react-router';

const DestinationDetails = (props) => {
    
    const { VehicleId } = useParams();
    console.log(VehicleId);
    const vehicleData = props.vehicleType;
    const {type , price , site, img}= vehicleData;
    // const found = vehicleData.find(element => element.type === VehicleId)
   
    
    return (
        <div>
            
            <p>$80  {type}</p>
            
        </div>
    );
};

export default DestinationDetails;
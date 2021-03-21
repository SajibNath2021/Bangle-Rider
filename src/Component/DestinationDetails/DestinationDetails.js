import React from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const DestinationDetails = (props) => {
    
    const { VehicleId } = useParams();
    const vehicleData = props.vehicleType;
    const {type , price , site, img}= vehicleData;
    // const find = vehicleData.find(element => element.type === VehicleId)
    //  console.log(find);
    
    return (
        <div style={{background:'gray',borderRadius:'5px',padding:'5px'}}>
            
            <p style={{background:'tomato',borderRadius:'5px'}}><img src={img} style={{ width:'25%'}} alt=""/> {type} <FontAwesomeIcon icon={faUserFriends} /> {site}  {price}</p>
            <p  style={{background:'tomato',borderRadius:'5px'}}><img src={img} style={{ width:'25%'}} alt=""/> {type} <FontAwesomeIcon icon={faUserFriends} /> {site}  {price}</p>
            <p  style={{background:'tomato',borderRadius:'5px'}}><img src={img} style={{ width:'25%'}} alt=""/> {type} <FontAwesomeIcon icon={faUserFriends} /> {site}  {price}</p>
            
        </div>
    );
};

export default DestinationDetails;
import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData';
import HomeCard from './HomeCard/HomeCard';
import './Home.css'

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(FakeData);
    }, [])
    return (
        <div className="background">
            <div className="container">
                <div className=' row'  >

                        {
                            vehicles.map(vehicle => <HomeCard vehicle={vehicle} key={vehicle.id}></HomeCard>)
                        }
                    
                </div>

            </div>
         </div>
    );
};

export default Home;
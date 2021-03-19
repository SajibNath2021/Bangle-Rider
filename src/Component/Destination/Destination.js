import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Destination.css'
import FakeData2 from '../FakeData2/FakeData2.json'
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import GoogleMap from '../GoogleMap/GoogleMap';


const Destination = () => {
    const { VehicleId } = useParams();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    const [vehicleType, setVehicleType] = useState([]);
    useEffect(() => {
        setVehicleType(FakeData2)
    }, [])
    //  console.log(vehicleType[0].img);

    const [values, setValues] = useState('');
    const [fullValue, setFullValue] = useState();

    const hanleInput = (e) => {
        let value = e.target.value;
        console.log(value);
        setValues(value)

    }

    const handleSubmitB = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 px-4 py-3">
                    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                        <input name="from" onBlur={hanleInput} ref={register} placeholder='From' />
                        <input name="to" onBlur={hanleInput} ref={register({ required: true })} placeholder='To' />
                        {errors.exampleRequired && <span className='error'>This field is required</span>}

                        <input onClick={handleSubmitB} type="submit" />
                    </form>
                </div>
                <div className="col-md-2">
                    <p>{values}</p>
                    <p>{values}</p>
                    {
                        vehicleType.map(vehicleType => <DestinationDetails vehicleType={vehicleType} ></DestinationDetails>)
                    }
                </div>
                <div className="col-md-6">
                    <h1>Map</h1>

                    <GoogleMap ></GoogleMap>

                </div>
            </div>
        </div>

    );
};



export default Destination;
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Destination.css'
import FakeData2 from '../FakeData2/FakeData2.json'
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import GoogleMap from '../GoogleMap/GoogleMap';
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Destination = () => {
    const { VehicleId } = useParams();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    const [vehicleType, setVehicleType] = useState([]);
    useEffect(() => {
        setVehicleType(FakeData2)
    }, [])
    const find = vehicleType.find(element => element.type === VehicleId)
     console.log(find);

    const [FromValues, setFromValues] = useState('');
    const [ToValue, setToValue] = useState();
    const [showDetail, setShowDetail] = useState(false);
    const [toggle, setToggle] = useState(false);

    const hanleInput = (e) => {
        if (e.target.name === 'from') {
            setFromValues(e.target.value);
        }
        if (e.target.name === 'to') {
            setToValue(e.target.value);
        }

    }

    const handleSubmitB = (e) => {
        if (showDetail == false) {
            setShowDetail(true);
        }

        e.preventDefault();
    }

    // datepicker
    const [selectedDate, setSelectedData] = useState();
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 px-4 py-3 " style={{background:'tomato',height:"60Vh"}}>
                    < form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                        <h3>Search Your Destination</h3>
                        <input name="from" onBlur={hanleInput} ref={register} placeholder='From' />
                        <input name="to" onBlur={hanleInput} ref={register({ required: true })} placeholder='To' />
                        {errors.exampleRequired && <span className='error'>This field is required</span>}
                        <DataPicker
                            selected={selectedDate}
                            onChange={data => setSelectedData(data)}
                            dataFormat='dd/MM/yyyy'
                            placeholderText="DD/MM/YYYY"
                        />
                        <input onClick={handleSubmitB} type="submit" value="Search" />

                    </form>
                </div>
                <div className="col-md-3  py-3"  >
                    <div style={{background:'tomato',borderRadius:'5px',textAlign:'center',color:'white'}}>
                    {showDetail ? <p>{FromValues} <br />
                        {ToValue} </p> : ''
                    }</div>
                    {
                        showDetail ?  <DestinationDetails vehicleType={find} ></DestinationDetails> : ''
                    }
                </div>
                <div className="col-md-5">
                    <GoogleMap ></GoogleMap>
                </div>
            </div>
        </div>

    );
};



export default Destination;
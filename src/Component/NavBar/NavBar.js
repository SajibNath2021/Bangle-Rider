import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'
const NavBar = () => {
    const {VehicleId} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
              <Link className="navbar-brand" to= {`/`}>Bangle Riders</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavAltMarkup">
                <div className="navbar-nav  mr-auto mt-2 mt-lg-0">
                    <Link to={`/home`}><a className="nav-item nav-link active " href="#">Home </a></Link>
                    <Link to={`/destination/${VehicleId}`}><a className="nav-item nav-link active" href="#">Destination</a></Link>
                    <Link className="nav-item nav-link active " href="#">Contact</Link>
                    <Link className="nav-item nav-link active" href="#">{loggedInUser.displayName}</Link>
                   <Link to ={`/login`}> <a className="nav-item nav-link active " href="#">LogIn</a></Link>
                   <button onClick={()=>setLoggedInUser({})}>Sign out</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
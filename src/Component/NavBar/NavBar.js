import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const { VehicleId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <>


            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid nameMargin navbar-light bg-light">
                    <Link className="navbar-brand" to={`/`}>Bangle Riders</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse marginNav " id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <Link to={`/home`} className="nav-item nav-link active ">Home </Link>
                            <Link to={`/destination/${VehicleId}`} className="nav-item nav-link active " >Destination</Link>
                            <Link className="nav-item nav-link active " >Contact</Link>
                            <Link className="nav-item nav-link active" ><FontAwesomeIcon icon={faUser} /> {loggedInUser.name || loggedInUser.displayName || loggedInUser.email}</Link>
                            <Link  to={`/login`} className="nav-item nav-link active ">LogIn</Link>
                            <button onClick={() => setLoggedInUser({})}>Sign out</button>
                        </div>
                    </div>
                </div>
            </nav>





        </>
    );
};

export default NavBar;
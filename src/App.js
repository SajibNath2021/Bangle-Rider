import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './Component/Destination/Destination';
import LogIn from './Component/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';



export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = { [loggedInUser, setLoggedInUser] } >
    <p>email: {loggedInUser.email}</p>
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path= '/home'>
        <Home></Home>
        </Route>
        <Route exact path = '/'>
          <Home />
        </Route>
        <PrivateRoute path ='/destination/:VehicleId'>
          <Destination></Destination>
        </PrivateRoute>
        <Route path='/login'>
          <LogIn></LogIn>
        </Route>
        <Route path = '*'>
          <h1>404, error</h1>
        </Route>
      </Switch>
    </Router>
          
          
    </UserContext.Provider>
  );
}

export default App;

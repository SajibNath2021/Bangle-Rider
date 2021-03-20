import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from '../Config/Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const LogIn = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: '',
        photo: ''
    })


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleButton = () => {
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }


    const handleEmailChange = (e) => {
        console.log(e.target.value, e.target.name);
        let isFromValue = true;
        if (e.target.name === 'email') {
            isFromValue = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            let pass = /\d{1}/.test(e.target.value);
             isFromValue = pass;

        }
        // if(e.target.name === 'confirmPass'){
        //     let confirmPass = /\d{1}/.test(e.target.value);
        //       isFromValue = confirmPass;
        // }
        if (isFromValue) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
       
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    updateUserName(user.name);
                   
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                    // ..
                });

        }
        if (user.email && user.password && !newUser) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...res.user};
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                    // ..
                });
        }

        e.preventDefault();
    }


    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('name updated sucessfully');
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className = "loginPage">
            <div className='px-4 py-3'>
            <h2>Login form</h2>
            <br />
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New user SignIn</label>
            <br />
            <form onSubmit={handleSubmit} >
                {
                    newUser && <input type="text" className="form-control" name="name" onBlur={handleEmailChange} placeholder="name " required />
                }
                <br />
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input type="text" name="email"  className="form-control"  onBlur={handleEmailChange} placeholder="Email" required />
                <br />
                <label for="exampleDropdownFormEmail1">Password</label>
                <input type="password" name="password" className="form-control" onBlur={handleEmailChange} placeholder="Password" required />
                <br />
                {/* {
                    newUser && <input type="password" className="form-control" name="confirmPass" onBlur={handleEmailChange} placeholder="Confirm Password " required />
                } */}
                <br/>
                <input type="submit" value={newUser ? "sign up" : 'sign in'} />
               
            </form>
            <br />
            {
                user.success ? <p style={{ color: 'green' }}>user  {newUser ? 'crated' : 'LoggedIn'} successfully</p> : <p style={{ color: 'red' }}>{user.error}</p>
            }
            
            <button onClick={handleGoogleButton}>Login with Google</button>

      
      
      </div>
      
      </div>



      






    );
};

export default LogIn;
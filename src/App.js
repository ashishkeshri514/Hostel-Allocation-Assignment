import React, { useState, useEffect } from "react"
import "./App.css"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Header from "./components/Header"
import Gender from "./components/Gender"
import {Route,Switch} from 'react-router-dom'
import GirlsHostel from "./components/BoysHostel"
import ChooseHostelB from "./components/GirlsHostel"
import Room from "./components/Room"
import firebase from './firebase';

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
   
  ],
  callbacks: {
    signInSuccess: () => false
  }
}
const App = () => {
  
  const [isSignedIn, setisSignedIn] = useState(false);
  

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setisSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

    return (
      <div className="App">
        {isSignedIn ? (
          <div>
            <Header name={firebase.auth().currentUser.displayName}/>
            
          
            <Switch>
            <Route path="/" exact component={Gender} />
            <Route path="/hostel" exact component={GirlsHostel} />
            <Route path="/hostelB" exact component={ChooseHostelB} />
            <Route path="/room" exact component={Room} /> 
            </Switch>

          </div>
        ) : (
          
          <div> 
            <Header />
            <h1 className="h1center">Hostel Allocation</h1>
          <h6 className="h6center">Please sign-in:</h6>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </div>
        )}
      </div>
    );
  
}

export default App
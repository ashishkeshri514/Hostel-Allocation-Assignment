import React from 'react'
import girl from './girl.png'
import boy from './boy.png'
import {Link} from 'react-router-dom'


export default function Gender() {
   
    return (
        <div className="card-header" >
            <h1>Choose your Hostel</h1>
            <div className="card-container">
                <Link style={{textDecoration:"none",color:"white"}} to={"/hostel"} className="card-girl" >
                    <img src={girl} alt="girl" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3 style={{textDecoration:"none",color:"black"}}>Girls Hostel</h3>
                </Link>
                <Link style={{textDecoration:"none",color:"white"}} to={"/hostelB"} className="card-boy">
                    <img src={boy} alt="boy" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3 style={{textDecoration:"none",color:"black"}}>Boys Hostel</h3>
                </Link>
            </div>
        </div>
    )
}

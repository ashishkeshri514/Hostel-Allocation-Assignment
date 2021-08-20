import React  from 'react';
import {Link} from 'react-router-dom';
export default function BoysHostel() {
    let gender = "B";
    return (
        <div className="container-hostel">
            <div>
               <h2>Choose a Hostel</h2> 
            </div>
            <div className="hostel-grid">
            <button to={"/room"} className="hostel-button"><Link style={{textDecoration:"none",color:"white"}}to={"/room"}>{gender}1 </Link></button>
            <button to={"/room"} className="hostel-button"><Link style={{textDecoration:"none",color:"white"}}to={"/room"}>{gender}2 </Link></button>
            <button to={"/room"} className="hostel-button"><Link style={{textDecoration:"none",color:"white"}}to={"/room"}>{gender}3 </Link></button>
            <button to={"/room"} className="hostel-button"><Link style={{textDecoration:"none",color:"white"}}to={"/room"}>{gender}4 </Link></button>
            <button to={"/room"} className="hostel-button"><Link style={{textDecoration:"none",color:"white"}}to={"/room"}>{gender}5 </Link></button>
            <button to={"/room"} className="hostel-button"><Link style={{textDecoration:"none",color:"white"}}to={"/room"}>{gender}6 </Link></button>
            </div>
        </div>
    )
}

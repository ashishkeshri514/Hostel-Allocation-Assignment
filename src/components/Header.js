import React from 'react'
import newton from './newton.jpg'
import firebase from 'firebase'
import { Avatar } from "@material-ui/core";

export default function Header(props) {
    return (
        <>
        <div className="headbar">
            <img src={newton} alt="newton" width="50px" height="50px" className="headimg"></img>
            <div style={{marginLeft:10}}><h3>Newton School</h3></div>
            {props.name ?<div style={{marginLeft:750}}>
                {props.name}
                <button style={{marginLeft:25}}onClick={() => firebase.auth().signOut()}><Avatar/></button>
                </div>: null}
            
        </div>
        <hr></hr>
        </>
        
    )
}

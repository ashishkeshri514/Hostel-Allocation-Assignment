import React from "react";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const style1 = {
  
}
function RoomNo(props) {
  const [isSelected, setIsSelected] = useState(false);
  return(
     
      <button onClick={function () {
        setIsSelected(!isSelected)
      }} style={isSelected?{cursor: 'pointer',
        width:'40px',
        height:'50px',
        background:'grey' ,
        color: 'black',
        fontWeight:'900',
        borderRadius: '20%',
        borderStyle: 'none',}:{cursor: 'pointer',
        width:'40px',
        height:'50px',
        background: 'rgb(86, 173, 86)',
        color: 'black',
        fontWeight:'900',
        borderRadius: '20%',
        borderStyle: 'none',}}>{props.children}</button>
  )
}

export default function Room() {
  const [isOpen, setIsOpen] = useState(false);
  function showModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container-room0" id="root2">
      <h3>Choose a Floor</h3>
      <select className="floor">
        <option>1st Floor</option>
        <option>2nd Floor</option>
        <option>3rd Floor</option>
        <option>4th Floor</option>
        <option>5th Floor</option>
      </select>
      <div className="container-room">
        <div className="room-grid">
         <RoomNo>1</RoomNo>
         <RoomNo>2</RoomNo>
         <RoomNo>3</RoomNo>
         <RoomNo>4</RoomNo>
         <RoomNo>10</RoomNo>
        <button className="room-button hide"></button>
        <button className="room-button hide"></button>
         <RoomNo>5</RoomNo>
         <RoomNo>9</RoomNo>
         <RoomNo>8</RoomNo>
         <RoomNo>7</RoomNo>
         <RoomNo>6</RoomNo>
        </div>
      </div>
      <div>
        <button className="book-room-button" onClick={showModal}>
          Book Room
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={showModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      > 
       <div>
        <div className="container-modal">
          <button onClick={showModal} className="button-close">❌</button>
          <h1 style={{marginLeft:150}}>Success</h1>
          </div>
          <div style={{textAlign:"center"}}>
              Your room has been booked successfully.
          </div>
          <div style={{marginTop:10, marginLeft:10}} >
              Your room details are as follows:
          </div>
          <div style={{marginTop:20, marginLeft:10}}>
              Hostel No. {}
          </div>
          <div style={{marginTop:10, marginLeft:10}}>
              Room No. {}
          </div>
        </div>
      </Modal>
    </div>
  );
}

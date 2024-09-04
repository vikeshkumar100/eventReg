import React from 'react'
import './card.css'
const Card = (props) => {
    function handleclick(){
        var name =prompt("Enter your name : ",name);
        var regno=prompt("Enter your reg no. : ",regno);
        confirm("Confirm Registration?")
    }
  return (
    <>
        <button className="e-card" onClick={handleclick} draggable>
            <h1>{props.name}</h1>
            <h3>Date : {props.date}</h3>
            <h3>Time : {props.time}</h3>
            <h3>Venue : {props.location}</h3>
            <h2>Click to Register</h2>
        </button>
    </>
  )
}

export default Card
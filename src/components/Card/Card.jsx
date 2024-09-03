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
        <button className="e-card" onClick={handleclick}>
            <h1>{props.name}</h1>
            <h2>Click to Register</h2>
            <h3>{props.time}</h3>
            <h3>{props.location}</h3>
        </button>
    </>
  )
}

export default Card
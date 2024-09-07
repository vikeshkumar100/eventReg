import React from 'react';
import './card.css';
import { useAuth0 } from "@auth0/auth0-react";

const Card = ({ name, date, time, location, onClick, onDragStart }) => {
    const { isAuthenticated,user } = useAuth0();
    const handleClick = () => {
        if(isAuthenticated)
        {
            const userName = user.name;
            const regno = prompt("Enter your registration number:");
            
            if (userName && regno) {
                onClick(userName, regno);  // Pass userName and regno to the parent handler
            } else {
                alert("Registration failed. Please enter valid details.");
            }
        }else{
            alert("Login is required")};
        }            

    const handleDragStart = (e) => {
        // Store the ID or relevant data in the dataTransfer object
        e.dataTransfer.setData("text/plain", e.target.id);
        if (onDragStart) {
            onDragStart(e);
        }
    };

    return (
        <button 
            id={`card-${name}`}  // Ensure each card has a unique ID
            className="e-card" 
            onClick={handleClick}
            draggable
            onDragStart={handleDragStart}
        >
            <h1>{name}</h1>
            <h3>Date: {date}</h3>
            <h3>Time: {time}</h3>
            <h3>Venue: {location}</h3>
            <h2>Click to Register</h2>
        </button>
    );
};

export default Card;

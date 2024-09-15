import React, { useState, useEffect } from 'react';
import './events.css';
import Card from '../Card/Card';
import { fetchEvents, registerForEvent } from '../../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    const success = () => toast.success("Registered successfully!");
    const failed = () => toast.error("Registration failed!");
    useEffect(() => {
        const getEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        getEvents();
    }, []);

    const handleRegistration = async (eventId, userName, regno, eventDetails) => {
        const userData = {
            name: userName,
            regno,
            eventName: eventDetails.name, // Use correct property names
            eventDate: eventDetails.date,
            eventVenue: eventDetails.location
        };

        try {
            await registerForEvent(userData);
            success();
        } catch (error) {
            failed();
            console.error("Error registering for event:", error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="e-title">
                    <h1>Here you can register for events</h1>
                </div>
                <div className="cards">
                    {events.map((event) => (
                        <Card
                            key={event.id}
                            name={event.name} 
                            date={event.date}
                            time={event.time}
                            location={event.location}
                            onClick={(userName, regno) => handleRegistration(event.id, userName, regno, event)}
                        />
                    ))}
                </div>
            </div>
            <ToastContainer position="top-center"/>
        </>
    );
};

export default Events;

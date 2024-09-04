import React, { useState, useEffect } from 'react';
import './events.css';
import Card from '../Card/Card';
import { fetchEvents, registerForEvent } from '../../firebaseConfig';

const Events = () => {
    const [events, setEvents] = useState([]);

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
            alert("Registered successfully");
        } catch (error) {
            alert("Registration failed");
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
                            name={event.name} // Use correct property names
                            date={event.date}
                            time={event.time}
                            location={event.location}
                            onClick={(userName, regno) => handleRegistration(event.id, userName, regno, event)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Events;

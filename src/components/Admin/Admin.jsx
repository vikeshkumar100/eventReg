import React, { useState, useEffect } from 'react';
import './admin.css';
import { fetchRegisteredUsers, fetchEvents, addEvent, deleteEvent } from '../../firebaseConfig'; // Adjust import if needed
import Card from '../Card/Card';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated) {
      const pwd = prompt("Enter password:");
      if (pwd === "123") {
        setIsAuthenticated(true);  // Set authenticated state to true
      } else {
        alert("Wrong password");
        navigate('/');  // Redirect to home route if password is incorrect
      }
    }
  }, [isAuthenticated, navigate]);

  // Fetch registered users and events
  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchRegisteredUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching registered users:", error);
      }
    };

    const getEvents = async () => {
      try {
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    if (isAuthenticated) {
      getUsers();
      getEvents();
    }
  }, [isAuthenticated]);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("eventId", id);
  };

  const onDrop = async (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("eventId");
    try {
      await deleteEvent(id);  // Delete event from Firebase
      setEvents(events.filter(event => event.id !== id));  // Update local state
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleAddEvent = async () => {
    const name = prompt("Enter event name:");
    const date = prompt("Enter event date:");
    const time = prompt("Enter event time:");
    const location = prompt("Enter event venue:");

    if (name && date && time && location) {
      const newEvent = { name, date, time, location };
      try {
        const docRef = await addEvent(newEvent);
        setEvents([...events, { id: docRef.id, ...newEvent }]);
      } catch (error) {
        console.error("Error adding event:", error);
      }
    }
  };

  // If not authenticated, return null to prevent rendering
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <div className="panel">
        <div className="panel-heading">
          <h1>Admin panel</h1>
        </div>
        <div className="registered">
          <h2 className="panel-title">Registered users</h2>
          <div className="reg-table">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Name</th>
                  <th>Reg no</th>
                  <th>Event name</th>
                  <th>Event date</th>
                  <th>Event venue</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.regno}</td>
                    <td>{user.eventName}</td>
                    <td>{user.eventDate}</td>
                    <td>{user.eventVenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="events">
          <div className="panel-event-head">
            <h2 className="panel-title">Events</h2>
            <div>
              <h3 className="panel-title">Add event</h3>
              <button className="add-btn" onClick={handleAddEvent}>+</button>
            </div>
          </div>
          <div className="panel-event-body">
            <div className="event-main">
              {events.map((event, index) => (
                <Card
                  key={event.id}
                  index={index}
                  name={event.name}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  onDragStart={(e) => onDragStart(e, event.id)}
                />
              ))}
            </div>
            <div
              className="event-delete"
              onDrop={onDrop}
              onDragOver={onDragOver}
            >
              Drop events here to delete
              <h2>Deletion</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

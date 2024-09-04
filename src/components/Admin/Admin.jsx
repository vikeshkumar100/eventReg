import React, { useState, useEffect } from 'react';
import './admin.css'
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      const pwd = prompt("Enter password : ");
      if (pwd === "123") {
        setIsAuthenticated(true);  // Set authenticated state to true
      } else {
        alert("Wrong password");
        navigate('/');  // Redirect to home route if password is incorrect
      }
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, return null to prevent rendering
  if (!isAuthenticated) {
    return null;
  }

  //handle add button
  function handleClick(){
    const title=prompt("Enter enter name : ");
    const date=prompt("Enter date : ");
    const time=prompt("Enter time : ");
    const venue=prompt("Enter venue : ");
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
                  <tr>
                    <th>SNo.</th>
                    <th>Name</th>
                    <th>Reg no</th>
                    <th>Event name</th>
                    <th>Event date</th>
                    <th>Event venue</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Vikesh</td>
                    <td>22BCA0200</td>
                    <td>Gravitas</td>
                    <td>16-10-2024</td>
                    <td>Sjt</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Vikesh</td>
                    <td>22BCA0200</td>
                    <td>Gravitas</td>
                    <td>16-10-2024</td>
                    <td>Sjt</td>
                  </tr>            
                </table>
              </div>
          </div>
          <div className="events">
              <div className="panel-event-head">
                <h2 className="panel-title">Events</h2>
                <div>
                  <h3  className="panel-title">Add event</h3>
                  <button className="add-btn" onClick={handleClick}>+</button>
                </div>
              </div>
              <div className="panel-event-body">
                <div className="event-main">
                <Card name="Gravitas" date="16-09-2024" time="12:00 PM" location="Near main gate"/>
                <Card name="Gravitas" date="16-09-2024" time="12:00 PM" location="Near main gate"/>
                <Card name="Gravitas" date="16-09-2024" time="12:00 PM" location="Near main gate"/>
                </div>
                <div className="event-delete">
                  Drop events here to delete
                  <h2>Delete?</h2>
                </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Admin;

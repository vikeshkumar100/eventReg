import React from 'react'
import './events.css'
import Card from '../Card/Card'
const User = () => {
  return (
    <>
      <div className="container">
        <div className="e-title">
          <h1>Here you can register for events</h1>
        </div>
        <div className="cards">
          <Card name="Gravitas" time="12:00 PM" location="Near main gate"/>
          <Card name="Gravitas" time="12:00 PM" location="Near main gate"/>
          <Card name="Gravitas" time="12:00 PM" location="Near main gate"/>
          <Card name="Gravitas" time="12:00 PM" location="Near main gate"/>
          <Card name="Gravitas" time="12:00 PM" location="Near main gate"/>
          <Card name="Gravitas" time="12:00 PM" location="Near main gate"/>
          <Card name="Gravitas" time="12:00 PM" location="Near main gate"/>
        </div>
      </div>
    </>
  )
}

export default User
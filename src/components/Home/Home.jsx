import React from 'react'
import './home.css'
import image from '../../assets/home.png'
import Landing from '../Landing/Landing'
const Home = () => {
  return (
    <>
      <div className="box">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <h1>Here you can</h1>
          <h1>register and manage</h1>
          <h1>the events</h1>
        </div>
      </div>
      <Landing/>
    </>
  )
}

export default Home
import React from 'react'
import './home.css'
import image from '../../assets/home.png'
import Landing from '../Landing/Landing'
const Home = () => {
  return (
    <>
      <div className="box">
        <div className="image">  {/* for mobile */}
          <img src={image} alt="" />
        </div>
        <div className="text">
          <h1>Here you can register and manage the events</h1>
        </div>
      </div>
      <Landing/>
    </>
  )
}

export default Home
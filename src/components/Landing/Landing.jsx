import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <>
        <div className='outer-box'>
            <div className='main'>
                <Link to='/events'>
                <div className='card'>
                    <div className="data">Register</div>
                </div>
                </Link>
                <Link to='/admin'>
                <div className='card'>
                    <div className="data">Event organizer</div>
                </div>
                </Link>
            </div>
            <h2 className='footer'>Thank You</h2>
        </div>
    </>
  )
}

export default Landing
import React from 'react'
import './header.css'
import img from '../../assets/registration-form.png'
import { NavLink} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { loginWithRedirect,logout, isAuthenticated,user,isLoading } = useAuth0();
  return (
      <>
        <div className="navbar">
              <div className="left-head">
                  <img src={img} alt="" />
                  <h1>Event registration</h1>
              </div>
              <div className="right-head">
                  <ul>
                    <li>
                      <NavLink to='/' className={({isActive})=>`${isActive ? "active" : "notActive"}`}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/events' className={({isActive})=>`${isActive ? "active" : "notActive"}`}>Events</NavLink>
                    </li>
                    <li>
                      <NavLink to='/contact' className={({isActive})=>`${isActive ? "active" : "notActive"}`}>Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink to='/admin' className={({isActive})=>`${isActive ? "active" : "notActive"}`}>Admin</NavLink>
                    </li>
                    <li>
                      {isAuthenticated?(<div>
                        <span className='uname'>{user.name}  </span>
                        <button className='authbtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                      </div>):
                      (<button className='authbtn' onClick={() => loginWithRedirect()}>Log In</button>)}
                    </li>
                  </ul>
              </div>
        </div>
      </>
  )
}

export default Header
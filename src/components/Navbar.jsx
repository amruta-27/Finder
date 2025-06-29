
// import { useEffect, useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


export default function Navbar() {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
        let userConfirmed = window.confirm("You want to logout?");
        if (userConfirmed) {
            localStorage.clear();
            // setUser(null);
            toast.error("You are logged out!!!");
            setTimeout(() => {
                window.location.href = "/";
            }, 500);
        }
    }

  return (
    <nav className="navbar">
      <div className="logo">StayFinder</div>
      <ul className="navlinks">
        <li><Link to="/" className="navlink">Home</Link></li>
        <li><Link to="/hotels" className="navlink">Explore</Link></li>
        <li><Link to="/about" className="navlink">About Us</Link></li>
        {user ? (
          // <li className='double-link'><Link to={`/profile/${user.id}`} className="profile-letter">{user.name.charAt(0)}</Link>
          //   <div className="logout">
          //     <button>Logout</button>
          //   </div>
          // </li>

          <li className="double-link">
            <div className="profile-wrapper">
              <Link to={`/profile/${user.id}`} className="profile-letter">
                {user.name.charAt(0).toUpperCase()}
              </Link>
              <div className="logout">
                <h4>Logout here</h4>
                <button className='log-btn' onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </li>

        ) : (
          <li><Link to="/login" className="navlink">Login</Link></li>
        )}
      </ul>
    </nav>
  )
}


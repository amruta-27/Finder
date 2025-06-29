import React from 'react'
import { useContext } from "react";
import './Home.css'; 
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';
import Main from '../components/Main';
import {AuthContext} from '../AuthContext'; 

export default function Home() {

  const {user} = useContext(AuthContext);

  return (
    <>
      <Navbar/>
      <div className='hero'>
        <div className='hero-content'>
          <h1 id='main-title'>Welcome to StayFinder</h1>
          <p id='main-dec'>Your perfect stay is just a click away!</p>
          <a href="/hotels" className='explore-button'>Explore Hotels &#187;</a>
        </div>
      </div>
      <Main/>
      <Foot/>
    </>
  )
}

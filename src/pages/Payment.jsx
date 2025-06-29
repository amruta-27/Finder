import './Payment.css';
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Foot from '../components/Foot';
import Navbar from '../components/Navbar';


import React from 'react'

export default function Payment() {
    const { user } = useContext(AuthContext);
    const firstName= user? user.name.split(" ")[0] : "Guest";
    const navigate = useNavigate();
    setTimeout(()=>{
        navigate("/");
    },3000);

  return (
    <div>
        <Navbar />
        <div className="pay-container">
            <h2 className="pay-title">Payment Page</h2>
            <div className="pay-sub">
                <p className="pay-text-main"><b>Thank you for booking with us, {firstName}!!!</b></p>
                <p className="pay-text">You will receive a confirmation email shortly.</p>
                <p className="pay-text">If you have any questions, please contact our support team.</p>
            </div>
        </div>
        <Foot />
    </div>
  )
}

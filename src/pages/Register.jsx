import { useState } from "react"
import './Register.css';
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import { Link } from "react-router-dom";

export default function Register() {

  const [formData, setFormData]=useState({
    firstName:"",
    middleName:"",
    lastName:"",
    gender:"",
    birthData:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    });
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }




    const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: formData.firstName + " " + formData.middleName + " " + formData.lastName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      gender: formData.gender,
      birthDate: formData.birthData
    })
  });

  const data = await response.json();
  console.log(data);
    



    setFormData({
      firstName:"",
      middleName:"",
      lastName:"",
      gender:"",
      birthData:"",
      email:"",
      phone:"",
      password:"",
      confirmPassword:""
    });
  }

  return (
    <div className="reg-page">
      <Navbar />
      <div className="register">
        <h3 className="login-title">
          Welcome to StayFinder
        </h3>
        <form action="" className="register-form">
          <div className="form-data">
            <input type="text" value={formData.firstName} name="firstName" required placeholder="First Name" onChange={handleChange} className="data"/>
            <input type="text" value={formData.middleName} name="middleName" required placeholder="Middle Name" onChange={handleChange} className="data"/>
            <input type="text" value={formData.lastName} name="lastName" required placeholder="Last Name" onChange={handleChange} className="data"/>
            <br />
            <select name="gender" value={formData.gender} required onChange={handleChange} className="data">
              <option value="" disabled>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="date" value={formData.birthdata} name="birthData" required placeholder="Birth Date" onChange={handleChange} className="data"/>
            <input type="tel" value={formData.phone} name="phone" required placeholder=" phone number" onChange={handleChange} className="data"/>
            <input type="email" value={formData.email} name="email" required placeholder="Email" onChange={handleChange} className="data"/>
            <input type="password" value={formData.password} name="password" required placeholder="Password" onChange={handleChange} className="data"/>
            <input type="password" value={formData.confirmPassword} name="confirmPassword"  required placeholder="Confirm password" onChange={handleChange} className="data"/>
          </div>
          <button type="submit" className="register-btn" onClick={handleSubmit}>Register</button>
          <p className="register-text">Already have an account? <Link to="/login" className="register-link">Log in</Link></p>
        </form>
      </div>
      <Foot />
    </div>
  )
}

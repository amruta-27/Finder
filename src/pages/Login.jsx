import { useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password,
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userName", response.data.userName);
            localStorage.setItem("userId", response.data.userId);
            
            toast.success("You are logged in Successfully!!!");

            setTimeout(()=>{
                window.location.href = "/"; 
            },1000);

        } catch (err) {
            toast.error("Invalid credentials or User not Found!!!");
            setTimeout(()=>{
                navigate("/login");
            })
        }
    };


    
  return (
    <div>
        <Navbar/>
        <div className="login-page">
            <div className="login">
                <h3 className="login-title">
                    Welcome to StayFinder
                </h3>
                <form action="" className="login-form">
                    <div className="form">
                        <input type="email" placeholder="Your Email" value={email} required onChange={(e)=>setEmail(e.target.value)}></input>
                        <br />
                        <input type="password" placeholder="Your Password" value={password} required onChange={(e)=>setPassword(e.target.value)}></input>
                        <br />
                        <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
                        <p className="login-text">Don't have an account? <Link to="/register" className="login-link">Register</Link></p>
                        <p className="login-text">Forgot your password? <Link to="#" className="login-link">Reset Password</Link></p>
                    </div>
                </form>
            </div>
        </div>
        <Foot/>
    </div>
  )
}

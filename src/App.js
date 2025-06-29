import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Register from './pages/Register';
import Login from './pages/Login';
import Hotel_page from './pages/Hotel_page';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import About from './pages/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/hotels/:id" element={<Hotel_page/>}/>
          <Route path="/hotels/:id/booking" element={<Booking/>}/>
          <Route path="/hotels/:id/payment" element={<Payment/>}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
      <ToastContainer position="top-center"/>
    </div>

  );
}

export default App;

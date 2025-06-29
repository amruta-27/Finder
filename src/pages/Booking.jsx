import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import './Booking.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



export default function Booking() {

  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [guests, setGuests] = useState(1);



  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/auth/hotels/${id}`)
      .then((res) => setHotel(res.data))
      .catch((err) => {
        console.error("Error fetching hotel:", err);
        toast.error("Could not load hotel details");
      });
  }, [id]);

  const today = new Date().toISOString().split("T")[0];


  useEffect(() => {
    if (!loading && !user) {
      toast.error("You need to login first");
      setTimeout(() => navigate("/login"), 1000);
    }
  }, [user, navigate, loading]);



  const handleBooking = async (e) => {
    e.preventDefault();

    if (inDate > outDate || inDate === outDate) {
      alert("CheckOut day should be after checkIn day");
      return;
    }
    const inD = new Date(inDate);
    const outD = new Date(outDate);

    const time = outD.getTime() - inD.getTime();
    const milisec = 1000 * 60 * 60 * 24;
    const days = Math.round(time / milisec);

    const bookingDetails = {
      hotelId: id,
      userId: user.id,
      checkin: inDate,
      checkout: outDate,
      guests: guests,
      bill: days * hotel.price_day
    };
    try {

      await axios.post(`http://localhost:5000/api/auth/hotels/${id}/booking`, {
        bookingDetails
      });
      toast.success("Booking successful!");
      setTimeout(() => {
        navigate(`/hotels/${id}/payment`);
      });

    } catch (err) {
      toast.error("Booking failed. Please try again.");
    }
  };

  if (!hotel) {
    return <div className="laoding">Loading...</div>
  }
  const firstName = user ? user.name.split(" ")[0] : "Guest";

  return (
    <>
      <Navbar />
      <div className="book-container">
        <h2 className="book-title">Hello {firstName}, Book Your Stay at {hotel.name}</h2>
        <div className="book-sub">
          <div className="book-details">
            <img src={hotel.imageUrl} alt={hotel.name} className="book-image" />
            <div className="book-info">
              <p><strong>Location:</strong> {hotel.city}</p>
              <p><strong>Price per night:</strong> ₹{hotel.price_day}</p>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleBooking}>
            <h3 id="book-det">Booking Details</h3>
            <br />
            <label htmlFor="inDate" className="book-label">Check-in Date:</label>
            <input type="date" id="inDate" value={inDate} className="book-input"
              onChange={(e) => setInDate(e.target.value)} min={today} required />
            <br />

            <label htmlFor="outDate" className="book-label">Check-out Date:</label>
            <input type="date" id="outDate" value={outDate} className="book-input"
              onChange={(e) => setOutDate(e.target.value)} min={inDate} required />
            <br />

            <label htmlFor="guests" className="book-label">Number of Guests:</label>
            <input type="number" id="guests" value={guests} min="1" max="10"
              onChange={(e) => setGuests(e.target.value)} required className="book-input" />
            <br />
            <button type="submit" className="book-btn">Confirm Booking</button>
          </form>
        </div>
      </div>
      <Foot />
    </>
  )
}

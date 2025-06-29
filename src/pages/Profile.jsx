import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import axios from "axios";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import "./Profile.css";


export default function Profile() {

    const { id } = useParams();
    const { user: authUser } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/auth/profile/${id}`)
            .then((res) => {
                setUser(res.data.profile);
                setBooking(res.data.bookings);
            }
            )
            .catch((err) => console.log("Error fetching user profile:", err));
    }, [id]);

    if (!authUser) {
        return <Navigate to="/" replace />;
    }

    if (!user) {
        return <div className="laoding">Loading...</div>
    }


    return (
        <>
            <Navbar />
            <div className="profile-page">
                <div className="profile-container">
                    <div className="profile-icon">
                        <span className="my-icon">Your Profile {user.name}</span>
                    </div>
                    <div className="profile-data">
                        <p className="profile-email">Email: {user.email}</p>
                        <p className="profile-phone">Phone: {user.phone}</p>
                    </div>
                    <hr />
                    <div className="user-booking">
                        {booking.length === 0 ? (
                            <p className="booking-details">You Have No Booking yet </p>
                        ) : (
                            <div className="booking-list">
                                {booking.map((b) => (
                                    <div key={b._id} className="booking-item">
                                        <h3 className="book-name book-data">Hotel {b.hotelId.name}</h3>
                                        <p className="book-date book-data">Check-in: {new Date(b.checkin).toLocaleDateString()}</p>
                                        <p className="book-date book-data">Check-out: {new Date(b.checkout).toLocaleDateString()}</p>
                                        <p className="book-guest book-data">for {b.guests} People</p>
                                        <p className="book-bill book-data">Total Bill: ₹{b.bill}.00</p>
                                        <button className="book-edit book-data">✎</button>
                                        <button className="book-dlt book-data">Cancel</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Foot />
        </>
    )
}
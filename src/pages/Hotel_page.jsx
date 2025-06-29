import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Hotel_page.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import { Link } from "react-router-dom";


export default function Hotel_page() {

    const {id}=useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/auth/hotels/${id}`)
            .then((res) => setHotel(res.data))
            .catch((err) => console.log("Error fetching hotel:", err));
    }, [id]);

    if(!hotel) {
        return <div className="loading">Loading...</div>;
    }

  return (
    <div>
        <Navbar />
        <div className="hotel-details-page">
            <div className="hotel-details-container">
                <h2 className="hotel-details-title">{hotel.name}</h2>
                <img src={hotel.imageUrl} alt={hotel.name} className="hotel-details-img" />
                <br />
                <div className="hotel-primary">
                    <p className="hotel-details-city">{hotel.city}</p>
                    <p className="hotel-details-price">₹{hotel.price_day} pp</p>
                    <p className="hotel-rating">  ★4.8</p>
                </div>
                <br />
                <p className="hotel-details-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, facilis? Fugiat ad exercitationem molestiae accusamus, 
                    eveniet aspernatur delectus odit sed nam modi repellat sint quae veritatis possimus officia, adipisci tempora.
                </p>

                <div className="hotel-services">
                    <p className="service-title">Our Services Included</p>
                    <ul>
                        {hotel.services.wifi && <li>📶 WiFi</li>}
                        {hotel.services.tv && <li>📺 TV</li>}
                        {hotel.services.parking && <li>🅿️ Parking</li>}
                        {hotel.services.breakfast && <li>☕ Breakfast</li>}
                    </ul>
                </div>
                <div className="hotel-other-links">
                    <Link to="#" className="hotel-owner-link">See owners information</Link>
                    <Link to="#" className="hotel-map-link">see us on Google Map</Link>
                </div>
                <br />
                <button className="booking-btn">
                    <Link to={`/hotels/${id}/booking`} className="booking-link" >Book</Link>
                </button>
                <br />
                <Link to={`/hotels`} className="hotel-back-link">Back to hotels</Link>
            </div>
        </div>
        <Foot />
    </div>
  )
}

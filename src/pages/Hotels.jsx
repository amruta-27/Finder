import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import "./Hotels.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";

export default function Hotels() {

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [location, setLocation] = useState("");
  


  useEffect(()=>{
    axios.get("http://localhost:5000/api/auth/hotels")
      .then((res)=> setHotels(res.data))
      .catch((err)=> console.log("Error fetching hotels:", err));
  }, []);


  const handleSearch = (e) => {
    if (location.trim() === "") {
      setFilteredHotels(hotels);
    } else {
      const filtered = hotels.filter((hotel) =>
        hotel.city.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredHotels(filtered);
    }
  }

  useEffect(()=>{
    handleSearch();
  }, [location, hotels]);

  if (hotels.length === 0)  {
    return <div className="loading">Loading...</div>;
  }


  return (
    <>
    <Navbar/>
    <div className="hotel-page">
      <div className="hotel-container">

        <div className="filter">
            <input
              type="text"
              placeholder="Search by city..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input"
            />
        </div>


        <h2 className="hotel-main-title">
          Find Your Perfect Stay
        </h2>

        <div className="hotel-list">
          {filteredHotels.length>0 ? (
            filteredHotels.map((hotel) => (
              <Link to={`/hotels/${hotel._id}`} key={hotel._id} className="hotel-link">
                <div className="hotel-card">
                  <img src={hotel.imageUrl} alt={`${hotel.name}`}  className="hotel-img"/>
                  <div className="hotel-info">
                    <p className="hotel-name">{hotel.name}</p>
                    <br />
                    <p className="hotel-city">{hotel.city}</p>
                    <p className="hotel-price">₹{hotel.price_day} pp</p>
                  </div>
                </div>
              </Link>
            ))
        ) : (
            <p className="no-results">No hotels found for "{location}"</p>
          )}
        </div>
      </div>
    </div>
    <Foot/>
    </>
  )
}

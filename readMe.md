# StayFinder — Hotel Booking Web Application

StayFinder is a full-stack hotel booking web application built by Amruta B Borade as part of a company assignment. It allows users to view hotel listings, see detailed pages, book their stay, and view bookings in a profile page — with secure login.


# Tech Stack

- Frontend: React.js, React Router DOM, Axios, Toastify
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Authentication: JWT (JSON Web Token)
- Styling: CSS

---

# Features

-  User Registration and Login
-  JWT Token-based Protected Routes
-  Hotel Listing and Detailed View
-  Search by location
-  Hotel Booking with Bill Calculation
-  User Profile with Booking History
-  Toast Notifications for feedback
-  delete hotel functionality is not working yet!!!

---

# Project Structure

StayFinder/
├── frontend/ → React client code
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
│
├── backend/ → Express server code
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
│
└── README.md

# how to Run the project locally

# -Backend
    -go to backend folder
    -npm install(it will install all the packages)
    -run using node server.js (or node server)
    
    the backend connects directly to mongoDB
    mongoose.connect("mongodb://127.0.0.1:27017/stayfinder")

    jwt_secret is directly set in authContro.js for simplicity


# -frontend
    -go to frontend folder
    -npm install(installs packages)
    -run using npm start

    you can register yourself or use
        mail : demouser@gmail.com
        pass : 12345


# Developer
Amruta B. Borade

Final Year Msc-cs Student | Full Stack Developer | MEAN stack Developer
📍 Pune, India
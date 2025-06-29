import React from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <h1 className="about-title">About StayFinder</h1>
                <div className="about-sub">
                    <p className="about-description">
                        Welcome to StayFinder – your trusted travel companion to find the perfect stay, anywhere.
                        We aim to make your accommodation search easier, faster, and more personalized. Whether you're planning a business trip,
                        a vacation, or a last-minute getaway, StayFinder connects you with verified hotels, homestays, hostels, and vacation rentals—all
                        in one place. We believe that every journey begins with a comfortable stay, and we’re here to help you find one that suits your needs and budget.
                        StayFinder is more than just a hotel booking site — it's a platform that values comfort, trust, and convenience.
                    </p>

                    <h1 className="about-subtitle">About StayFinder</h1>
                    <ul className="about-list">
                        <li>🧭 Browse hotels based on city and price filters</li>
                        <li>🔐 Secure login and authentication</li>
                        <li>📅 Book hotels with custom check-in and check-out dates</li>
                        <li>💳 Payment-ready booking flow</li>
                    </ul>

                    <h1 className="about-subtitle"> 💡 What Makes StayFinder Different?</h1>
                    <p className="about-desciption">
                        ✅ Verified Listings: Every property on StayFinder is verified for quality, hygiene, and service. <br />

                        💸 Affordable Stays: Filter by price to find stays that match your budget without compromising comfort. <br />

                        📍 Location-Based Search: Find stays near your desired location with ease. <br />

                        📞 24/7 Support: Get round-the-clock customer assistance whenever you need help. <br />

                        ✨ User Ratings & Reviews: Make informed choices based on genuine guest feedback. <br />

                        🔒 Secure Booking: Fast, safe, and reliable online transactions. <br />

                        StayFinder helps you search smart, stay better. <br />
                    </p>

                    <h1 className="about-subtitle"> 📜 Our Policies</h1>
                    <p className="desciption">
                        At StayFinder, we strive to offer transparency and trust. Here’s a quick overview of our key policies: <br />

                        🔄 Cancellation Policy
                        Free cancellation is available for most bookings within a specific time window. <br />

                        Some non-refundable offers may apply depending on the property and booking type. <br />

                        🧹 Cleanliness & Safety
                        We encourage all hosts and hotels to follow hygiene standards. <br />

                        Properties displaying the “SafeStay” badge have undergone extra cleaning protocols. <br />

                        👥 Guest Policy
                        Only guests with valid ID proof are allowed at check-in. <br />

                        Some properties may have restrictions on the number of guests per room. <br />

                        🔐 Privacy Policy
                        We collect minimal personal information and never share or sell your data to third parties. <br />

                        Your payment details are encrypted and handled securely. <br />


                    </p>

                    <h1 className="about-subtitle"> 📄 Terms & Conditions
                    </h1>

                    <p className="desciption">
                        By accessing or using StayFinder, you agree to comply with the following terms: <br />

                        Account Responsibility
                        You are responsible for maintaining the confidentiality of your account and password. <br />

                        Booking Accuracy
                        All booking details must be accurate. Any false information may lead to cancellation without refund. <br />

                        Payment & Refunds
                        Refunds will be processed as per the cancellation policy of the selected property. <br />

                        Third-Party Content
                        StayFinder may include listings or links provided by third-party hosts. We are not liable for their services but ensure listings are verified and authentic. <br />

                        Misuse of Platform
                        Any misuse including fake bookings, spam, or abuse of reviews will result in suspension of account. <br />

                        Modifications
                        StayFinder reserves the right to update terms and policies at any time. Users will be notified of significant changes. <br />
                    </p>


                </div>
            </div>
            <Foot />
        </>
    );
}

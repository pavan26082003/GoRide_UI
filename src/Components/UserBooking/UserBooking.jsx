import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './UserBooking.css';

const UserBookings = ({ token, userId }) => {
  const [bookings, setBookings] = useState([]);
  const [bookingError, setBookingError] = useState(null);
  const navigate = useNavigate();

  // Fetch bookings from backend
  useEffect(() => {
    const fetchBookings = async () => {
      if (!token || !userId) return;

      try {
        const response = await axios.get(
          `http://localhost:8000/api/user/${userId}/bookings/`,
          { headers: { Authorization: `Token ${token}` } }
        );
        setBookings(response.data);
      } catch (error) {
        setBookingError(error.response?.data?.detail || "Failed to fetch bookings");
      }
    };

    fetchBookings();
  }, [userId, token]);

  // Calculate total amount
  const totalAmount = bookings.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  // Redirect to payment page
  const goToPayment = (bookingId, amount) => {
    navigate("/payment", { state: { bookingId, amount } });
  };

  return (
    <div className="bookings-container">
      <h1>My Bookings</h1>

      {bookingError && <p className="error">{bookingError}</p>}

      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found.</p>
      ) : (
        <>
          {bookings.map((item) => (
            <div key={item.id} className="booking-card">
              <div className="bus-header">
                <h3>{item.bus.bus_name} <span>({item.bus.number})</span></h3>
                <p className="price">₹{item.price}</p>
              </div>

              <div className="route-info">
                <p className="route">
                  {item.bus.origin} <span>→</span> {item.bus.destination}
                </p>
                <p className="seat">Seat: {item.seat.seat_number}</p>
                <p className="booking-time">
                  Booked on: {new Date(item.booking_time).toLocaleString()}
                </p>
                
              </div>
            </div>
          ))}

          <div className="total-amount">
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          
          <button
                  className="pay-btn"
                  onClick={() => goToPayment()}
                >
                  Pay Now
                </button>
          
          </div>
        </>
      )}
    </div>
  );
};

export default UserBookings;

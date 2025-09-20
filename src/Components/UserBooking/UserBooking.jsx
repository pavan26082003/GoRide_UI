// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './UserBooking.css';

// const UserBookings = ({ token, userId }) => {
//   const [bookings, setBookings] = useState([]);
//   const [bookingError, setBookingError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch bookings from backend
//   useEffect(() => {
//     const fetchBookings = async () => {
//       if (!token || !userId) return;

//       try {
//         const response = await axios.get(
//           `https://go-ride-django.onrender.com/api/user/${userId}/bookings/`,
//           { headers: { Authorization: `Token ${token}` } }
//         );
//         setBookings(response.data);
//       } catch (error) {
//         setBookingError(error.response?.data?.detail || "Failed to fetch bookings");
//       }
//     };

//     fetchBookings();
//   }, [userId, token]);

//   // Calculate total amount
//   const totalAmount = bookings.reduce(
//     (acc, item) => acc + parseFloat(item.price),
//     0
//   );

//   // Redirect to payment page
//   const goToPayment = (bookingId, amount) => {
//     navigate("/payment", { state: { bookingId, amount } });
//   };

//   return (
//     <div className="bookings-container">
//       <h1>My Bookings</h1>

//       {bookingError && <p className="error">{bookingError}</p>}

//       {bookings.length === 0 ? (
//         <p className="no-bookings">No bookings found.</p>
//       ) : (
//         <>
//           {bookings.map((item) => (
//             <div key={item.id} className="booking-card">
//               <div className="bus-header">
//                 <h3>{item.bus.bus_name} <span>({item.bus.number})</span></h3>
//                 <p className="price">₹{item.price}</p>
//               </div>

//               <div className="route-info">
//                 <p className="route">
//                   {item.bus.origin} <span>→</span> {item.bus.destination}
//                 </p>
//                 <p className="seat">Seat: {item.seat.seat_number}</p>
//                 <p className="booking-time">
//                   Booked on: {new Date(item.booking_time).toLocaleString()}
//                 </p>
                
//               </div>
//             </div>
//           ))}

//           <div className="total-amount">
//             <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          
//           <button
//                   className="pay-btn"
//                   onClick={() => goToPayment()}
//                 >
//                   Pay Now
//                 </button>
          
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserBookings;




import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserBookings = ({ token, userId }) => {
  const [bookings, setBookings] = useState([]);
  const [bookingError, setBookingError] = useState(null);
  const navigate = useNavigate();

  // Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      if (!token || !userId) return;

      try {
        const response = await axios.get(
          `https://go-ride-django.onrender.com/api/user/${userId}/bookings/`,
          { headers: { Authorization: `Token ${token}` } }
        );
        setBookings(response.data);
      } catch (error) {
        setBookingError(error.response?.data?.detail || "Failed to fetch bookings");
      }
    };

    fetchBookings();
  }, [userId, token]);

  // Total amount
  const totalAmount = bookings.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  // Payment navigation
  const goToPayment = (bookingId, amount) => {
    navigate("/payment", { state: { bookingId, amount } });
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        My Bookings
      </h1>

      {bookingError && (
        <p className="text-red-500 text-center mb-4">{bookingError}</p>
      )}

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No bookings found.
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {bookings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
              >
                {/* Bus Header */}
                <div className="flex justify-between items-center border-b pb-3 mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.bus.bus_name}{" "}
                    <span className="text-gray-500 text-sm">
                      ({item.bus.number})
                    </span>
                  </h3>
                  <p className="text-lg font-bold text-indigo-600">
                    ₹{item.price}
                  </p>
                </div>

                {/* Route Info */}
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Route:</span>{" "}
                    {item.bus.origin} <span className="text-indigo-500">→</span>{" "}
                    {item.bus.destination}
                  </p>
                  <p>
                    <span className="font-medium">Seat:</span>{" "}
                    {item.seat.seat_number}
                  </p>
                  <p className="text-sm text-gray-500">
                    Booked on:{" "}
                    {new Date(item.booking_time).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total & Pay Button */}
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Total Amount:{" "}
              <span className="text-indigo-600 font-bold">
                ₹{totalAmount.toFixed(2)}
              </span>
            </h3>
            <button
              onClick={() => goToPayment()}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-xl hover:scale-105 transition"
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


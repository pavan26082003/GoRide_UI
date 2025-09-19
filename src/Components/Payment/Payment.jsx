// // PaymentPage.jsx
// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const Payment = ({ token }) => {
//   const location = useLocation();
//   const { bookingId, amount } = location.state; // passed from previous page

//   useEffect(() => {
//     const makePayment = async () => {
//       try {
//         const res = await axios.post(
//           "http://localhost:8000/api/create-payment-order/",
//           { booking_id: bookingId, amount: amount },
//           { headers: { Authorization: `Token ${token}` } }
//         );

//         const { id: order_id } = res.data;

//         const options = {
//           key: "YOUR_RAZORPAY_KEY_ID",
//           amount: amount * 100,
//           currency: "INR",
//           name: "Bus Booking App",
//           description: "Ticket Payment",
//           order_id: order_id,
//           handler: function (response) {
//             alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
//             // Redirect to success page or call backend to mark booking as paid
//           },
//           prefill: {
//             name: "User Name",
//             email: "user@example.com",
//             contact: "9999999999",
//           },
//           theme: { color: "#28a745" },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (err) {
//         alert("Payment failed. Try again.");
//       }
//     };

//     makePayment();
//   }, [bookingId, amount, token]);

//   return <div>Redirecting to Payment...</div>;
// };

// export default Payment;

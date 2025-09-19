// import axios from "axios";
// import { useState, useEffect } from "react";

// function PaymentPage({ orderId }) {
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     axios.get(`/api/order/${orderId}/payment/`)
//       .then(res => setOrder(res.data))
//       .catch(err => console.log(err));
//   }, [orderId]);

//   const handlePayment = () => {
//     axios.post(`/api/order/${orderId}/confirm-payment/`)
//       .then(res => alert(res.data.message))
//       .catch(err => console.log(err));
//   };

//   if (!order) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Order ID: {order.order_id}</h2>
//       <p>Amount: {order.amount}</p>
//       <p>Payment Method: {order.payment_method}</p>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// }

// export default PaymentPage;



import React, { useState } from "react";

const Payment = ({ bookingDetails }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentStep, setPaymentStep] = useState("details");

  const defaultBooking = {
    route: "New York → Boston",
    date: "2024-03-15",
    time: "08:00 AM",
    passengers: 2,
    price: 90,
    busOperator: "Express Travel",
  };

  const booking = bookingDetails || defaultBooking;
  const taxes = Math.round(booking.price * 0.08);
  const total = booking.price + taxes;

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentStep("confirmation");
    }, 2000);
  };

  if (paymentStep === "confirmation") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-green-600 text-4xl">✔</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-gray-500 mb-6">
            Your payment was successful. Booking confirmation has been sent to
            your email.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="text-sm text-gray-500 mb-2">Booking Reference</div>
            <div className="text-lg font-mono font-bold text-indigo-600">
              GR-2024-001234
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full mb-3 hover:bg-indigo-700">
            Download E-Ticket
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md w-full hover:bg-gray-50">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Complete Your Booking
          </h1>
          <p className="text-gray-500">
            Review your details and make payment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Booking Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-medium text-gray-800">{booking.route}</p>
                  <p className="text-sm text-gray-500">{booking.busOperator}</p>
                </div>

                <div>
                  <p className="font-medium text-gray-800">{booking.date}</p>
                  <p className="text-sm text-gray-500">
                    Departure: {booking.time}
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    {booking.passengers} Passenger
                    {booking.passengers > 1 ? "s" : ""}
                  </p>
                  <p className="text-sm text-gray-500">Standard seats</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-500">Base fare</span>
                  <span className="text-gray-800">${booking.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Taxes & fees</span>
                  <span className="text-gray-800">${taxes}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-3 border-t border-gray-200">
                  <span className="text-gray-800">Total</span>
                  <span className="text-indigo-600">${total}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-indigo-50 rounded-lg text-indigo-600">
                <span className="text-sm font-medium">
                  🔒 100% Secure Payment
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-xl p-6">
              {paymentStep === "details" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Passenger Details
                  </h3>

                  <form className="space-y-6">
                    {Array.from({ length: booking.passengers }, (_, i) => (
                      <div
                        key={i}
                        className="space-y-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <h4 className="font-medium text-gray-800">
                          Passenger {i + 1}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor={`name-${i}`}
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              Full Name
                            </label>
                            <input
                              id={`name-${i}`}
                              placeholder="Enter full name"
                              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor={`age-${i}`}
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              Age
                            </label>
                            <input
                              id={`age-${i}`}
                              type="number"
                              placeholder="Age"
                              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-800">
                        Contact Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600 mb-1"
                          >
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-600 mb-1"
                          >
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            placeholder="+1 (555) 000-0000"
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setPaymentStep("payment")}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </>
              )}

              {paymentStep === "payment" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Secure Payment
                  </h3>

                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handlePayment();
                    }}
                  >
                    {/* Payment Method */}
                    <div>
                      <p className="text-base font-medium mb-3">
                        Payment Method
                      </p>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                          />
                          <span>Credit/Debit Card</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="payment"
                            value="paypal"
                            checked={paymentMethod === "paypal"}
                            onChange={() => setPaymentMethod("paypal")}
                          />
                          <span>PayPal</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="payment"
                            value="apple"
                            checked={paymentMethod === "apple"}
                            onChange={() => setPaymentMethod("apple")}
                          />
                          <span>Apple Pay</span>
                        </label>
                      </div>
                    </div>

                    {/* Card Details */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium text-gray-600 mb-1"
                          >
                            Card Number
                          </label>
                          <input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none font-mono"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="expiry"
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              Expiry Date
                            </label>
                            <input
                              id="expiry"
                              placeholder="MM/YY"
                              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="cvv"
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              CVV
                            </label>
                            <input
                              id="cvv"
                              placeholder="123"
                              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="cardName"
                            className="block text-sm font-medium text-gray-600 mb-1"
                          >
                            Cardholder Name
                          </label>
                          <input
                            id="cardName"
                            placeholder="Name on card"
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentStep("details")}
                        className="flex-1 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                      >
                        Pay ${total}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

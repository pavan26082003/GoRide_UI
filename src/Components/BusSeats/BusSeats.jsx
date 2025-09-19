// import axios from 'axios'
// import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import "./BusSeat.css"
// import { Link } from 'react-router-dom'
// const BusSeats = ({token}) => {
//     const [bus, setBus] = useState(null)
//     const [seats, setSeats] = useState([])

//     const { busId } = useParams()
//     const navigate = useNavigate()

//     console.log('Checking bus id number=', busId)

//     useEffect(()=>{
//         const fetchBusDetails = async()=>{
//             try {
//               const response = await axios(`http://localhost:8000/api/buses/${busId}`)
//                 console.log("Bus response:", response.data)

              
//                 setBus(response.data)
//                 setSeats(response.data.seats || [])
//             } catch (error) {
//                 console.log('Error in fetching details', error)
//             }
//         }
//         fetchBusDetails()
//     }, [busId])

//     const handleBook = async(seatId)=>{
//         if(!token){
//             alert("Please login for booking a seat")
//             navigate('/login')
//             return;
//         }
//         try {
//             const response = await axios.post("http://localhost:8000/api/booking/",
//                 {seat:seatId},
//                 {
//                     headers:{
//                         Authorization: `Token ${token}`
//                     }
//                 }
//             )
//             console.log(response.data.seat.seat_number,'you Booked')
//             alert("Booking Successful")

//             setSeats((prevSeats) => 
//                 prevSeats.map((seat) =>
//                   seat.id === seatId ? { ...seat, is_booked: true } : seat
//                 )
//               );
              
            
//         } catch (error) {
//             alert(error.response?.data?.error ||"Booking failed")
//         }
//     }

//   return (
//     <div className="bus-details-container">
//         <Link to="/my-bookings" className="mybookings">
//         <i className="fas fa-user-plus"></i>
//         My Bookings
//       </Link>
      
//   {bus && (
//     <div className="bus-header-card">
//       <div className="bus-info">
//         <div className="bus-name-number">
//           <h2>{bus.bus_name}</h2>
//           <span className="bus-number">{bus.number}</span>
//         </div>
        
//         <div className="route-timings">
//           <div className="timing-box">
//             <div className="time">{bus.start_time}</div>
//             <div className="place">{bus.origin}</div>
//           </div>
          
//           <div className="journey-details">
//             <div className="duration">2h 30m</div>
//             <div className="journey-line">
//               <div className="line"></div>
//               <div className="bus-icon">🚌</div>
//             </div>
//           </div>
          
//           <div className="timing-box">
//             <div className="time">{bus.reach_time}</div>
//             <div className="place">{bus.destination}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )}
  
//   <div className="seats-container">

  
      
//     <div className="bus-layout">
//       <div className="bus-driver">Driver</div>
      
//       <div className="seats-grid">
//         {seats.map((seat) => ( 
//           <div key={seat.id} className="seat-item">
//             <button 
//               className={`seat-button ${seat.is_booked ? 'booked' : 'available'}`}
//               onClick={() => handleBook(seat.id)}
//               disabled={seat.is_booked}
//             >
//               <span className="seat-number">{seat.seat_number}</span>
//               {seat.is_booked ? (
//                 <i className="fas fa-times"></i>
//               ) : (
//                 <i className="fas fa-check"></i>
//               )}
//             </button>
//           </div>
//         ))}
//       </div>
      
//       <div className="legends">
//         <div className="legend-item">
//           <div className="seat-demo available"></div>
//           <span>Available</span>
//         </div>
//         <div className="legend-item">
//           <div className="seat-demo booked"></div>
//           <span>Booked</span>
//         </div>
//         <div className="legend-item">
//           <div className="seat-demo selected"></div>
//           <span>Selected</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

// export default BusSeats




import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const BusSeats = ({ token }) => {
  const [bus, setBus] = useState(null);
  const [seats, setSeats] = useState([]);

  const { busId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios(
          `http://localhost:8000/api/buses/${busId}`
        );
        setBus(response.data);
        setSeats(response.data.seats || []);
      } catch (error) {
        console.log("Error in fetching details", error);
      }
    };
    fetchBusDetails();
  }, [busId]);

  const handleBook = async (seatId) => {
    if (!token) {
      alert("Please login for booking a seat");
      navigate("/login");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/booking/",
        { seat: seatId },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response)
      alert("Booking Successful");

      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === seatId ? { ...seat, is_booked: true } : seat
        )
      );
    } catch (error) {
      alert(error.response?.data?.error || "Booking failed");
    }
  };

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-indigo-600">Bus Details</h2>
        <Link
          to="/my-bookings"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          My Bookings
        </Link>
      </div>

      {bus && (
        <div className="bg-white shadow-lg rounded-xl p-6 mb-10 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {bus.bus_name}
            </h3>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">
              {bus.number}
            </span>
          </div>

          <div className="flex justify-between items-center text-gray-700">
            {/* Origin */}
            <div className="text-center">
              <p className="font-bold">{bus.start_time}</p>
              <p className="text-sm">{bus.origin}</p>
            </div>

            {/* Journey */}
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1">2h 30m</span>
              <div className="w-28 h-1 bg-gray-300 relative">
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  🚌
                </span>
              </div>
            </div>

            {/* Destination */}
            <div className="text-center">
              <p className="font-bold">{bus.reach_time}</p>
              <p className="text-sm">{bus.destination}</p>
            </div>
          </div>
        </div>
      )}

      {/* Seats Layout */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Select Your Seat
        </h3>

        <div className="grid grid-cols-4 gap-4 justify-items-center mb-8">
          {seats.map((seat) => (
            <button
              key={seat.id}
              className={`w-14 h-14 flex items-center justify-center text-sm font-bold rounded-lg shadow-md transition 
                ${
                  seat.is_booked
                    ? "bg-red-400 text-white cursor-not-allowed"
                    : "bg-green-400 text-white hover:bg-green-500"
                }`}
              onClick={() => handleBook(seat.id)}
              disabled={seat.is_booked}
            >
              {seat.seat_number}
            </button>
          ))}
        </div>

        {/* Legends */}
        <div className="flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-400 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-400 rounded"></div>
            <span>Booked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSeats;

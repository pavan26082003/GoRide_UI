// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import './BusList.css'


// const BusList = () => {
//     const [buses, setBuses] = useState([])

//     const navigate = useNavigate()

// useEffect(()=>{
//     const fetchBuses = async()=>{
//         try {
//             const response = await axios.get("http://localhost:8000/api/buses/")
//             setBuses(response.data)
//         } catch (error) {
//             console.log('error in fetching buses', error)
//         }
//     }
//     fetchBuses()
// }, [])

// const handleViewSeats=(id)=>{
//     navigate(`/bus/${id}`)
// }

//   return (
//   <div className="bus-list-container" id='buses'>
//   {buses.map((item) => {
//     return (
//       <div key={item.id} className="bus-card">
//         <div className="bus-header">
//           <div className="bus-name">{item.bus_name}</div>
//           <div className="bus-number">{item.number}</div>
//         </div>
        
//         <div className="route-info">
//           <div className="route-details">
//             <div className="origin">
//               <div className="time">{item.start_time}</div>
//               <div className="city">{item.origin}</div>
//             </div>
            
//             <div className="journey-line">
//               <div className="line"></div>
//               <div className="bus-icon">🚌</div>
//               <div className="duration">2h 30m</div>
//             </div>
            
//             <div className="destination">
//               <div className="time">{item.reach_time}</div>
//               <div className="city">{item.destination}</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="bus-footer">
//           <div className="amenities">
//             <span className="amenity">AC</span>
//             <span className="amenity">WiFi</span>
//             <span className="amenity">Charging</span>
//           </div>
//           <button 
//             className="view-seats-btn"
//             onClick={() => handleViewSeats(item.id)}
//           >
//             View Seats
//             <i className="fas fa-arrow-right"></i>
//           </button>
//         </div>
//       </div>
//     );
//   })}
// </div>
//   )
// }

// export default BusList



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/buses/");
        setBuses(response.data);
      } catch (error) {
        console.log("error in fetching buses", error);
      }
    };
    fetchBuses();
  }, []);

  const handleViewSeats = (id) => {
    navigate(`/bus/${id}`);
  };

  return (
    <div className="py-10 px-6 md:px-16 lg:px-24 bg-gray-200" id="buses">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Available Buses
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {buses.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-indigo-600 text-white px-5 py-3 rounded-t-2xl">
              <h3 className="text-lg font-semibold">{item.bus_name}</h3>
              <span className="text-sm bg-white text-indigo-600 px-3 py-1 rounded-full shadow-sm">
                {item.number}
              </span>
            </div>

            {/* Route Info */}
            <div className="px-5 py-6">
              <div className="flex justify-between items-center">
                {/* Origin */}
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">
                    {item.start_time}
                  </p>
                  <p className="text-gray-500">{item.origin}</p>
                </div>

                {/* Journey Line */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-1 bg-gray-300 relative">
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      🚌
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">2h 30m</p>
                </div>

                {/* Destination */}
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">
                    {item.reach_time}
                  </p>
                  <p className="text-gray-500">{item.destination}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t border-gray-200 px-5 py-4">
              <div className="flex gap-2 text-xs font-medium text-gray-600">
                <span className="px-2 py-1 bg-gray-100 rounded-lg">AC</span>
                <span className="px-2 py-1 bg-gray-100 rounded-lg">WiFi</span>
                <span className="px-2 py-1 bg-gray-100 rounded-lg">
                  Charging
                </span>
              </div>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm flex items-center gap-2"
                onClick={() => handleViewSeats(item.id)}
              >
                View Seats
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;

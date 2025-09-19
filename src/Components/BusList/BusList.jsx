import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './BusList.css'


const BusList = () => {
    const [buses, setBuses] = useState([])

    const navigate = useNavigate()

useEffect(()=>{
    const fetchBuses = async()=>{
        try {
            const response = await axios.get("http://localhost:8000/api/buses/")
            setBuses(response.data)
        } catch (error) {
            console.log('error in fetching buses', error)
        }
    }
    fetchBuses()
}, [])

const handleViewSeats=(id)=>{
    navigate(`/bus/${id}`)
}

  return (
  <div className="bus-list-container">
  {buses.map((item) => {
    return (
      <div key={item.id} className="bus-card">
        <div className="bus-header">
          <div className="bus-name">{item.bus_name}</div>
          <div className="bus-number">{item.number}</div>
        </div>
        
        <div className="route-info">
          <div className="route-details">
            <div className="origin">
              <div className="time">{item.start_time}</div>
              <div className="city">{item.origin}</div>
            </div>
            
            <div className="journey-line">
              <div className="line"></div>
              <div className="bus-icon">🚌</div>
              <div className="duration">2h 30m</div>
            </div>
            
            <div className="destination">
              <div className="time">{item.reach_time}</div>
              <div className="city">{item.destination}</div>
            </div>
          </div>
        </div>
        
        <div className="bus-footer">
          <div className="amenities">
            <span className="amenity">AC</span>
            <span className="amenity">WiFi</span>
            <span className="amenity">Charging</span>
          </div>
          <button 
            className="view-seats-btn"
            onClick={() => handleViewSeats(item.id)}
          >
            View Seats
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  })}
</div>
  )
}

export default BusList
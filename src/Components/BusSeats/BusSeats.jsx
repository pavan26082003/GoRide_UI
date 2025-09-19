import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./BusSeat.css"
import { Link } from 'react-router-dom'
const BusSeats = ({token}) => {
    const [bus, setBus] = useState(null)
    const [seats, setSeats] = useState([])

    const { busId } = useParams()
    const navigate = useNavigate()

    console.log('Checking bus id number=', busId)

    useEffect(()=>{
        const fetchBusDetails = async()=>{
            try {
              const response = await axios(`http://localhost:8000/api/buses/${busId}`)
                console.log("Bus response:", response.data)

              
                setBus(response.data)
                setSeats(response.data.seats || [])
            } catch (error) {
                console.log('Error in fetching details', error)
            }
        }
        fetchBusDetails()
    }, [busId])

    const handleBook = async(seatId)=>{
        if(!token){
            alert("Please login for booking a seat")
            navigate('/login')
            return;
        }
        try {
            const response = await axios.post("http://localhost:8000/api/booking/",
                {seat:seatId},
                {
                    headers:{
                        Authorization: `Token ${token}`
                    }
                }
            )
            console.log(response.data.seat.seat_number,'you Booked')
            alert("Booking Successful")

            setSeats((prevSeats) => 
                prevSeats.map((seat) =>
                  seat.id === seatId ? { ...seat, is_booked: true } : seat
                )
              );
              
            
        } catch (error) {
            alert(error.response?.data?.error ||"Booking failed")
        }
    }

  return (
    <div className="bus-details-container">
        <Link to="/my-bookings" className="mybookings">
        <i className="fas fa-user-plus"></i>
        My Bookings
      </Link>
      
  {bus && (
    <div className="bus-header-card">
      <div className="bus-info">
        <div className="bus-name-number">
          <h2>{bus.bus_name}</h2>
          <span className="bus-number">{bus.number}</span>
        </div>
        
        <div className="route-timings">
          <div className="timing-box">
            <div className="time">{bus.start_time}</div>
            <div className="place">{bus.origin}</div>
          </div>
          
          <div className="journey-details">
            <div className="duration">2h 30m</div>
            <div className="journey-line">
              <div className="line"></div>
              <div className="bus-icon">🚌</div>
            </div>
          </div>
          
          <div className="timing-box">
            <div className="time">{bus.reach_time}</div>
            <div className="place">{bus.destination}</div>
          </div>
        </div>
      </div>
    </div>
  )}
  
  <div className="seats-container">

  
      
    <div className="bus-layout">
      <div className="bus-driver">Driver</div>
      
      <div className="seats-grid">
        {seats.map((seat) => ( 
          <div key={seat.id} className="seat-item">
            <button 
              className={`seat-button ${seat.is_booked ? 'booked' : 'available'}`}
              onClick={() => handleBook(seat.id)}
              disabled={seat.is_booked}
            >
              <span className="seat-number">{seat.seat_number}</span>
              {seat.is_booked ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-check"></i>
              )}
            </button>
          </div>
        ))}
      </div>
      
      <div className="legends">
        <div className="legend-item">
          <div className="seat-demo available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="seat-demo booked"></div>
          <span>Booked</span>
        </div>
        <div className="legend-item">
          <div className="seat-demo selected"></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default BusSeats
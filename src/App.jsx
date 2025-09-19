import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration_form from './Components/Registration/Registration_form'
import Home from './Home'
import LoginForm from './Components/LoginForm/Login'
// import BusList from './Components/BusList/BusList'
import BusSeats from './Components/BusSeats/BusSeats'
import UserBooking from './Components/UserBooking/UserBooking'

// import Payment from "../src/Components/Payment/Payment";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [userId, setUserId] = useState(localStorage.getItem('userId'))

 const handlelogin = (token, userId) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    setToken(token)   
    setUserId(userId) 
}

  return (
  <div style={{ width: "100%", minHeight: "100vh" }}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Registration_form />} />
      <Route path='/login' element={<LoginForm onLogin={handlelogin} />} />
      <Route path='/bus/:busId' element={<BusSeats token={token} />} />
      <Route path='/my-bookings' element={<UserBooking token={token} userId={userId} />} />
    
      {/* <Route path="/payment" element={<Payment token={token} />} /> */}
    
    </Routes>
  </div>
);

}

export default App

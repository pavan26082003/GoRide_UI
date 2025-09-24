import React, { useState } from 'react'
import './Reg.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Registration_form = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false) // ✅ Loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true) // start loading
    setMessage('')

    try {
      await axios.post('https://go-ride-django.onrender.com/api/register/', form)
      setMessage('✅ Registration Successful')
      navigate('/login')
    } catch (error) {
      setMessage(
        `❌ Registration Failed: ${
          error.response?.data?.username || error.message
        }`
      )
    } finally {
      setLoading(false) // stop loading
    }
  }

  return (
    <div id='main'>
      <form className='form' onSubmit={handleSubmit}>
        <p className='title'>Register</p>
        <p className='message'>Signup now and get full access to our app.</p>

        <label>
          <input
            className='input'
            value={form.username}
            type='text'
            name='username'
            placeholder=''
            onChange={handleChange}
            required
          />
          <span>Username</span>
        </label>

        <label>
          <input
            className='input'
            value={form.email}
            type='email'
            name='email'
            placeholder=''
            onChange={handleChange}
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className='input'
            value={form.password}
            type='password'
            name='password'
            placeholder=''
            onChange={handleChange}
            required
          />
          <span>Password</span>
        </label>

        <button type='submit' className='submit' disabled={loading}>
          {loading ? '⏳ Submitting...' : 'Submit'}
        </button>

       <p className='signin'>
  Already have an account? <Link to="/login">Login</Link>
</p>

        {message && <h5>{message}</h5>}
      </form>
    </div>
  )
}

export default Registration_form

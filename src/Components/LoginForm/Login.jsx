import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false) // ✅ Loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await axios.post(
        'https://go-ride-django.onrender.com/api/login/',
        form
      )
      setMessage('✅ Login Successful')

      if (onLogin) {
        onLogin(response.data.token, response.data.user_id)
      }

      navigate('/')
    } catch (error) {
      console.log(error.response?.data)
      setMessage(
        `❌ Login Failed: ${
          error.response?.data?.detail ||
          error.message ||
          'Please enter correct credentials'
        }`
      )
    } finally {
      setLoading(false) // ✅ Stop loading after request
    }
  }

  return (
    <div id='main'>
      <form className='form' onSubmit={handleSubmit}>
        <p className='title'>Login</p>
        <p className='message'>Login now and get full access to our app.</p>

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
          {loading ? '⏳ Logging in...' : 'Submit'}
        </button>

        <p className='signin'>
  No account? <Link to="/register">Register</Link>
</p>
        {message && <h5>{message}</h5>}
      </form>
    </div>
  )
}

export default LoginForm

import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const LoginForm = ({ onLogin }) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const navigate=useNavigate()

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('https://go-ride-django.onrender.com/api/login/', form)
      setMessage('✅ Login Successful')

      if (onLogin) {
        onLogin(response.data.token, response.data.user_id)
      }

      navigate('/')
    } catch (error) {
      console.log(error.response?.data)
      setMessage(
        `❌ Login Failed: ${
          error.response?.data?.detail || error.message || 'Please enter correct credentials'
        }`
      )
    }
  }

  return (
    <div id='main' bg-gradient-to-r from-indigo-500 to-purple-500>
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

        <button type='submit' className='submit'>
          Submit
        </button>

        <p className='signin'>
          No account? <a href='/register'>Register</a>
        </p>

        {message && <h5>{message}</h5>}
      </form>
    </div>
  )
}

export default LoginForm

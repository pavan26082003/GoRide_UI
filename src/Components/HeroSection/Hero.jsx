import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
        <header className="hero">
            
                    <h1>Welcome to GoRide</h1>
                  
        <div className="hero-content">
            
            <div className="hero-text">
                
            <h1>
                <span className="text-gradient">Travel Smarter</span>
                <span className="subtitle">With GoRide Bus Booking</span>
            </h1>
            <p>Discover the easiest way to book bus tickets across the country. Enjoy comfortable rides at unbeatable prices.</p>
            
            <div className="hero-stats">
                <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Routes</span>
                </div>
                <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Happy Travelers</span>
                </div>
                <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
                </div>
            </div>
            
            <div className="hero-buttons">
                <button className="btn-primary">
                <i className="fas fa-ticket-alt"></i>
                <a style={{textDecoration:'none'}} href="#BookNow">Book Now</a>
                </button>
                <button className="btn-secondary">
                <i className="fas fa-video"></i>
                <a style={{textDecoration:'none'}} href="#Explore">Explore Buses</a>
                 </button>
            </div>
            </div>
            
            <div className="hero-visual">
            <div className="bus-image">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Modern bus" />
                <div className="floating-card card-1">
                <i className="fas fa-shield-alt"></i>
                <span>Safe Travel</span>
                </div>
                <div className="floating-card card-2">
                <i className="fas fa-wifi"></i>
                <span>Free WiFi</span>
                </div>
                <div className="floating-card card-3">
                <i className="fas fa-snowflake"></i>
                <span>AC Coaches</span>
                </div>
            </div>
            </div>
        </div>
        
        </header>
    </div>
  )
}

export default Hero



import React from "react";
import "./Home.css";
import BusList from "./Components/BusList/BusList";
import { Link } from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import Hero from "./Components/HeroSection/Hero";
import Footer from "./Components/Footer/Footer";
const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
  <div className="nav-container">
    <div className="nav-logo">
      <i className="fas fa-bus"></i>
      <span>GoRide</span>
    </div>
    <div className="nav-links">
      <Link to="/login" className="nav-link login-link">
        <i className="fas fa-user"></i>
        Login
      </Link>
      <Link to="/register" className="nav-link register-link">
        <i className="fas fa-user-plus"></i>
        Register
      </Link>
      
    </div>
  </div>
</nav>

      
      {/* Hero Section */}
      <Hero/>
      <section>

        <Slider/>
      </section>

      {/* Bus List Section */}

      <section className="buslist-section">
        <h2 id="BookNow">Available Buses</h2>
        <BusList />
      </section>

    <Footer/>

      

     
      
    </div>
  );
};

export default Home;

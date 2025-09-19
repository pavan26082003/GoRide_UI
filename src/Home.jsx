import React from "react";
import "./Home.css";
import BusList from "./Components/BusList/BusList";
import { Link } from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Offers from "./Components/Offers/Offers";
import HeroSection from "./Components/HeroSection/HeroSection";
import Header from "./Components/Navbar/Navbar";
import Help from "./Components/Help/Help";
const Home = () => {
  return (
    <div className="home-container">


    <Header/>
      
      <HeroSection/>
      

      <Offers/>
      <WhyChoose/>
        <BusList />

     
    <Footer/>


      

     
      
    </div>
  );
};

export default Home;

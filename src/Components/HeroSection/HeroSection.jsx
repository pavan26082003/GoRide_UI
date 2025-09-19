// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Travel Comfortably Across the Country",
//       subtitle: "Book your perfect bus journey with GoRide",
//       image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//     },
//     {
//       title: "Safe & Reliable Transportation",
//       subtitle: "Your trusted partner for intercity travel",
//       image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//     },
//     {
//       title: "Affordable Prices, Premium Service",
//       subtitle: "Quality travel that doesn't break the bank",
//       image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       {/* Background Slides */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-black/40" />
//           </div>
//         ))}
//       </div>

//       {/* Slide Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//       >
//         <ChevronLeft className="w-6 h-6 text-white" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//       >
//         <ChevronRight className="w-6 h-6 text-white" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentSlide ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <div className="container mx-auto px-4 text-center text-white">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
//             {slides[currentSlide].title}
//           </h1>
//           <p className="text-xl md:text-2xl mb-12 text-white/90 animate-fade-in-up">
//             {slides[currentSlide].subtitle}
//           </p>

//           {/* Search Form */}
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg animate-fade-in-up">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="From"
//                   className="pl-10 h-12 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="To"
//                   className="pl-10 h-12 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div className="relative">
//                 <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="date"
//                   className="pl-10 h-12 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div className="relative">
//                 <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="number"
//                   placeholder="Passengers"
//                   className="pl-10 h-12 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//             </div>
//             <button className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition">
//               Search Buses
//             </button>
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "",
  });

  const slides = [
    {
      title: "Travel Comfortably Across the Country",
      subtitle: "Book your perfect bus journey with GoRide",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Safe & Reliable Transportation",
      subtitle: "Your trusted partner for intercity travel",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Affordable Prices, Premium Service",
      subtitle: "Quality travel that doesn't break the bank",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Searching with data:", formData);

    // Example: call backend
    // fetch("/api/search", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 animate-fade-in-up">
            {slides[currentSlide].subtitle}
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg animate-fade-in-up text-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* From */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 w-5 h-5" />
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  placeholder="From"
                  className="pl-10 h-12 w-full rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* To */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 w-5 h-5" />
                <input
                  type="text"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  placeholder="To"
                  className="pl-10 h-12 w-full rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Date */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 w-5 h-5" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="pl-10 h-12 w-full rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Passengers */}
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 w-5 h-5" />
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  placeholder="Passengers"
                  className="pl-10 h-12 w-full rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Search Buses
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

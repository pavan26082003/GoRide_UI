import React, { useState, useEffect } from "react";
import axios from "axios";

const MyBuses = () => {
  const [buses, setBuses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    bus_name: "",
    number: "",
    origin: "",
    destination: "",
    start_time: "",
    reach_time: "",
    features: "",
  });

  const BASE_URL = import.meta.env.VITE_API_URL;

  // Fetch buses from backend
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/buses/`);
        setBuses(response.data);
      } catch (error) {
        console.error("Error fetching buses:", error);
      }
    };
    fetchBuses();
  }, [BASE_URL]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/buses/`, formData);
      setBuses([...buses, response.data]);
      setShowForm(false);
      setFormData({
        bus_name: "",
        number: "",
        origin: "",
        destination: "",
        start_time: "",
        reach_time: "",
        features: "",
      });
    } catch (error) {
      console.error("Error adding bus:", error);
    }
  };

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">My Buses</h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        {showForm ? "Close Form" : "Add Bus"}
      </button>

      {/* Add Bus Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="bus_name"
              value={formData.bus_name}
              onChange={handleChange}
              placeholder="Bus Name"
              className="border px-3 py-2 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Bus Number"
              className="border px-3 py-2 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="Origin"
              className="border px-3 py-2 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Destination"
              className="border px-3 py-2 rounded-md w-full"
              required
            />
            <input
              type="time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
              required
            />
            <input
              type="time"
              name="reach_time"
              value={formData.reach_time}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleChange}
              placeholder="Features (AC, WiFi, etc.)"
              className="border px-3 py-2 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      )}

      {/* Display buses */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-indigo-600">{bus.bus_name}</h3>
              <span className="text-sm bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">{bus.number}</span>
            </div>
            <p className="text-gray-600 font-medium">
              {bus.origin} → {bus.destination}
            </p>
            <p className="text-gray-500 text-sm">
              Time: {bus.start_time} - {bus.reach_time}
            </p>
            {bus.features && (
              <p className="text-gray-400 text-sm mt-2">
                Features: {bus.features}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBuses;

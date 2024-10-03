import React, { useState, useRef, forwardRef } from "react";
import axios from "axios";

const Booking = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState(1);
  const [timing, setTiming] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      name,
      email,
      person,
      timing,
      date,
    };

    axios
      .post("http://localhost:5555/api/bookings", bookingData)

      .then((response) => {
        console.log(response.data);
        alert("Booking successful!");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div
      ref={ref}
      id="booking"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('../src/assets/booking/Background.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-xl w-full bg-gray-800 bg-opacity-70 p-8 rounded-lg text-center">
        <h2 className="text-amber-500 text-lg mb-2">Reservation</h2>
        <h1 className="text-white text-3xl mb-8">Book Your Table Now</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="number"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                placeholder="Persons"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                min="1"
                required
              />
              <input
                type="text"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                placeholder="Timing"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
                required
              />
              <input
                type="date"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full p-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
});

export default Booking;

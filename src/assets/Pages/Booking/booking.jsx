import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../AppContext";
import "./Booking.css";

const cars = {
  1: {
    name: "Coupe",
    basePrice: 500,
    pricePerKm: 30,
    hourlyCharge: 70,
    totalCost: 600,
  },
  2: {
    name: "Sedan",
    basePrice: 200,
    pricePerKm: 10,
    hourlyCharge: 50,
    totalCost: 260,
  },
  3: {
    name: "SUV",
    basePrice: 150,
    pricePerKm: 15,
    hourlyCharge: 50,
    totalCost: 215,
  },
  4: {
    name: "Hybrid",
    basePrice: 250,
    pricePerKm: 10,
    hourlyCharge: 50,
    totalCost: 310,
  },
  5: {
    name: "Electric",
    basePrice: 300,
    pricePerKm: 5,
    hourlyCharge: 50,
    totalCost: 355,
  },
  6: {
    name: "Microcar",
    basePrice: 100,
    pricePerKm: 5,
    hourlyCharge: 50,
    totalCost: 155,
  },
};

const haversineDistance = ([lat1, lon1], [lat2, lon2]) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Booking = () => {
  const { user } = useAppContext();
  const [selectedCar, setSelectedCar] = useState(cars[1]);
  const [dateTime, setDateTime] = useState("");
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);
  const [bookingId, setBookingId] = useState("");
  const navigate = useNavigate();

  const getCoordinates = async (place) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`
      );
      const { lat, lon } = response.data[0] || {};
      if (lat && lon) {
        return [parseFloat(lat), parseFloat(lon)];
      }
      throw new Error("Coordinates not found");
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  const handleBookNow = async () => {
    const currentTime = new Date();
    const bookingTime = new Date(dateTime);
  
    if (!fromPlace || !toPlace) {
      alert("Please enter both source and destination places.");
      return;
    }
  
    const fromCoords = await getCoordinates(fromPlace);
    const toCoords = await getCoordinates(toPlace);
  
    if (!fromCoords || !toCoords) {
      alert("Failed to get coordinates. Please check the place names.");
      return;
    }
  
    if (fromCoords[0] === toCoords[0] && fromCoords[1] === toCoords[1]) {
      alert("Source and destination cannot be the same.");
      return;
    }
  
    if (bookingTime < currentTime) {
      alert("Booking time cannot be in the past.");
      return;
    }
  
    const distanceInKm = haversineDistance(fromCoords, toCoords).toFixed(2);
    const calculatedPrice = (
      distanceInKm * selectedCar.pricePerKm +
      selectedCar.basePrice
    ).toFixed(2);
  
    const newBookingId = `BOOK-${Math.floor(Math.random() * 1000000)}`;
  
    setDistance(distanceInKm);
    setPrice(calculatedPrice);
    setBookingId(newBookingId);
  
    try {
      const response = await axios.post('https://alpha-server-9861.onrender.com/api/bookings', {
        userID: user?.id || 1, // Use the logged-in user's ID
        source: fromPlace,
        destination: toPlace,
        carType: selectedCar.name,
        distance: distanceInKm,
        amount: calculatedPrice,
        paymentStatus: 'Pending',
        bookingStatus: 'Confirmed',
        bookedForTime: dateTime // Include the booking date and time here
      });
  
      if (response.status === 201) {
        navigate("/payment", {
          state: {
            fromPlace,
            toPlace,
            dateTime,
            carType: selectedCar.name,
            distance: distanceInKm,
            price: calculatedPrice,
            bookingId: response.data.bookingid // Use the booking ID returned from the backend
          }
        });
      } else {
        throw new Error('Failed to create booking');
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Failed to create booking. Please try again.");
    }
  };

  return (
    <div className="max-h-screen booking-image p-6">
      <div className="container mx-auto">
        <div className="text-center font-extrabold text-slate-100 pb-8">
          <h1 className="text-5xl mb-4">Book Your Trip</h1>
        </div>
        <div className="booking-form shadow-md rounded-3xl p-6 mb-8 text-white">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xl font-semibold font-mono mb-2">
                Source Place
              </label>
              <input
                type="text"
                placeholder="Enter source place"
                value={fromPlace}
                onChange={(e) => setFromPlace(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg input-text-col"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold font-mono mb-2">
                Destination Place
              </label>
              <input
                type="text"
                placeholder="Enter destination place"
                value={toPlace}
                onChange={(e) => setToPlace(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg input-text-col"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold font-mono mb-2">
                Vehicle Category
              </label>
              <select
                value={Object.keys(cars).find(key => cars[key].name === selectedCar.name)}
                onChange={(e) => setSelectedCar(cars[e.target.value])}
                className="w-full p-4 border border-gray-300 rounded-lg input-text-col"
              >
                {Object.entries(cars).map(([key, car]) => (
                  <option key={key} value={key}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xl font-semibold font-mono mb-2">
                Date and Time
              </label>
              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg input-text-col"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleBookNow}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg"
              >
                Book Now
              </button>
            </div>
          </div>
          {distance && price && (
            <div className="text-center mt-6">
              <p className="text-lg">Distance: {distance} km</p>
              <p className="text-lg">Price: ₹{price}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;

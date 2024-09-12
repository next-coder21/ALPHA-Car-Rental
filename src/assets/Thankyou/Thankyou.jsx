import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import axios from 'axios';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { bookingId } = state || {}; // Only destructure bookingId

  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(60);

  // Utility function for formatting date and time
  const formatDateAndTime = (dateString) => {
    const date = new Date(dateString);
    const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
    const localDate = new Date(date.getTime() + istOffset);

    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    const hours = localDate.getHours();
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0');

    return {
      dateString: `${year}-${month}-${day}`,
      timeString: `${formattedHours}:${minutes} ${period}`,
    };
  };

  // Function to fetch booking details
  const fetchBookingDetails = async () => {
    if (bookingId) {
      try {
        const response = await axios.post('https://alpha-server-9861.onrender.com/api/bookings/final', { bookingId });
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingDetails();
  }, [bookingId]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      navigate('/home'); // Redirect to home after 10 seconds
    } else {
      const timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer on component unmount
    }
  }, [secondsLeft, navigate]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading booking details...</p>;
  }

  if (!bookingDetails) {
    return <p className="text-center text-gray-600">No booking details available. Please go back and book a trip.</p>;
  }

  const { source, destination, bookingtime, cartype, distance, amount } = bookingDetails;

  const { dateString, timeString } = formatDateAndTime(bookingtime);

  const averageSpeed = 40;
  const estimatedHours = distance / averageSpeed;
  const etaDate = new Date(new Date(bookingtime).getTime() + estimatedHours * 60 * 60 * 1000);
  const { dateString: etaDateString, timeString: etaTimeString } = formatDateAndTime(etaDate);

  const qrData = `
    Booking ID: ${bookingId}
    From: ${source}
    To: ${destination}
    Date: ${dateString}
    Time: ${timeString}
    Estimated Arrival: ${etaDateString} ${etaTimeString}
    Car Type: ${cartype}
    Distance: ${distance} km
    Amount: ₹${amount}
  `;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto border border-gray-300">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Thank You for Your Booking!</h1>
            <p className="text-xl font-semibold mb-6">Your booking has been successfully completed. Please find the details below:</p>
            <QRCode value={qrData} size={200} className="mx-auto mb-6" />
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div><strong>Booking ID:</strong></div>
                <div>{bookingId}</div>
                <div><strong>From:</strong></div>
                <div>{source}</div>
                <div><strong>To:</strong></div>
                <div>{destination}</div>
                <div><strong>Date:</strong></div>
                <div>{dateString}</div>
                <div><strong>Time:</strong></div>
                <div>{timeString}</div>
                <div><strong>Estimated Arrival:</strong></div>
                <div>{etaDateString} {etaTimeString}</div>
                <div><strong>Car Type:</strong></div>
                <div>{cartype}</div>
                <div><strong>Distance:</strong></div>
                <div>{distance} km</div>
                <div><strong>Amount:</strong></div>
                <div>₹{amount}</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
              <h2 className="text-xl font-semibold mb-2">Important Note</h2>
              <p className="text-lg">A driver will be allocated 2 hours before departure. Safe travels!</p>
            </div>
          </div>
          <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
            <p className="text-center">You will be redirected to the home page in {secondsLeft} seconds.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

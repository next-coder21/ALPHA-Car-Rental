import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    fromPlace,
    toPlace,
    dateTime,
    carType,
    distance,
    price,
    bookingId,
    username,
  } = state || {};

  const handlePrint = async () => {
    const content = document.getElementById('pdf-content');

    if (content) {
      try {
        const canvas = await html2canvas(content, {
          ignoreElements: (el) => el.tagName === 'BUTTON'
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save('booking-details.pdf');
      } catch (error) {
        console.error("Error generating PDF:", error);
        setErrorMessage("Failed to generate PDF. Please try again.");
      }
    } else {
      setErrorMessage("No content found to print.");
    }
  };

  const handlePay = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Simulate a successful payment process
      let paymentResponse = await processPayment();

      alert("Payment successful! Proceeding to update payment status...");

      const updateResponse = await updatePaymentStatus("Success");

      if (updateResponse.status === 200) {
        navigate("/thank-you", { state: { ...state, paymentStatus: "Success" } });
      } else {
        throw new Error("Failed to update payment status to Success");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
      setErrorMessage("Payment failed. Please try again.");
      
      try {
        await updatePaymentStatus("Pending");
      } catch (updateError) {
        console.error("Error during fallback payment status update to Pending:", updateError);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updatePaymentStatus = async (status) => {
    try {
      const response = await axios.put('https://alpha-server-9861.onrender.com/api/bookings/update-payment', {
        bookingId: bookingId,
        paymentStatus: status,
      });
      return response;
    } catch (error) {
      console.error(`Error updating payment status to ${status}:`, error);
      throw error;
    }
  };

  // Simulate a successful payment process
  const processPayment = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  if (!state) {
    return <p>No booking details available. Please go back and book a trip.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="text-center font-extrabold text-slate-800 pb-8">
          <h1 className="text-4xl mb-4">Payment Summary</h1>
        </div>
        <div id="pdf-content" className="bg-white shadow-lg rounded-xl p-8 mb-8 max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
            <div className="space-y-4">
              <p className="text-lg"><strong>Booking ID:</strong> {bookingId}</p>
              <p className="text-lg"><strong>From:</strong> {fromPlace}</p>
              <p className="text-lg"><strong>To:</strong> {toPlace}</p>
              <p className="text-lg"><strong>Date and Time:</strong> {dateTime}</p>
              <p className="text-lg"><strong>Car Type:</strong> {carType}</p>
              <p className="text-lg"><strong>Distance:</strong> {distance} km</p>
              <p className="text-lg"><strong>Price:</strong> ₹{price}</p>
              <div className="text-lg mt-4">
                <strong>Terms and Conditions:</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>All bookings are subject to availability.</li>
                  <li>Cancellation fees may apply based on the time of cancellation.</li>
                  <li>Prices are subject to change without notice.</li>
                  <li>Any damage to the vehicle will incur additional charges.</li>
                </ul>
              </div>
              <p className="text-lg mt-4"><strong>Thank you for booking with Alpha Cars!</strong></p>
              <p className="text-lg mt-4 text-center">Alpha</p>
            </div>
          </div>
          {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={handlePrint}
              className="w-full md:w-1/2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
              disabled={isLoading}
              aria-label="Download booking details as PDF"
            >
              Download PDF
            </button>
            <button
              onClick={handlePay}
              className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
              disabled={isLoading}
              aria-label="Proceed to payment"
            >
              {isLoading ? "Processing..." : "Pay"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

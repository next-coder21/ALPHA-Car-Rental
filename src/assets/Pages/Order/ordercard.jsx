import React from "react";
import QRCode from "qrcode.react"; // Import the QRCode component from qrcode.react

function OrderCard({ booking }) {
  // Generate a string containing the trip details for the QR code
  const qrCodeData = `Booking ID: ${booking.bookingid}\nFrom: ${booking.source}\nTo: ${booking.destination}`;

  const loadSpecificbooking = (id,user) => {
    // Logic to load specific booking details
    console.log('Loading booking with ID:', id,user);
  };

  // Convert bookedForTime to IST and format it
  console.log(booking.booked_for_time);
  
  const bookedForTimeUTC = new Date(booking.booked_for_time); // Assuming booking.bookedForTime is in UTC format
  const bookedForTimeIST = new Date(
    bookedForTimeUTC.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  const formattedBookedForTime = bookedForTimeIST.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Determine whether the booking is completed or ongoing
  const currentTime = new Date();
  const isBookingCompleted = bookedForTimeIST < currentTime;
  const bookingStatusImage = isBookingCompleted
    ? "/path/to/completed-image.png"
    : "/path/to/booked-image.png";
  const bookingStatusText = isBookingCompleted ? "Completed" : "Booked";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4" onClick={() => loadSpecificbooking(booking.bookingid,booking.userid)}>
      <div className="flex">
        <div className="w-1/3 p-4 flex justify-center items-center "  >
          {/* Display the QR code instead of an image */}
          <QRCode value={qrCodeData} size={100} level="H" />
        </div>
        <div className="w-2/3 p-4">
          <p className="mt-2 text-gray-600">
            <span className="font-bold">B.ID</span> #Book - {booking.bookingid}
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-bold">From:</span> {booking.source}
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-bold">To:</span> {booking.destination}
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-bold">Booked for Time:</span>{" "}
            {formattedBookedForTime}
          </p>
          <div className="mt-2 flex items-center">
            <img
              src={bookingStatusImage}
              alt={bookingStatusText}
              className="h-6 w-6 mr-2"
            />
            <span
              className={`font-bold ${
                isBookingCompleted ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {bookingStatusText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import OrderCard from './ordercard'; // Ensure this import path is correct
import { useAppContext } from '../../../AppContext';
import './ordercomp.css';

import Skeleton from 'react-loading-skeleton'; // Import Skeleton

const Order = () => {
  const { user } = useAppContext(); // Get the user from the context
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(user.id);

  

  useEffect(() => {
    if (user) { // Check if user is available before making API call
      const fetchOrders = async () => {
        try {
          // Update the API URL to /api/booked-details
          const response = await axios.get('https://alpha-server-9861.onrender.com/api/booked-details', {
            params: { userId: user.id }
            
          });
          setOrders(response.data);
        } catch (err) {
          console.error('Failed to fetch orders:', err);
          setError('Failed to fetch orders. Please try again later.');
        } finally {
          setLoading(false); // Set loading to false after API call is done
        }
      };

      fetchOrders();
    }
  }, [user]); // Only re-run the effect if user changes

  return (
    <div className="max-h-screen p-3">
      <h2 className="text-center text-2xl font-bold text-teal-700">
        Order Details
      </h2>
      <div className="bookings-details-container mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
                <div className="flex">
                  <div className="w-1/3">
                    <Skeleton height="100%" width="100%" />
                  </div>
                  <div className="w-2/3 p-4">
                    <Skeleton height={20} width="80%" />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={20} width="70%" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : orders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {orders.map(booking => (
              <OrderCard
  key={booking.id}
  booking={booking}
  // Pass a function reference
/>
            ))}
          </div>
        ) : (
          <p>
            No previous bookings. Your booking details will be displayed here
            after bookings.
          </p>
        )}
      </div>
    </div>
  );
};

export default Order;

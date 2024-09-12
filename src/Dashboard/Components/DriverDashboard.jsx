// src/components/DriverDashboard.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Line } from 'react-chartjs-2';
import { FaPlay } from 'react-icons/fa';
import './DriverDashboard.css';

const DriverDashboard = () => {
  const data = {
    labels: ['11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
    datasets: [
      {
        label: 'Weather',
        data: [14, 15, 16, 17, 16],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="driver-dashboard">
      <header className="dashboard-header">
        <input type="text" placeholder="Give a voice command" />
        <div className="user-info">
          <span>Hello, Jake</span>
          <span>22 May</span>
        </div>
      </header>
      <div className="dashboard-content">
        <div className="left-panel">
          <div className="location-live">
            <h2>Location Live</h2>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="top-songs">
            <h2>Top Songs</h2>
            <ul>
              <li>
                <span>Piqued Jacks - Like an Animal</span>
                <span>04:24</span>
              </li>
              <li>
                <span>MBatuque - I Wrote A Song</span>
                <span>03:21</span>
              </li>
              <li>
                <span>Brunette - Future Lover</span>
                <span>03:13</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="center-panel">
          <div className="weather">
            <h2>Weather</h2>
            <Line data={data} />
          </div>
          <div className="music-player">
            <h2>Now Playing</h2>
            <div className="player-controls">
              <FaPlay size={30} />
              <span>Batuque (Jeremy Sole & Atropolis)</span>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="car-details">
            <h2>Car Details</h2>
            <img src="car-image.jpg" alt="Car" />
            <p>Jaguar I-Pace</p>
            <p>2023 Release Jaguari Edition</p>
          </div>
          <div className="station">
            <h2>Station</h2>
            <p>See location</p>
            <p>Battery: 503 km left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;

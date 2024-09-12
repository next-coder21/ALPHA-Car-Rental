import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/Navbar/Navbar";
import Login from "./assets/Pages/Login";
import Landing from "./assets/Landing";
import Footer from "./assets/Pages/footer/footer";
import Cars from "./assets/Pages/CarsDetail/Cars";
import Order from "./assets/Pages/Order/Order";
import Signup from "./assets/Pages/Signup/Signup";
import { AppProvider, useAppContext } from './AppContext';
import Home from "./assets/Home/Home";
import Payment from "./assets/payment/Payment";
import ThankYou from "./assets/Thankyou/Thankyou";
import DriverRegistration from "./assets/Pages/DriverReg/DriverRegistration";
import DriverLogin from "./assets/Pages/DriverReg/DriverLogin";
import DriverDashboard from "./Dashboard/Components/DriverDashboard";
import TermsAndConditions from "./assets/Pages/Terms and Conditions/termsandconditions";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAppContext(); // Assuming isAuthenticated is part of AppContext

  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AppProvider>
      <BrowserRouter>
        {isAdmin ? null : <Navbar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Driver/Registration" element={<DriverRegistration />} />
          <Route path="/Driver/Login" element={<DriverLogin />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* <Route path="/Driver/Dashboard" element={<DriverDashboard />}/> */}
          <Route path="/Vehicles" element={<Cars />} />
          <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/thank-you" element={<ProtectedRoute><ThankYou /></ProtectedRoute>} />
        </Routes>
        {isAdmin ? null : <Footer setIsAdmin={setIsAdmin} />}
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

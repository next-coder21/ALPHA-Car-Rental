// Login.jsx
import React, { useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Alpha.png";
import { useAppContext } from "../../AppContext"; // Correct import path

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const { setUser, setIsAuthenticated } = useAppContext(); // Destructure context functions
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Convert the email to lowercase before sending it
      const lowerCaseEmail = email.toLowerCase();

      const response = await axios.post("https://alpha-server-9861.onrender.com/api/login", {
        email: lowerCaseEmail,
        password: password,
      });

      if (response.status === 200) {
        setOtpSent(true);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials.");
    }
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://alpha-server-9861.onrender.com/api/request-otp",
        { email }
      );
      if (response.status === 200) {
        setOtpSent(true);
      }
    } catch (err) {
      console.error("Failed to send OTP:", err);
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://alpha-server-9861.onrender.com/api/verify-otp",
        { email, otp:joinedOtp }
      );
      if (response.status === 200) {
        const { user } = response.data;
        setUser({ id:user.id, name:user.name, email:user.email, image:user.image }); 
        setIsAuthenticated(true); 
        navigate("/home");
        console.log(user.id);
         // Redirect after successful verification
      } else {
        setError("Unexpected response format. Please try again.");
      }
    } catch (err) {
      console.error("OTP verification failed:", err);
      setError("OTP verification failed. Please check your OTP.");
    }
  };
  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a digit is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      } else if (!value && index > 0) {
        // Move to previous input if the input is cleared
        inputRefs.current[index - 1].focus();
      }
    }
  };
  
  // Joining OTP digits into a single string when needed
  const joinedOtp = otp.join("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
  <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-xl">
  <img src={Logo} className="h-16 mx-auto" />
  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to <i>Alpha</i>
      </h2>
      
    {error && <p className="text-red-500 text-center mb-4 ">{error}</p>}
    {!otpSent ? (
      <form className="space-y-6" onSubmit={handleLogin}>
        
          
        <div className="pt-5">
          <label htmlFor="email-address" class="sr-only">Email address</label>
          <input id="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value.toLowerCase())}  name="email" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="password" class="sr-only">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    ) : (
      <form className="space-y-6" onSubmit={handleOtpVerification}>
      <div>
      <label
        htmlFor="otp"
        className="block text-base font-medium text-gray-700 mb-1"
      >
        Enter OTP
      </label>
      <div className="flex justify-between">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={otp[index] || ""}
            onChange={(e) => handleOtpChange(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-12 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        ))}
      </div>
    </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Verify OTP
        </button>
        <button
          type="button"
          onClick={handleRequestOtp}
          className="w-full py-3 px-4 mt-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Request OTP
        </button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Contact Support
            </a>
          </p>
        </div>
      </form>
    )}
  </div>
</div>

  );
}

export default Login;

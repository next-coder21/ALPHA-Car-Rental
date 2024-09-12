import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Widget } from '@uploadcare/react-widget';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    name: '',
    date_of_birth: '',
    image: '', // Changed to store the image URL instead of file object
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'email' ? value.toLowerCase() : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirm_password)
      newErrors.confirm_password = 'Passwords do not match';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of birth is required';
    if (!formData.image) newErrors.image = 'Profile image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (fileInfo) => {
    // fileInfo.cdnUrl contains the uploaded file URL
    setFormData({
      ...formData,
      image: fileInfo.cdnUrl, // Storing the image URL in the formData
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('https://alpha-server-9861.onrender.com/api/register', formData);
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setServerError('Failed to register. Please try again.');
      if (error.response && error.response.data) {
        setServerError(error.response.data.message || 'An error occurred.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Sign Up</h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.username && <p className="mt-1 text-red-600 text-sm">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.password && <p className="mt-1 text-red-600 text-sm">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
              <input
                id="confirm_password"
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.confirm_password && <p className="mt-1 text-red-600 text-sm">{errors.confirm_password}</p>}
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-600">Date of Birth</label>
              <input
                id="date_of_birth"
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.date_of_birth && <p className="mt-1 text-red-600 text-sm">{errors.date_of_birth}</p>}
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-600">Profile Image</label>
              <Widget
                publicKey="91098862d1741f1f11b3" // Replace with your Uploadcare public key
                onChange={handleImageUpload}
                clearable
              />
              {errors.image && <p className="mt-1 text-red-600 text-sm">{errors.image}</p>}
            </div>
          </div>

          {serverError && <p className="mt-1 text-red-600 text-sm">{serverError}</p>}

          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800 text-sm">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

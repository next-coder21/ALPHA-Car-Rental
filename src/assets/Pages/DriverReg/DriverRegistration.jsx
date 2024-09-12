import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const DriverRegistration = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = async (data) => {
    if (step < 3) {
      if (step === 2) {
        setEmail(data.email);

        // Request OTP
        try {
          const response = await axios.post('https://alpha-server-9861.onrender.com/api/request-otp', { email: data.email });
          console.log(response.data);
        } catch (error) {
          console.error('Error requesting OTP:', error);
        }
      }
      setStep(step + 1);
    } else {
      // Verify OTP
      try {
        const otpResponse = await axios.post('https://alpha-server-9861.onrender.com/api/verify-otp', { email, otp: data.otp });
        if (otpResponse.status === 200) {
          const formData = new FormData();
          Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
          });

          if (data.image[0]) {
            formData.append('image', data.image[0]);
          }

          const response = await axios.post('https://alpha-server-9861.onrender.com/api/driver-register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);

          // Redirect to Driver's login page upon successful registration
          navigate('/Driver/Login');
        }
      } catch (error) {
        console.error('Error verifying OTP or registering driver:', error);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Driver Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input className="w-full px-3 py-2 border rounded" {...register('name', { required: true })} />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input className="w-full px-3 py-2 border rounded" type="email" {...register('email', { required: true })} />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input className="w-full px-3 py-2 border rounded" type="password" {...register('password', { required: true })} />
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Mobile Number</label>
              <input className="w-full px-3 py-2 border rounded" {...register('mobile', { required: true })} />
              {errors.mobile && <p className="text-red-500">Mobile number is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input className="w-full px-3 py-2 border rounded" {...register('address', { required: true })} />
              {errors.address && <p className="text-red-500">Address is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">License Number</label>
              <input className="w-full px-3 py-2 border rounded" {...register('license', { required: true })} />
              {errors.license && <p className="text-red-500">License number is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Car Registration Number</label>
              <input className="w-full px-3 py-2 border rounded" {...register('carRegNumber', { required: true })} />
              {errors.carRegNumber && <p className="text-red-500">Car registration number is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Car Image</label>
              <input type="file" accept="image/*" className="w-full px-3 py-2 border rounded" {...register('image')} onChange={handleImageChange} />
              {imagePreview && <img src={imagePreview} alt="Car Preview" className="mt-4 w-full h-auto" />}
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">OTP</label>
              <input className="w-full px-3 py-2 border rounded" {...register('otp', { required: true })} />
              {errors.otp && <p className="text-red-500">OTP is required</p>}
            </div>
            <p className="text-gray-700">Please check your email for the OTP code.</p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            {step < 3 ? 'Next' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DriverRegistration;

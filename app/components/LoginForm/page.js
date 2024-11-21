'use client'
import React, { useState } from 'react';
import Link from 'next/link';


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault();

    href='/dashboard';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-800">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z" />
            </svg>
          </div>
          <h2 className="mt-2 text-lg font-semibold text-gray-700">Sign in</h2>
        </div>
        
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
            />
          </div>

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-3 flex items-center text-blue-500 hover:text-blue-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="inline-flex items-center">
              <input type="checkbox" className="text-blue-500 border-gray-300 rounded focus:ring-0" />
              <span className="ml-2">Remember me</span>
            </label>
            <Link href={"/signup"} className="text-blue-500 hover:underline">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Login
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <Link href={"/components/SignUpForm"} className="text-blue-500 hover:underline">Register now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ toggleAuth, handleLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { token } = response.data;

      // Store JWT in localStorage or cookies
      localStorage.setItem('token', token);

      // Notify parent component about successful login
      handleLoginSuccess();

    } catch (err) {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg p-8 transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
      {error && <div className="text-red-600 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="bg-purple-500  text-white w-full py-3 rounded-md shadow-md hover:font-bold hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out">
          Login
        </button>
      </form>
      <div className="text-center mt-6">
        Don't have an account?{' '}
        <button
          className="text-purple-600 font-medium focus:rounded hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={toggleAuth}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;

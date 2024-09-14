import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ toggleAuth }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await axios.post('/api/auth/signup', { name, username, password });

      // Redirect to login page after successful signup
      toggleAuth();
    } catch (err) {
      setError('Failed to signup. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md mt-4 mx-auto bg-white shadow-lg rounded-lg p-10 transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Signup</h2>
      {error && <div className="text-red-600 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button className="bg-purple-500 text-white w-full py-3 rounded-md shadow-md hover:bg-purple-800 hover:font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out">
          Signup
        </button>
      </form>
      <div className="text-center mt-6">
        Already have an account?{' '}
        <button
          className="text-purple-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={toggleAuth}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;


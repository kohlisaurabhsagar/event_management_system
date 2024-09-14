import React from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  return (
    <div className="w-64 h-full  bg-purple-100 text-white flex flex-col">
      <div className="flex-shrink-0 p-6 text-2xl font-bold">
       USER NAVIGATION
      </div>
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm0 6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm8-6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zm0 6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zm8-6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zm0 6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
              User Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/create-event"
              className="flex items-center px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 3h16v18H4V3zm16 16H4v-2h16v2zm0-4H4v-2h16v2zm0-4H4v-2h16v2z" />
              </svg>
              Create Event
            </Link>
          </li>
          <li>
            <Link
              to="/action-history"
              className="flex items-center px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v6a2 2 0 002 2h6m-8 0a2 2 0 01-2 2H4m6 0a2 2 0 002-2V9a2 2 0 00-2-2H4m6 12v-4a2 2 0 00-2-2H4m8 0a2 2 0 002 2v4" />
              </svg>
              User Action History
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;

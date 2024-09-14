import React from 'react';

const Header = () => {
  return (
    <header className="bg-violet-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">KSOLVE EventManager</h1>
        <nav>
        <a href="/" className="text-white p-3 hover:rounded-lg hover:ring-2 hover:ring-white hover:text-black hover:font-bold">Contact Us</a>
        <a href="/" className="text-white p-3 hover:rounded-lg hover:ring-2 hover:ring-white hover:text-black hover:font-bold">About Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;



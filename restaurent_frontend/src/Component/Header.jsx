import React from 'react';
import logo from "../assets/home/Logo.png"

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
 
    <div>
      <button className="border border-yellow-500 text-yellow-500 py-2 px-4">
        Call - 987 654 321
      </button>
    </div>

    
    <div className="text-center">
      <img src={logo} alt="Logo" className="mx-auto" />
    </div>


    <div>
      <button   className="bg-yellow-500 text-gray-900 py-2 px-4">
        Reservation
      </button>
    </div>
  </header>
  );
};

export default Header;


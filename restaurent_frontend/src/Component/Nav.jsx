import React from "react";


const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-3">
        <div className="container mx-auto flex justify-center space-x-8">
          <a href="/" className="hover:text-yellow-500">
            Home
          </a>
          <a href="about" className="hover:text-yellow-500">
            About
          </a>
          <a href="menu" className="hover:text-yellow-500">
            Menu
          </a>
          <a href="facilities" className="hover:text-yellow-500">
            Facilities
          </a>
          <a href="accomodation" className="hover:text-yellow-500">
            Accommodation
          </a>
          <a href="events" className="hover:text-yellow-500">
            Events
          </a>
          {/* <a href="contact" className="hover:text-yellow-500">
            Contact
          </a> */}
        </div>
      </nav>
    );
  };

  export default Navbar;
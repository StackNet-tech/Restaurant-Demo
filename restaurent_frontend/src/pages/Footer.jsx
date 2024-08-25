import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto flex justify-between items-start">
    
        <div>
          <h4 className="font-bold text-lg mb-4">Instagram Feed</h4>
          <p className="text-sm">CONTACT</p>
          <p className="text-sm mt-2">5 Rue Dalou, 75015 Paris</p>
          <p className="text-sm mt-2">Call - +33 156 78 89 56</p>
          <p className="text-sm mt-2">benoit@gmail.com</p>
        </div>

     
        <div className="text-center">
          <img src="path-to-logo-image" alt="Logo" className="mx-auto mb-4" />
          <p className="text-sm">
            We'd love to hear from you! Whether you have questions, need
            assistance, or want to make a reservation, feel free to get in touch.
          </p>
        </div>

        <div className="text-right">
          <div className="mb-4">
            <a href="#" className="mr-2">
              <img src="path-to-instagram-icon" alt="Instagram" />
            </a>
            <a href="#" className="mr-2">
              <img src="path-to-facebook-icon" alt="Facebook" />
            </a>
            <a href="#" className="mr-2">
              <img src="path-to-twitter-icon" alt="Twitter" />
            </a>
            <a href="#">
              <img src="path-to-pinterest-icon" alt="Pinterest" />
            </a>
          </div>
          <div className="text-sm">
            <p className="mb-2">
              <strong>WORKING HOURS</strong>
            </p>
            <p>Mon - Fri: 10:00am - 11:00pm</p>
            <p>Sat & Sun: 7:00am - 6:00pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

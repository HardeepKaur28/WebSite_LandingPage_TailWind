import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center py-8 px-6 bg-gray-100">
      <ul className="flex gap-6 font-lato text-gray-600">
        <li>
          <a href="#" className="hover:text-gray-900 transition-colors">Facebook</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <img src="./src/assets/Help-Avatar.svg" alt="Help" className="h-12 w-12" />
        <div>
          <p className="font-playfair font-light text-gray-600">Have any questions?</p>
          <a href="#" className="font-lato font-medium text-blue-500 hover:text-blue-700 transition-colors">Talk to a specialist</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

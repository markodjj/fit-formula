import React, { useState } from 'react';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import logo from '../assets/Logo.png';
function NavMenu() {
  const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {

    }

  return (
    <div className="relative">
        <ul className="hidden md:flex space-x-4 bg-gray-800 text-white p-4 z-50">

            <img src={logo} alt="Logo" className="hidden md:flex h-10 w-auto mr-4" />

            <div className="hidden md:flex space-x-4">
            {navListData.map((item) => (
                <NavListItem key={item._id} item={item} />
            ))}
            </div>


            <button
                onClick={handleClick}
                className="hidden md:flex  bg-blue-500 text-white px-4 py-2 rounded z-10"
                >
                Prijavi se
            </button>
        </ul>
        <div className="flex md:hidden justify-center space-x-4 bg-gray-800 text-white p-4">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                Prijavi se
            </button>
        </div>
    </div>
  );
}

export default NavMenu;

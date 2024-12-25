import React, { useState } from 'react';
import navListData from '../data/navListData';
import SideListItem from './SideListItem';

function SideMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative overflow-hidden">
  
      <button
        onClick={handleClick}
        className="md:hidden fixed top-4 right-4 bg-blue-500 text-white px-2  rounded z-40"
      >
        {isVisible ? '=>' : '<='}
      </button>

      {isVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-20 transition-opacity duration-500"
          onClick={handleClick} 
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-30 transform transition-transform duration-500 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

     
        <ul className="fixed top-10 p-4 space-y-4">
          {navListData.map((item) => (
            <SideListItem key={item._id} item={item} />
          ))}
          <button
        onClick={handleClick}
        className="absolute  bg-blue-500  text-white px-2  rounded z-10"
      >
        Prijavi se
      </button>
        </ul>
        
      </div>
    </div>
  );
}

export default SideMenu;

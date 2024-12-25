import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideListItem = ({ item }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <li className="border-b border-gray-700 pb-2">
      <div className="flex items-center justify-between">
        <Link to={item.path} className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
          {item.name}
        </Link>
        {item.submenu && (
          <button
            onClick={toggleSubmenu}
            className="ml-2 text-xl hover:text-blue-500 transition-colors duration-300 focus:outline-none w-6 flex justify-center"
          >
            {isSubmenuOpen ? '-' : '+'}
          </button>
        )}
      </div>
      {item.submenu && (
        <ul
          className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
            isSubmenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          {item.submenu.map((subItem, index) => (
            <li key={index}>
              <Link to={subItem.path} className="text-md  hover:text-blue-500 transition-colors duration-300">
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SideListItem;
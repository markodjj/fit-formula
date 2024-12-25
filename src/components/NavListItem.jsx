import React from 'react';
import { Link } from 'react-router-dom';

const NavListItem = ({ item }) => {
  return (
    <li className="hidden md:block relative group z-50">
      <Link
        to={item.path}
        className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
      >
        {item.name}
      </Link>
      {item.submenu && (
        <ul
          className="absolute left-0 top-full mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50"
        >
          {item.submenu.map((subItem, index) => (
            <li key={index} className="border-b border-gray-200 last:border-0">
              <Link
                to={subItem.path}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavListItem;

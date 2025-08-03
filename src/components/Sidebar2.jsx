import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">COMPARE GADGETS</h2>
      <ul className="sidebar-list">
        <li>
          <Link to="/compare/smartphones" className="sidebar-item">
            Smart Phones
          </Link>
        </li>
        <li>
          <Link to="/compare/laptops" className="sidebar-item">
            Laptops
          </Link>
        </li>
        <li>
          <Link to="/compare/smart-watches" className="sidebar-item">
            Smart Watches
          </Link>
        </li>
        <li>
          <Link to="/compare/audio" className="sidebar-item">
            Audio Variables
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

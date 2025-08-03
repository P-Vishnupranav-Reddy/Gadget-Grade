import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import addgadget from '../assets/add.png';
import listgadget from '../assets/list.png';

const Sidebar = () => {
  const [showAddSubmenu, setShowAddSubmenu] = useState(false);
  const [showGetSubmenu, setShowGetSubmenu] = useState(false);

  const toggleAddSubmenu = () => setShowAddSubmenu(!showAddSubmenu);
  const toggleGetSubmenu = () => setShowGetSubmenu(!showGetSubmenu);

  return (
    <div className="py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6">
      {/* Add Gadgets Button */}
      <Link to='/add/smartphones'>
      <button onClick={toggleAddSubmenu} className="flexCenter gap-2 rounded-md bg-primary h-14 w-48 medium-16">
        <img src={addgadget} alt="" height={55} width={55} />
        <span>ADD_GADGETS</span>
      </button>
      </Link>
      {/* Add Submenu */}
      {showAddSubmenu && (
        <div className="pl-4">
        <Link to="/add/smartphones">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Smartphones
          </div>
        </Link>
        <Link to="/add/laptops">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Laptops
          </div>
        </Link>
        <Link to="/add/smartwatches">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Smartwatches
          </div>
        </Link>
        <Link to="/add/audio">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Audio Variables
          </div>
        </Link>
      </div>
      
      )}

      {/* List Gadgets Button */}
      <Link to="/get/smartphones">
      <button onClick={toggleGetSubmenu} className="flexCenter gap-2 rounded-md bg-primary h-14 w-48 medium-16">
        <img src={listgadget} alt="" height={55} width={55} />
        <span>LIST_GADGETS</span>
      </button>
      </Link>
      {/* Get Submenu */}
      {showGetSubmenu && (
        <div className="pl-4">
        <Link to="/get/smartphones">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Smartphones
          </div>
        </Link>
        <Link to="/get/laptops">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Laptops
          </div>
        </Link>
        <Link to="/get/smartwatches">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Smartwatches
          </div>
        </Link>
        <Link to="/get/audio">
          <div className="py-3 text-xl font-semibold text-blue-400 hover:text-blue-800 hover:underline cursor-pointer transition-all">
            Audio Variables
          </div>
        </Link>
      </div>
      )}
    </div>
  );
};

export default Sidebar;

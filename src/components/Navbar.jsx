import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import MBLOGO from '../../public/images/MBLOGO.png';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Product', to: '/products' },
  { name: 'Franchise', to: '/franchise' },
  { name: 'Career', to: '/career' },
  { name: 'enquiry', to: '/enquiry' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const activeClass =
    'bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform scale-105';
  const inactiveClass =
    'text-black hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105';

  return (
    <>
      {/* Desktop & Menu Toggle */}
      <nav className="bg-[#fdf6ef] shadow-2xl fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-2xl px-4 md:px-10 lg:px-20 xl:px-32 pb-2 w-[95%] max-w-[1300px]">
        <div className="py-4 flex justify-between items-center relative">
          {/* Left Links */}
          <div className="hidden md:flex gap-4">
            {navItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
              >
                {item.name.toUpperCase()}
              </NavLink>
            ))}
          </div>

          {/* Center Floating Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 z-20">
            <div className="w-25 h-25 rounded-full bg-black border-4 border-[#fdf6ef] shadow-lg flex items-center justify-center overflow-hidden">
              <img src={MBLOGO} alt="Logo" className="w-50 h-50 object-contain" />
            </div>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex gap-4 items-center">
            {navItems.slice(3).map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
              >
                {item.name.toUpperCase()}
              </NavLink>
            ))}
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-yellow-400 text-black p-2 rounded-md hover:bg-yellow-300 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-full bg-[#fdf6ef] z-[999] flex flex-col items-center justify-center px-6 transition-all duration-300">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 bg-yellow-400 p-2 rounded-full hover:bg-yellow-300 transition"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? `text-xl font-semibold ${activeClass}`
                    : `text-xl font-semibold ${inactiveClass}`
                }
              >
                {item.name.toUpperCase()}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

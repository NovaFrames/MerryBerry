import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import MBLOGO from '../../public/images/MBLOGO.png';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Product', to: '/products' },
  { name: 'Franchise', to: '/franchise' },
  { name: 'Career', to: '/career' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeClass = 'text-yellow-600 font-semibold';
  const inactiveClass = 'text-gray-800 hover:text-yellow-600';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.3 } }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={`bg-white ${scrolled ? 'py-2' : 'py-2'} fixed top-0 left-0 right-0 z-80 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center"
            >
              {/* <img
                src={MBLOGO}
                alt="Logo"
                className="h-10 md:h-12 w-auto"
              /> */} <h1 className='text-2xl font-bold'>MERRY BERRY</h1>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="hidden md:flex items-center space-x-1 lg:space-x-4"
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="relative group">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${isActive ? activeClass : inactiveClass} px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300`
                    }
                  >
                    {item.name}
                    <motion.span
                      variants={underlineVariants}
                      initial={false}
                      animate={location.pathname === item.to ? "visible" : "hidden"}
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 origin-left"
                    />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 5px 15px rgba(234, 179, 8, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 lg:ml-6 bg-yellow-500 hover:bg-yellow-600 text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full font-medium transition-all duration-300 shadow-md"
                onClick={() => navigate("/enquiry")}
              >
                Enquiry
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden flex items-center"
            >
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 focus:outline-none transition"
              >
                {isMenuOpen ? <X className="h-7 w-7 z-50" /> : <Menu className="h-7 w-7" />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Border: Curve disappears on scroll */}
        {!scrolled && (
          <div className="absolute -bottom-[30px] left-0 w-full overflow-hidden leading-none z-0">
            <svg
              className="relative block w-full h-10 drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)]
                sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]
                md:drop-shadow-[0_6px_6px_rgba(0,0,0,0.25)] rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                d="M0,40 Q45,0 90,40 T180,40 T270,40 T360,40 T450,40 T540,40 T630,40 T720,40 T810,40 T900,40 T990,40 T1080,40 T1170,40 T1260,40 T1350,40 T1440,40 V80 H0 Z"
              />
            </svg>
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto pt-20 pb-12 px-6"
              style={{ marginTop: '4rem' }}
            >
              <motion.div
                className="flex flex-col space-y-6 items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center"
                  >
                    <NavLink
                      to={item.to}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `${isActive ? 'text-yellow-600 font-bold' : 'text-gray-800'} text-xl hover:text-yellow-600 transition-colors block py-3`
                      }
                    >
                      {item.name}
                      {location.pathname === item.to && (
                        <motion.span
                          layoutId="mobileUnderline"
                          className="block mx-auto w-1/4 h-0.5 bg-yellow-600 mt-1"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 5px 15px rgba(234, 179, 8, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2.5 rounded-full text-lg font-medium transition-all duration-300 shadow-md"
                  onClick={() => navigate("/enquiry")}
                >
                  Enquiry
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Padding for Fixed Navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;

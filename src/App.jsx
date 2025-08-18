import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Franchise from './pages/Franchise';
import Career from './pages/Career';
import Enquiry from './pages/Enquiry';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import IceCreamFriedChickenLoader from './IceCreamFriedChickenLoader/IceCreamFriedChickenLoader';
import './App.css';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Layout with persistent Navbar
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading ? (
        <IceCreamFriedChickenLoader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Product />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="career" element={<Career />} />
            <Route path="enquiry" element={<Enquiry />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;

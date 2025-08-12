import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Franchise from './pages/Franchise';
import Career from './pages/Career';
import Enquiry from './pages/Enquiry';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import Product from './pages/Product';
import IceCreamFriedChickenLoader from './IceCreamFriedChickenLoader/IceCreamFriedChickenLoader';
import './App.css';

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
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
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
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;

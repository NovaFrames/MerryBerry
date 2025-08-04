import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Franchise from './pages/Franchise';
import Career from './pages/Career';
import Enquiry from './pages/Enquiry';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages to keep Navbar persistent */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* path="/" */}
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="career" element={<Career />} />
          <Route path="enquiry" element={<Enquiry />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

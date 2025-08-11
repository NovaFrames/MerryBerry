import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Franchise from './pages/Franchise';
import Career from './pages/Career';
import Enquiry from './pages/Enquiry';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css'
import ProductDetails from './pages/ProductDetails';
import Menu from './pages/Menu';
import Menu2 from './pages/Menu2';
// import Video from './pages/Video';

// Layout with persistent Navbar
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Menu />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="career" element={<Career />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

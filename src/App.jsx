import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Franchise from './pages/Franchise';
import Career from './pages/Career';
import Enquiry from './pages/Enquiry';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import IceCreamFriedChickenLoader from './IceCreamFriedChickenLoader/IceCreamFriedChickenLoader';
import './App.css';
import Admin from '../src/pages/admin/Admin.jsx';
import AdminDashboard from '../src/pages/admin/AdminDashboard.jsx';
import AdminCareers from '../src/pages/admin/AdminCareers.jsx';
import AdminFranchise from '../src/pages/admin/AdminFranchise.jsx';
import AdminProducts from '../src/pages/admin/AdminProducts.jsx';
import AdminOffers from '../src/pages/admin/AdminOffer.jsx';
import FloatingSocialMenu from './components/FloatingSocialMenu.jsx';
import FranchisePage from './pages/FranchisePage.jsx';
import Footer from './components/Footer.jsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Layout with persistent Navbar
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <FloatingSocialMenu />
    <Footer />
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        <>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Product />} />
              <Route path="franchise" element={<FranchisePage />} />
              <Route path="career" element={<Career />} />
              <Route path="enquiry" element={<Enquiry />} />
            </Route>

            {/* Admin Login */}
            <Route path="/admin" element={<Admin setIsAuthenticated={setIsAuthenticated} />} />

            {/* Admin Dashboard (Protected) */}
            <Route
              path="/dashboard/*"
              element={
                isAuthenticated ? (
                  <AdminDashboard />
                ) : (
                  <Navigate to="/admin" replace />
                )
              }
            >
              <Route path="offers" element={<AdminOffers />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="franchise" element={<AdminFranchise />} />
              <Route path="careers" element={<AdminCareers />} />
            </Route>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;

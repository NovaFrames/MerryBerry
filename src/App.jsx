import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages to keep Navbar persistent */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* path="/" */}
          <Route path="about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

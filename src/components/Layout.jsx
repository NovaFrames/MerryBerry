import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* main content area, routes render here */}
      <main className="pt-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

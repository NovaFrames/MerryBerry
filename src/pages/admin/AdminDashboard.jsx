import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Sidebar menu items from array
  const menuItems = [
    { id: 1, label: "Offers", path: "/dashboard/offers" },
    { id: 2, label: "Products", path: "/dashboard/products" },
    { id: 3, label: "Franchise", path: "/dashboard/franchise" },
    { id: 4, label: "Careers", path: "/dashboard/careers" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-6 border-b border-blue-700">
          Merry Berry Admin
        </h2>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`w-full text-left block p-3 rounded-lg mb-2 transition ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-700"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

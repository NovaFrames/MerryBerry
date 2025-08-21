import React, { useState } from "react";
import Fra1 from "./Fra1";
import Fra2 from "./Fra2";
import Fra3 from "./Fra3";

const AdminFranchise = () => {
  const [activeTab, setActiveTab] = useState("franchise");

  const renderContent = () => {
    switch (activeTab) {
      case "franchise":
        return <Fra1 />;
      case "features":
        return <Fra2 />;
      case "cards":
        return <Fra3 />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Franchise Admin Panel</h1>
        <p className="text-gray-600 mt-2">Manage franchises, features, and financial cards</p>
      </div>
      
      {/* Tabs with improved styling */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab("franchise")}
          className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center ${
            activeTab === "franchise"
              ? "bg-amber-500 text-white shadow-md"
              : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Franchises
        </button>

        <button
          onClick={() => setActiveTab("features")}
          className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center ${
            activeTab === "features"
              ? "bg-amber-500 text-white shadow-md"
              : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Features
        </button>

        <button
          onClick={() => setActiveTab("cards")}
          className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center ${
            activeTab === "cards"
              ? "bg-amber-500 text-white shadow-md"
              : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          Cards
        </button>
      </div>

      {/* Content with smooth transition */}
      <div className="transition-opacity duration-300 ease-in-out">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminFranchise;
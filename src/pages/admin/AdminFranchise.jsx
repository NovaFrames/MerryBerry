import React, { useState } from "react";
import Fra1 from "./Fra1";
import Fra2 from "./Fra2";
import Fra3 from "./Fra3";
// import Features from "./Features"; // create this component
// import Cards from "./Cards";       // create this component

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
    <div className="w-full p-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("franchise")}
          className={`pb-2 ${
            activeTab === "franchise"
              ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
              : "text-gray-600"
          }`}
        >
          Franchises
        </button>

        <button
          onClick={() => setActiveTab("features")}
          className={`pb-2 ${
            activeTab === "features"
              ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
              : "text-gray-600"
          }`}
        >
          Features
        </button>

        <button
          onClick={() => setActiveTab("cards")}
          className={`pb-2 ${
            activeTab === "cards"
              ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
              : "text-gray-600"
          }`}
        >
          Cards
        </button>
      </div>

      {/* Content */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default AdminFranchise;

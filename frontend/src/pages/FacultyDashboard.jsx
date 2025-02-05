import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const FacultyDashboard = () => {
  const [activeTab, setActiveTab] = useState("aat1");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide">
            <Link
              to="/faculty/aat1"
              className={`text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 whitespace-nowrap
                ${activeTab === "aat1" ? "bg-blue-800 shadow-lg" : "hover:bg-blue-500/80"}`}
              onClick={() => setActiveTab("aat1")}
            >
              Create AAT1
            </Link>
            <Link
              to="/faculty/aat2"
              className={`text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 whitespace-nowrap
                ${activeTab === "aat2" ? "bg-blue-800 shadow-lg" : "hover:bg-blue-500/80"}`}
              onClick={() => setActiveTab("aat2")}
            >
              Create AAT2
            </Link>
            <Link
              to="/faculty/remedial-session"
              className={`text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 whitespace-nowrap
                ${activeTab === "remedial-session" ? "bg-blue-800 shadow-lg" : "hover:bg-blue-500/80"}`}
              onClick={() => setActiveTab("remedial-session")}
            >
              Create Remedial Session
            </Link>
            <Link
              to="/faculty/students"
              className={`text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 whitespace-nowrap
                ${activeTab === "students" ? "bg-blue-800 shadow-lg" : "hover:bg-blue-500/80"}`}
              onClick={() => setActiveTab("students")}
            >
              View Students
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto p-6 sm:p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
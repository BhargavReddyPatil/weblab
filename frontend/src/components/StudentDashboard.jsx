import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("aat1");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide py-2">
              <Link
                to="/student/aat1"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "aat1" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("aat1")}
              >
                AAT1
              </Link>
              <Link
                to="/student/aat2"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "aat2" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("aat2")}
              >
                AAT2
              </Link>
              <Link
                to="/student/remedial-sessions"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "remedial-sessions" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("remedial-sessions")}
              >
                Remedial Sessions
              </Link>
              <Link
                to="/student/statistics"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "statistics" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("statistics")}
              >
                Statistics
              </Link>
            </div>
            <button onClick={handleLogout} className="text-white px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-all duration-200">Logout</button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto p-6 sm:p-8">
        <div className="bg-white rounded-lg shadow-sm">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
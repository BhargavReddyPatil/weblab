import React from "react";
import { useLocation } from "react-router-dom";
import SuperadminDashboard from "../components/SuperadminDashboard.jsx";
import AdminDashboard from "../components/AdminDashboard.jsx";

const Dashboard = () => {
  const location = useLocation();
  const role = new URLSearchParams(location.search).get("role");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {role === "superadmin" && <SuperadminDashboard />}
        {role === "admin" && <AdminDashboard />}
        {role === "faculty" && (
          <div className="text-2xl font-semibold text-gray-800">
            Faculty Dashboard
          </div>
        )}
        {role === "student" && (
          <div className="text-2xl font-semibold text-gray-800">
            Student Dashboard
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
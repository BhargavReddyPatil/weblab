import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import ViewAAT1Submissions from "./ViewAAT1Submissions";
import CreateAAT1 from "./CreateAAT1";
import CreateAAT2 from "./CreateAAT2";
import CreateRemedialSession from "./CreateRemedialSession";
import ViewStudents from "./ViewStudents";

const FacultyDashboard = () => {
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
                to="/faculty/create-aat1"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "aat1" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("aat1")}
              >
                Create AAT1
              </Link>
              <Link
                to="/faculty/create-aat2"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "aat2" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("aat2")}
              >
                Create AAT2
              </Link>
              <Link
                to="/faculty/create-remedial"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "remedial-session" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("remedial-session")}
              >
                Create Remedial Session
              </Link>
              <Link
                to="/faculty/students"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "students" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("students")}
              >
                View Students
              </Link>
              <Link
                to="/faculty/view-aat1-submissions"
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap hover:bg-blue-500
                  ${activeTab === "submissions" ? "bg-blue-800 shadow-md" : "hover:bg-blue-500/80"}`}
                onClick={() => setActiveTab("submissions")}
              >
                View AAT1 Submissions
              </Link>
            </div>
            <button onClick={handleLogout} className="text-white px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-all duration-200">Logout</button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto p-6 sm:p-8">
        <div className="bg-white rounded-lg shadow-sm">
          <Routes>
            <Route path="create-aat1" element={<CreateAAT1 />} />
            <Route path="create-aat2" element={<CreateAAT2 />} />
            <Route path="create-remedial" element={<CreateRemedialSession />} />
            <Route path="students" element={<ViewStudents />} />
            <Route path="view-aat1-submissions" element={<ViewAAT1Submissions />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;
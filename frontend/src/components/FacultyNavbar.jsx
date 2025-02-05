import React from "react";
import { Link } from "react-router-dom";

const FacultyNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/faculty" 
            className="text-white text-xl font-bold hover:text-blue-100 transition-colors duration-200"
          >
            Faculty Dashboard
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/faculty/create-aat1" 
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              Create AAT1
            </Link>
            <Link 
              to="/faculty/create-aat2" 
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              Create AAT2
            </Link>
            <Link 
              to="/faculty/create-remedial-session" 
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              Create Remedial Session
            </Link>
            <Link 
              to="/faculty/students" 
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              View Students
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/faculty/create-aat1" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              Create AAT1
            </Link>
            <Link 
              to="/faculty/create-aat2" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              Create AAT2
            </Link>
            <Link 
              to="/faculty/create-remedial-session" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              Create Remedial Session
            </Link>
            <Link 
              to="/faculty/students" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/80 transition-all duration-200"
            >
              View Students
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FacultyNavbar;
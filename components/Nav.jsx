"use client";
import React, { useState } from "react";
import Link from "next/link";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen font-satoshi font-bold ">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-orange-300 p-4 text-black transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="text-2xl font-bold mb-8">
          <Link href="/">Admin Panel</Link>
        </div>
        <nav className="space-y-8 ">
          <Link
            href="/"
            className="block hover:text-orange-600 border-b-2 border-white w-fit"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-orange-600 border-b-2 border-orange-600 w-fit"
          >
            About
          </Link>
          <Link
            href="/userlogin"
            className="block hover:text-orange-600 border-b-2 border-orange-600 w-fit"
          >
            Dashboard
          </Link>
          <Link
            href="/users"
            className="block hover:text-orange-600 border-b-2 border-orange-600 w-fit"
          >
            Users
          </Link>
          <Link
            href="/settings"
            className="block hover:text-orange-600 border-b-2 border-orange-600 w-fit"
          >
            Settings
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-orange-300 text-black w-full p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Admin Panel</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/userlogin" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link href="/users" className="hover:text-gray-300">
              Users
            </Link>
            <Link href="/settings" className="hover:text-gray-300">
              Settings
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              type="button"
              className="text-black focus:outline-none"
            >
              {isSidebarOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Page Content
        <main className="p-4 flex-1 bg-gray-100">{children}</main> */}

        {/* <h1 className="flex justify-center items-center">HEllo Admin</h1> */}
      </div>
    </div>
  );
};

export default AdminLayout;

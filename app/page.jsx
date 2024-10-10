// pages/register.js
import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div
      className="min-h-screen bg-cover bg-center lg:p-4 p-6 font-satoshi overflow-x-hidden overflow-y-hidden"
      style={{ backgroundImage: "url('../assests/Admin Back1.jpg')" }}
    >
      {/* Top-right SignIn/SignUp */}
      <div className="flex justify-end p-6">
        <button className="text-white bg-orange-600  border border-orange-600 px-4 py-2 rounded-md hover:bg-orange-600 ">
          <Link href="/firstpage">Sign In</Link>
        </button>
        <button className="ml-4 text-white bg-transparent border border-orange-600 px-4 py-2 rounded-md hover:bg-orange-600 hover:text-white">
          Sign Up
        </button>
      </div>

      {/* Registration Form */}
      <div className="flex justify-end items-center h-screen  lg:mr-20">
        <div className="bg-white shadow-md shadow-black rounded-lg p-8 md:w-1/3 w-full max-w-md lg:-mt-20">
          <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            Create an <span className="font-satoshi font-bold">Admin</span>{" "}
            Account
          </h2>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Phone Number
              </label>
              <input
                id="ph_no"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your Phone Number"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:rounded-3xl delay-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

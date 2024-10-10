"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const userlogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    ph_no: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/new", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          ph_no: formData.ph_no,
        }),
      });

      if (response.ok) {
        if (router) {
          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center mt-20 text-black border-2 w-fit">
      <div>
        <h1>Login Form</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <div>
          <label>Enter your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="search_input"
          />

          <label>Enter your Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your Name"
            value={formData.username}
            onChange={handleChange}
            required
            className="search_input"
          />

          <label>Enter your Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="search_input"
          />

          <label>Enter your Phone Number</label>
          <input
            type="text"
            name="ph_no"
            placeholder="Enter your Phone Number"
            value={formData.ph_no}
            onChange={handleChange}
            required
            className="search_input"
          />
        </div>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default userlogin;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-xl py-6 px-8 max-w-md">
        <h1 className="text-3xl font-bold mb-5 ">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-80">
            <p className="text-sm font-semibold text-gray-900 mb-3">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Admin Email"
              required
              className="rounded w-full px-3 py-2 border border-gray-700 outline-none"
            />
          </div>
          <div className="mb-3 min-w-80">
            <p className="text-sm font-semibold text-gray-900 mb-3">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter Your Password"
              required
              className="rounded w-full px-3 py-2 border border-gray-700 outline-none"
            />
          </div>
          <button
            type="submit "
            className="bg-black w-full py-2 px-4 rounded-md text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

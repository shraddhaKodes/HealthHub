import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsClicked(true);

    try {
      const url =
        state === "Sign Up"
          ? `${backendUrl}/api/user/register`
          : `${backendUrl}/api/user/login`;

      const payload =
        state === "Sign Up" ? { name, email, password } : { email, password };

      const { data } = await axios.post(url, payload);

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={onSubmitHandler}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-gray-600 text-center mt-2">
          {state === "Sign Up"
            ? "Sign up to book appointments"
            : "Login to continue"}
        </p>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          {state === "Sign Up" && (
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-primary focus:outline-none transition"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-primary focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-primary focus:outline-none transition"
              required
            />
          </div>
        </div>

        {/* Button Animation */}
        <style>
          {`
            @keyframes bounceUpDown {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
          `}
        </style>

        {/* Framed Button */}
        <button
          style={{ animation: "bounceUpDown 1s infinite ease-in-out" }}
          onClick={() => setIsClicked(true)}
          className={`w-full py-3 mt-6 rounded-lg font-semibold transition-all duration-300 transform 
          ${isClicked ? "bg-blue-400 text-white font-bold" : "border-2 border-primary text-primary bg-transparent"} 
          hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-md`}
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Toggle Signup/Login */}
        <p className="text-center text-gray-600 mt-4">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-primary cursor-pointer font-medium hover:underline"
          >
            {state === "Sign Up" ? "Login here" : "Sign up here"}
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;

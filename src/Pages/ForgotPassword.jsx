import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const initialEmail=location.state?.email || "";
  const [email, setEmail] =useState(initialEmail);

  const handleReset =(e)=>{
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Redirecting to Gmail...");
    window.open("https://mail.google.com", "_blank");
    navigate("/auth/login"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-6 px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password</h2>

        <form onSubmit={handleReset} className="flex flex-col gap-3">
          <label className="label">Email Address</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-neutral w-full mt-3">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

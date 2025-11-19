import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // pw validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 chars, with 1 uppercase & 1 lowercase.");
      toast.error("Password does not meet criteria");
      return;
    }

    try {
      await createUser(email, password);
      await updateUserProfile({ displayName: name, photoURL });
      toast.success("Register successfully!");
      e.target.reset();
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-4">
        <h2 className="font-semibold text-2xl text-center">Register</h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Your name" required />

            <label className="label">Photo URL</label>
            <input type="text" name="photoURL" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-3 text-lg cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <p className="text-red-500 text-sm mt-1">{error}</p>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Register
            </button>
          </form>

          <div className="divider">or</div>
          <button onClick={handleGoogleRegister} className="btn btn-outline btn-accent w-full">
            Continue with Google
          </button>

          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

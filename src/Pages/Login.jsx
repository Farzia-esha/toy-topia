import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const password = e.target.password.value;

    try {
      await loginUser(email, password);
      toast.success("Logged in successfully!");
      e.target.reset();
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-4">
        <h2 className="font-semibold text-2xl text-center">Login</h2>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter password"
              required
            />

            {/* Forgot pw link */}
            <div className="text-right mt-2">
              <Link
                to="/auth/forgot-password"
                state={{ email }}
                className="text-blue-500 text-sm  hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <p className="text-red-500 text-sm mt-1">{error}</p>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>
          </form>

          <div className="divider">or</div>
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-accent w-full">
            Continue with Google
          </button>

          <p className="text-center mt-5">
            Don't have an account? <Link to="/auth/register" className="text-red-500">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

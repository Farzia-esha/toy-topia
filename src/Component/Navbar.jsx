import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Provider/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const active = ({ isActive }) =>
    isActive
      ? "px-3 py-1 rounded-lg bg-white text-purple-700 font-semibold"
      : "px-3 py-1 hover:bg-white hover:text-purple-700 rounded-lg";

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="text-2xl font-bold">
          Toy<span className="text-yellow-300">Topia</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={active}>
            Home
          </NavLink>
          <NavLink to="/profile" className={active}>
            My Profile
          </NavLink>
          <NavLink to="/toys" className={active}>
            All Toys
          </NavLink>
          <NavLink to="/mytoys" className={active}>
            My Toys
          </NavLink>
        </ul>

        {/* login Btn */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/BKrWkn59/image.png"
                  }
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-yellow-300"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-12 bg-purple-700 px-2 py-1 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition">
                  {user.displayName || user.email}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white text-purple-700 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="bg-white text-purple-700 px-3 py-1 rounded"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="bg-white text-purple-700 px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile*/}
      {menuOpen && (
        <div className="md:hidden bg-purple-700 text-white px-4 pb-4">
          <ul className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={active}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className={active}
              onClick={() => setMenuOpen(false)}
            >
              My Profile
            </NavLink>

            <NavLink to="/toys" className={active}
            onClick={()=>setMenuOpen(false)}>
            All Toys
          </NavLink>

          <NavLink to="/mytoys" className={active}
          onClick={()=>setMenuOpen(false)}>
            My Toys
          </NavLink>

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-white text-purple-700 px-3 py-1 rounded mt-2"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="bg-white text-purple-700 px-3 py-1 rounded mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-white text-purple-700 px-3 py-1 rounded mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

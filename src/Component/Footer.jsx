import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-3xl font-bold mb-3">
            Toy<span className="text-yellow-300">Topia</span>
          </h2>
          <p className="text-sm text-gray-100 leading-relaxed">
            Your one-stop destination for fun, learning, and imagination.  
            Find the best toys for your kids!
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 text-lg">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 text-lg">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 text-lg">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-100">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/toys" className="hover:text-yellow-300">All Toys</Link></li>
            <li><Link to="/auth/register" className="hover:text-yellow-300">Register</Link></li>
            <li><Link to="/auth/login" className="hover:text-yellow-300">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-100">
            <li><Link to="/terms" className="hover:text-yellow-300">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-yellow-300">Privacy Policy</Link></li>
            <li><Link to="/refund" className="hover:text-yellow-300">Refund Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p>Email: support@toytopia.com</p>
          <p>Phone: +880 1234 567 890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 py-4 text-center text-sm text-gray-200 border-t border-purple-700">
        © {new Date().getFullYear()} <span className="font-semibold">ToyTopia</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

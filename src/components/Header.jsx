import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ auth, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-indigo-600 text-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          SkillConnect
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white hover:text-indigo-200 ${
                isActive(item.path) ? "font-semibold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Authentication Buttons */}
          {auth ? (
            <>
              <Link
                to={
                  auth.userType === "user"
                    ? "/user-dashboard"
                    : "/professional-dashboard"
                }
                className="bg-white text-indigo-600 px-3 py-1 rounded font-semibold hover:bg-indigo-50"
              >
                Dashboard
              </Link>
              <button
                onClick={onLogout}
                className="ml-3 border border-white px-3 py-1 rounded hover:bg-indigo-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block text-white hover:text-indigo-200 ${
                isActive(item.path) ? "font-semibold underline" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {auth ? (
            <>
              <Link
                to={
                  auth.userType === "user"
                    ? "/user-dashboard"
                    : "/professional-dashboard"
                }
                className="block bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-center hover:bg-indigo-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full border border-white text-white px-3 py-1 rounded text-center hover:bg-indigo-800"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-center hover:bg-indigo-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}


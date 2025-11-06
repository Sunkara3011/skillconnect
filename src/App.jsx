import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import UserDashboard from "./components/UserDashboard";
import ProfessionalDashboard from "./components/ProfessionalDashboard";

export default function App() {
  const [auth, setAuth] = useState(null); // null means logged out

  const handleLogin = (userType) => {
    setAuth({ userType });
  };

  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header auth={auth} onLogout={handleLogout} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/login"
              element={
                auth ? (
                  <Navigate
                    to={
                      auth.userType === "user"
                        ? "/user-dashboard"
                        : "/professional-dashboard"
                    }
                  />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/user-dashboard"
              element={
                auth && auth.userType === "user" ? (
                  <UserDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/professional-dashboard"
              element={
                auth && auth.userType === "professional" ? (
                  <ProfessionalDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </main>

        <footer className="bg-slate-100 text-center py-4 text-sm text-gray-500">
          © 2025 SkillConnect. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

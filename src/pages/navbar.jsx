// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎵 Festival français</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          À propos
        </NavLink>

        <NavLink
          to="/cities"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Villes
        </NavLink>

        <NavLink
          to="/tickets"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Billets
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

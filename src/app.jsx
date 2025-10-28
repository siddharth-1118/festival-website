import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Cities from "./pages/cities";
import Contact from "./pages/contact";
import CityDetails from "./pages/citiesdetails";
import Musicians from "./pages/musicians";
import MusiciansDetail from "./pages/musiciansdetails";
import Lineup from "./pages/lineup";
import Tickets from "./pages/tickets";
import Layout from "./pages/layout";
// Import other pages as needed
// Import any other pages as needed

export default function App() {
  return (
    <Router>
      {/* Interactive Navigation Bar */}
      <nav style={{
        width: "100%",
        padding: "24px 0",
        background: "rgba(44,20,70,0.90)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        gap: "20px"
      }}>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/cities">Cities</NavButton>
        <NavButton to="/contact">Contact</NavButton>
        <NavButton to="/musicians">Musicians</NavButton>
        <NavButton to="/lineup">Lineup</NavButton>
        <NavButton to="/tickets">Tickets</NavButton>
      </nav>

      {/* Add padding top to prevent navbar from overlapping content */}
      <div style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/musicians" element={<Musicians />} />
          <Route path="/musician/:id" element={<MusiciansDetail />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/cities/:id" element={<CityDetails />} />

          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

// NavButton is a helper component for better UI
function NavButton({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        background: "#FFD700",
        color: "#222",
        padding: "12px 28px",
        margin: "0 6px",
        borderRadius: "22px",
        fontWeight: "bold",
        fontSize: "1.07rem",
        textDecoration: "none",
        boxShadow: "0 2px 10px #55338860",
        transition: "all 0.23s",
        border: "2px solid transparent"
      }}
      onMouseOver={e => {
        e.target.style.background = "#37dea6";
        e.target.style.color = "#fff";
        e.target.style.border = "2px solid #FFD700";
      }}
      onMouseOut={e => {
        e.target.style.background = "#FFD700";
        e.target.style.color = "#222";
        e.target.style.border = "2px solid transparent";
      }}
    >
      {children}
    </Link>
  );
}

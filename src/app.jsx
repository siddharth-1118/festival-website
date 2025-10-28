import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Cities from "./pages/cities";
import Contact from "./pages/contact";
import CityDetails from "./pages/citiesdetails";
import Musicians from "./pages/musicians";
import MusicianDetails from "./pages/musiciansdetails";
import Lineup from "./pages/lineup";
import Tickets from "./pages/tickets";
import Layout from "./pages/layout";
const musicUrl = "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav
        style={{
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
          gap: "20px",
        }}
      >
        <audio
  src="https://www.bensound.com/bensound-music/bensound-creativeminds.mp3" // Use your own MP3 URL here!
  autoPlay
  loop
  controls={false}
  volume={0.3}
  style={{
    position: "fixed",
    bottom: "16px",
    left: "16px",
    zIndex: 2000,
    opacity: 0.5,
    pointerEvents: "none",
    width: 0,
    height: 0
  }}
/>

        <NavButton to="/">Home</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/cities">Cities</NavButton>
        <NavButton to="/musicians">Musicians</NavButton>
        <NavButton to="/tickets">Tickets</NavButton>
         <NavButton to="/contact">Contact</NavButton>
      </nav>

      <div style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/musicians" element={<Musicians />} />
          <Route path="/musicians/:id" element={<MusicianDetails />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/cities/:id" element={<CityDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

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
        border: "2px solid transparent",
      }}
      onMouseOver={(e) => {
        e.target.style.background = "#37dea6";
        e.target.style.color = "#fff";
        e.target.style.border = "2px solid #FFD700";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "#FFD700";
        e.target.style.color = "#222";
        e.target.style.border = "2px solid transparent";
      }}
    >
      {children}
    </Link>
  );
}

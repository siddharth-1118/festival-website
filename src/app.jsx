import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Cities from "./pages/cities";
import CityDetails from "./pages/citiesdetails";
import Musicians from "./pages/musicians";
import MusicianDetails from "./pages/musiciansdetails";
import Lineup from "./pages/lineup";
import Tickets from "./pages/tickets";
import Layout from "./pages/layout";
import Contact from "./pages/contact";

const musicUrl = "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3";

// Persistent background music
function BackgroundMusic() {
  const audioRef = React.useRef();
  React.useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.20;
  }, []);
  return (
    <audio
      src={musicUrl}
      autoPlay
      loop
      ref={audioRef}
      style={{
        position: "fixed",
        bottom: "16px",
        left: "16px",
        zIndex: 2000,
        opacity: 0.0,
        pointerEvents: "none",
        width: 0,
        height: 0,
        display: "block"
      }}
    />
  );
}

// Navigation button with hover styling
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
        display: "inline-block"
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

export default function App() {
  return (
    <BrowserRouter>
      {/* Music plays everywhere */}
      <BackgroundMusic />
      {/* Fixed Navbar */}
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
          gap: "20px"
        }}
      >
        <NavButton to="/">Home</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/cities">Cities</NavButton>
        <NavButton to="/musicians">Musicians</NavButton>
        <NavButton to="/tickets">Tickets</NavButton>
        <NavButton to="/lineup">Lineup</NavButton>
        <NavButton to="/contact">Contact</NavButton>
        <NavButton to="/layout">Layout</NavButton>
      </nav>
      {/* Padding so content isn't hidden under navbar */}
      <div style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:id" element={<CityDetails />} />
          <Route path="/musicians" element={<Musicians />} />
          <Route path="/musicians/:id" element={<MusicianDetails />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

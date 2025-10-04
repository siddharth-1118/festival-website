import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Lineup from "./pages/lineup";
import Contact from "./pages/contact";
import Tickets from "./pages/tickets";
import "./style.css";

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 min-h-screen text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md shadow-lg">
          <h1 className="text-2xl font-extrabold">🎶 French Festival</h1>
          <ul className="flex gap-6 text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/lineup">Lineup</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/tickets">Tickets</Link></li>
          </ul>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>

        {/* Footer */}
        <footer className="text-center py-6 bg-black/40 mt-10">
        </footer>
      </div>
    </Router>
  );
}

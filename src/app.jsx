import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import lineup from "./pages/lineup";
import contact from "./pages/contact";
import tickets from "./pages/tickets";
import musicians from "./pages/musicians";
import musicianDetail from "./pages/musiciansdetails";
import cities from "./pages/cities";
import citiesDetails from "./pages/citiesdetails";
import "./style.css";

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 min-h-screen text-white">
        <nav className="flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md shadow-lg">
          <h1 className="text-2xl font-extrabold">🎶 French Festival</h1>
          <ul className="flex gap-6 text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/lineup">Lineup</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/tickets">Tickets</Link></li>
            <li><Link to="/musicians">Musicians</Link></li>
            <li><Link to="/cities">Cities</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/about" element={<about />} />
          <Route path="/lineup" element={<lineup />} />
          <Route path="/contact" element={<contact />} />
          <Route path="/tickets" element={<tickets />} />
          <Route path="/musicians" element={<musicians />} />
          <Route path="/musicians/:id" element={<musicianDetail />} />
          <Route path="/cities" element={<cities />} />
          <Route path="/cities/:id" element={<citiesDetails />} />
        </Routes>
        <footer className="text-center py-6 bg-black/40 mt-10"></footer>
      </div>
    </Router>
  );
}

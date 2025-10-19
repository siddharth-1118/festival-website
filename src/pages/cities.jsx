// src/pages/Cities.jsx
import React from "react";
import { Link } from "react-router-dom";

const citiesData = [
  { id: "paris", name: "Paris", image: "/images/paris.jpg" },
  { id: "lyon", name: "Lyon", image: "/images/lyon.jpg" },
  { id: "marseille", name: "Marseille", image: "/images/marseille.jpg" },
  { id: "toulouse", name: "Toulouse", image: "/images/toulouse.jpg" },
];

export default function Cities() {
  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <h2>🎶 Festival Cities</h2>
      <p>Select a city to explore its festival lineup!</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {citiesData.map((city) => (
          <div
            key={city.id}
            style={{
              background: "#222",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(255,255,255,0.2)",
            }}
          >
            <img
              src={city.image}
              alt={city.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{city.name}</h3>
            <Link to={`/cities/${city.id}`}>
              <button style={{ marginBottom: "10px" }}>View Festival</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

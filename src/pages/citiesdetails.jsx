// src/pages/CityDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const cityFestivals = {
  paris: {
    name: "Paris Summer Music Fest",
    date: "July 21",
    musicians: ["Jean Dupont", "Léa Rousseau", "DJ Lumière"],
  },
  lyon: {
    name: "Lyon Jazz Nights",
    date: "July 22",
    musicians: ["Camille Moreau", "The Sound Trio", "Noir Beats"],
  },
  marseille: {
    name: "Marseille Ocean Beats",
    date: "July 23",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
  toulouse: {
    name: "Toulouse Harmony Fest",
    date: "July 24",
    musicians: ["Luc Garnier", "Élodie", "Orchestre Rouge"],
  },
};

export default function CityDetails() {
  const { id } = useParams();
  const city = cityFestivals[id];

  if (!city) {
    return (
      <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
        <h2>City not found</h2>
        <Link to="/cities"><button>Back to Cities</button></Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
      <h2>🎵 {city.name}</h2>
      <p>Date: {city.date}</p>
      <h3>Performing Musicians:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {city.musicians.map((m) => (
          <li key={m} style={{ margin: "10px 0" }}>{m}</li>
        ))}
      </ul>
      <Link to="/cities">
        <button style={{ marginTop: "20px" }}>← Back to Cities</button>
      </Link>
    </div>
  );
}

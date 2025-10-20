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
    avignon: {
    name: "Avignon Festival",
    date: "July 25",
    musicians: ["Sophie Dubois", "Julien Lefevre", "Les Harmonies"],
  },
    cannes: {
    name: "Cannes Film Festival",
    date: "July 26",
    musicians: ["DJ Lumière", "Camille Moreau", "The Sound Trio"],
  },
  menton: {
    name: "Menton Music Gala",
    date: "July 27",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
    nice: {
    name: "Nice Jazz Festival",
    date: "July 28",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
    bordeaux: {
    name: "Bordeaux Music Festival",
    date: "July 29",
    musicians: ["DJ Bleu", "Léa Rousseau", "The Sound Trio"],
  },
    strasbourg: {
    name: "Strasbourg Summer Beats",
    date: "July 30",
    musicians: ["Camille Moreau", "Marie Fontaine", "Les Rythmes"],
  },
  nantes: {
    name: "Nantes Music Fest",
    date: "July 31",
    musicians: ["Jean Dupont", "Luc Garnier", "Orchestre Rouge"],
  },
    montpellier: {
    name: "Montpellier Music Festival",
    date: "August 1",
    musicians: ["DJ Bleu", "Sophie Dubois", "The Sound Trio"],
  },
    rennes: {
    name: "Rennes Rhythm Fest",
    date: "August 2",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
    lille: {
    name: "Lille Music Gala",
    date: "August 3",
    musicians: ["Camille Moreau", "Léa Rousseau", "Orchestre Rouge"],
  },
    grenoble: {
    name: "Grenoble Summer Sounds",
    date: "August 4",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
    dijon: {
    name: "Dijon Music Fest",
    date: "August 5",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
    angers: {
    name: "Angers Harmony Festival",
    date: "August 6",
    musicians: ["Jean Dupont", "Luc Garnier", "Orchestre Rouge"],
  },
  nimes: {
    name: "Nîmes Music Nights",
    date: "August 7",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  saintetienne: {
    name: "Saint-Étienne Summer Fest",
    date: "August 8",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
  tours: {
    name: "Tours Music Gala",
    date: "August 9",
    musicians: ["Camille Moreau", "Léa Rousseau", "Orchestre Rouge"],
  },
  clermontferrand: {
    name: "Clermont-Ferrand Rhythm Fest",
    date: "August 10",  
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
    amiens: {
    name: "Amiens Music Festival",
    date: "August 11",
    musicians: ["Jean Dupont", "Léa Rousseau", "Orchestre Rouge"],
  },
    besancon: {
    name: "Besançon Summer Beats",
    date: "August 12",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
    metz: {
    name: "Metz Music Fest",
    date: "August 13",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
    perpignan: {
    name: "Perpignan Music Gala",
    date: "August 14",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
    orleans: {
    name: "Orléans Summer Sounds",
    date: "August 15",  
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
    caen: {
    name: "Caen Music Festival",
    date: "August 16",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
    nancy: {
    name: "Nancy Rhythm Fest",
    date: "August 17",  
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
    rouen: {
    name: "Rouen Music Gala",
    date: "August 18",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
    arles: {
    name: "Arles Summer Beats",
    date: "August 19",  
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
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

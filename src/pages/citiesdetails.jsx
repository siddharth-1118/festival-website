// src/pages/CityDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";


const cityFestivals = {
  paris: {
    name: "Festival d'été de la musique à Paris",
    date: "21 juillet",
    musicians: ["Jean Dupont", "Léa Rousseau", "DJ Lumière"],
  },
  lyon: {
    name: "Nuits de Jazz à Lyon",
    date: "22 juillet",
    musicians: ["Camille Moreau", "The Sound Trio", "Noir Beats"],
  },
  marseille: {
    name: "Rythmes Océaniques de Marseille",
    date: "23 juillet",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
  toulouse: {
    name: "Fête de l'Harmonie à Toulouse",
    date: "24 juillet",
    musicians: ["Luc Garnier", "Élodie", "Orchestre Rouge"],
  },
  avignon: {
    name: "Festival d'Avignon",
    date: "25 juillet",
    musicians: ["Sophie Dubois", "Julien Lefevre", "Les Harmonies"],
  },
  cannes: {
    name: "Festival du film de Cannes",
    date: "26 juillet",
    musicians: ["DJ Lumière", "Camille Moreau", "The Sound Trio"],
  },
  menton: {
    name: "Gala musical de Menton",
    date: "27 juillet",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
  nice: {
    name: "Festival de Jazz de Nice",
    date: "28 juillet",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  bordeaux: {
    name: "Festival de musique de Bordeaux",
    date: "29 juillet",
    musicians: ["DJ Bleu", "Léa Rousseau", "The Sound Trio"],
  },
  strasbourg: {
    name: "Rythmes d'été de Strasbourg",
    date: "30 juillet",
    musicians: ["Camille Moreau", "Marie Fontaine", "Les Rythmes"],
  },
  nantes: {
    name: "Fête musicale de Nantes",
    date: "31 juillet",
    musicians: ["Jean Dupont", "Luc Garnier", "Orchestre Rouge"],
  },
  montpellier: {
    name: "Festival de musique de Montpellier",
    date: "1 août",
    musicians: ["DJ Bleu", "Sophie Dubois", "The Sound Trio"],
  },
  rennes: {
    name: "Fête des rythmes de Rennes",
    date: "2 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
  lille: {
    name: "Gala musical de Lille",
    date: "3 août",
    musicians: ["Camille Moreau", "Léa Rousseau", "Orchestre Rouge"],
  },
  grenoble: {
    name: "Sonorités d'été de Grenoble",
    date: "4 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  dijon: {
    name: "Fête musicale de Dijon",
    date: "5 août",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
  angers: {
    name: "Festival de l'harmonie à Angers",
    date: "6 août",
    musicians: ["Jean Dupont", "Luc Garnier", "Orchestre Rouge"],
  },
  nimes: {
    name: "Nuits musicales de Nîmes",
    date: "7 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  saintetienne: {
    name: "Fête d'été de Saint-Étienne",
    date: "8 août",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
  },
  tours: {
    name: "Gala musical de Tours",
    date: "9 août",
    musicians: ["Camille Moreau", "Léa Rousseau", "Orchestre Rouge"],
  },
  clermontferrand: {
    name: "Fête des rythmes de Clermont-Ferrand",
    date: "10 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  amiens: {
    name: "Festival de musique d'Amiens",
    date: "11 août",
    musicians: ["Jean Dupont", "Léa Rousseau", "Orchestre Rouge"],
  },
  besancon: {
    name: "Rythmes d'été de Besançon",
    date: "12 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
  metz: {
    name: "Fête musicale de Metz",
    date: "13 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  perpignan: {
    name: "Gala musical de Perpignan",
    date: "14 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
  orleans: {
    name: "Sonorités d'été d'Orléans",
    date: "15 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
  caen: {
    name: "Festival de musique de Caen",
    date: "16 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  nancy: {
    name: "Fête des rythmes de Nancy",
    date: "17 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
  rouen: {
    name: "Gala musical de Rouen",
    date: "18 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
  },
  arles: {
    name: "Rythmes d'été d'Arles",
    date: "19 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
  },
};

export default function CityDetails() {
  const { id } = useParams();
  const city = cityFestivals[id];

  if (!city) {
    return (
      <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
        <h2>Ville introuvable</h2>
        <Link to="/cities"><button>Retour aux villes</button></Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", color: "black", padding: "50px", borderRadius: "15px", maxWidth: "600px", margin: "40px auto" }}>
      <h2>🎵 {city.name}</h2>
      <p>Date : {city.date}</p>
      <h3>Musiciens à l'affiche :</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {city.musicians.map((m) => (
          <li key={m} style={{ margin: "10px 0" }}>{m}</li>
        ))}
      </ul>
      <Link to="/cities">
        <button style={{ marginTop: "20px" }}>← Retour aux villes</button>
      </Link>
    </div>
  );
}

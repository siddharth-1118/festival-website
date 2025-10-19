// src/pages/Cities.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./citeies.css";

const citiesData = [
  { id: "paris", name: "Paris", image: "https://i.ytimg.com/vi/jIbcr3UBBt8/maxresdefault.jpg" },
  { id: "lyon", name: "Lyon", image: "https://applications-media.feverup.com/image/upload/f_auto,w_720,h_720/fever2/plan/photo/9cb8efd6-10a0-11f0-9924-cac999f17aa5.png" },
  { id: "marseille", name: "Marseille", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnwfBCg-bCvUq5Tr4jvpBC6NFzMS63-WNGQ&s" },
  { id: "toulouse", name: "Toulouse", image: "https://offloadmedia.feverup.com/bordeauxsecret.com/wp-content/uploads/2022/03/21134539/Initial_Festival_2023-9247_vh9pw9-1024x683.jpg" },
  { id: "avignon", name: "Avignon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvrNI8BV9FDmOZCrYSv6xQC4eYCJ1PBTu5g&s" },
  { id: "cannes", name: "cannes", image: "https://www.palaisdesfestivals.com/app/uploads/cannes-palais/2023/07/thumbs/Plages-electro-Cannes-2022-c-SEMEC-Gilles-Traverso-640x360.jpg" },
  { id: "menton", name: "menton", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtNULkt0ucF9bE3MBPmW-JsHC_G1p9FhD2Q&s" },
  { id: "nice", name: "nice", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Iu-lGzG69gEGze8FQrwz8R9Qqhxw48wu0Q&s" },
  { id: "bordeaux", name: "bordeaux", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFjatNCdvmg9UayRcMmcwNRKqPYpcoKajJw&s" },
  { id: "strasbourg", name: "strasbourg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEnwvwH7WdNL3DM_H6jQus2ECnZQCmrmm2Q&s" },
  { id: "nantes", name: "nantes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3l4oVki3NXYgcRLQheNIwODzwfBeeH_0Bg&s" },
  { id: "montpellier", name: "montpellier", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "rennes", name: "rennes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "lille", name: "lille", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "grenoble", name: "grenoble", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "dijon", name: "dijon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "angers", name: "angers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "nimes", name: "nimes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "saintetienne", name: "saintetienne", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "tours", name: "tours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "clermontferrand", name: "clermontferrand", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "amiens", name: "amiens", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "besancon", name: "besancon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "metz", name: "metz", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "perpignan", name: "perpignan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "orleans", name: "orleans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "caen", name: "caen", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "nancy", name: "nancy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "rouen", name: "rouen", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" },
  { id: "arles", name: "arles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Yzv2bXg4j3kYl8kJH5L1Z5cXo5nUu4n7A&s" }
];

export default function Cities() {
  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <h2>🎶 Festival Cities</h2>
      <p>Select a city to explore its festival lineup!</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {citiesData.map((city) => (
          <div
            key={city.id} className="city-card"
            style={{
              
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

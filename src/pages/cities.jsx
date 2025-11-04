// src/pages/Cities.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./citeies.css";
import Confetti from "react-confetti";


const citiesData = [
  { id: "paris", name: "Paris", image: "https://i.ytimg.com/vi/jIbcr3UBBt8/maxresdefault.jpg" },
  { id: "lyon", name: "Lyon", image: "https://applications-media.feverup.com/image/upload/f_auto,w_720,h_720/fever2/plan/photo/9cb8efd6-10a0-11f0-9924-cac999f17aa5.png" },
  { id: "marseille", name: "Marseille", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnwfBCg-bCvUq5Tr4jvpBC6NFzMS63-WNGQ&s" },
  { id: "toulouse", name: "Toulouse", image: "https://offloadmedia.feverup.com/bordeauxsecret.com/wp-content/uploads/2022/03/21134539/Initial_Festival_2023-9247_vh9pw9-1024x683.jpg" },
  { id: "avignon", name: "Avignon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvrNI8BV9FDmOZCrYSv6xQC4eYCJ1PBTu5g&s" },
  { id: "cannes", name: "Cannes", image: "https://www.palaisdesfestivals.com/app/uploads/cannes-palais/2023/07/thumbs/Plages-electro-Cannes-2022-c-SEMEC-Gilles-Traverso-640x360.jpg" },
  { id: "menton", name: "Menton", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtNULkt0ucF9bE3MBPmW-JsHC_G1p9FhD2Q&s" },
  { id: "nice", name: "Nice", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Iu-lGzG69gEGze8FQrwz8R9Qqhxw48wu0Q&s" },
  { id: "bordeaux", name: "Bordeaux", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFjatNCdvmg9UayRcMmcwNRKqPYpcoKajJw&s" },
  { id: "strasbourg", name: "Strasbourg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEnwvwH7WdNL3DM_H6jQus2ECnZQCmrmm2Q&s" },
  { id: "nantes", name: "Nantes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3l4oVki3NXYgcRLQheNIwODzwfBeeH_0Bg&s" },
  { id: "montpellier", name: "Montpellier", image: "https://uploads.lebonbon.fr/source/2025/june/2079335/f-te-de-la-musique-de-montpellier-1-1-_1_2000.jpg" },
  { id: "rennes", name: "Rennes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28UOMuzhfQxGtlmhRbCCt-mCAs_bS0Zgb2w&s" },
  { id: "lille", name: "Lille", image: "https://cdn.evbstatic.com/s3-build/fe/build/images/8906a0b4fbb9e815319ce59db23cae02-djdance.webp" },
  { id: "grenoble", name: "Grenoble", image: "https://res.cloudinary.com/shotgun/image/upload/c_limit,w_3840/fl_lossy/f_auto/q_auto/production/artworks/Austra_Fest_shotgun_tx3lge.png" },
  { id: "dijon", name: "Dijon", image: "https://jaimedijon.com/wp-content/uploads/2024/12/golden-coast-annonce-2025-1024x576.jpg" },
  { id: "angers", name: "Angers", image: "https://i.ytimg.com/vi/iH5ruyRB-MU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDqRnE5sRWxwGw-nCiWuj7hHhIWsw" },
  { id: "nimes", name: "Nîmes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3BAD1v9cdzmyhOK-qWz-VfYSYmSDvDgmCg&s" },
  { id: "saintetienne", name: "Saint-Étienne", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5Rb4w6TbHv-8LW7_dBJmjnkZ1qVNRpRIaA&s" },
  { id: "tours", name: "Tours", image: "https://in.eventfaqs.com/wp-content/uploads/sites/2/2025/01/aditya-chinchure-zhqczjr9fho-unsplash-1-1024x7681-1.jpg" },
  { id: "clermontferrand", name: "Clermont-Ferrand", image: "https://www.europavox.com/wp-content/uploads/2022/12/EVX-Clermont-2023-c-YannCabello.jpg" },
  { id: "amiens", name: "Amiens", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2U0GDEBxyLQAynKtEgVh7UIf3z1Rzq-HZw&s" },
  { id: "besancon", name: "Besançon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxsjkFZYa41VXoIQaCFnGXvdxIxnATkGf5g&s" },
  { id: "metz", name: "Metz", image: "https://explore-grandest.com/app/uploads/2021/06/festival-decibulles-2017-laurent-khram-longvixay-1440x800.jpg" },
  { id: "perpignan", name: "Perpignan", image: "https://europebookings.com/wp-content/uploads/electrobeach-music-festival-fireworks.jpg" },
  { id: "orleans", name: "Orléans", image: "https://static01.nyt.com/images/2019/04/24/arts/24jazzfest-walkup10/merlin_153884196_6ac2e392-a7a1-4e85-be3c-3ad2940fa0fc-superJumbo.jpg" },
  { id: "caen", name: "Caen", image: "https://www.choosenormandy.com/app/uploads/iris-images/1062/Festival-Beauregard-caen-calvados-530x0.jpg" },
  { id: "nancy", name: "Nancy", image: "https://woody.cloudly.space/app/uploads/nancy/2023/05/thumbs/nancyphonies-2023-bandeau-640x360.jpg" },
  { id: "rouen", name: "Rouen", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGskGnVK5ORtKeGVRHiG1LY1r-DjbNiMsrw&s" },
  { id: "arles", name: "Arles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhbJiwIR8NnH4QeNeyryhY2xyAXoadGQPpA&s" }
];
// About.jsx
const musicUrl = "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3";


export default function Cities() {
  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <h2>🎶 Villes du festival</h2>
      <p>Sélectionnez une ville pour découvrir sa programmation !</p>
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
              <button style={{ marginBottom: "10px" }}>Voir le festival</button>
            </Link>
          </div>
        ))}
      </div>
      <Confetti width={window.innerWidth} height={window.innerHeight} colors={["#cf3487", "#ffff79"]} />
    </div>
  );
}

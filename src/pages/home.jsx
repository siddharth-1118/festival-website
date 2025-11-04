import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
const imgUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=1600&q=80";
const musicUrl = "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3";

const highlights = [
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fit=crop&w=600&q=80",
    caption: "La foule de Lyon en fête",
  },
  {
    src: "https://ontherecordmag.com/wp-content/uploads/2025/05/EDITED-2-600x400.jpg",
    caption: "Jam Artistique : Jean Dupont",
  },
  {
    src: "https://thumbs.dreamstime.com/b/crowd-enjoying-sunset-summer-music-festival-large-people-cheering-raising-their-hands-capturing-s-lively-326116438.jpg",
    caption: "Ambiance au coucher du soleil",
  },
];

function BackgroundMusic() {
  const audioRef = useRef();
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.22;
  }, []);
  return (
    <audio
      src={musicUrl}
      autoPlay
      loop
      ref={audioRef}
      style={{ display: "none" }}
    />
  );
}

export default function Home() {
  const headlineRef = useRef();
  useEffect(() => {
    const el = headlineRef.current;
    if (el) {
      el.animate(
        [
          { transform: "scale(0.8) rotate(-7deg)", opacity: 0.0 },
          { transform: "scale(1.07) rotate(2deg)", opacity: 1.0 },
          { transform: "scale(1) rotate(0deg)", opacity: 1.0 }
        ],
        { duration: 1450, easing: "ease-out" }
      );
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        height: "100vh",
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "white",
        position: "relative",
        fontFamily: "Oswald, Montserrat, Arial, sans-serif",
        overflow: "auto",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <BackgroundMusic />
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(32, 12, 52, 0.72)",
          zIndex: 1
        }}
      />
      <main
        style={{
          zIndex: 2,
          width: "100vw",
          height: "100vh",
          minHeight: "100vh",
          position: "relative",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section
          ref={headlineRef}
          style={{
            width: "100vw",
            maxWidth: "none",
            background: "rgba(0,0,0,0.52)",
            borderRadius: 0,
            boxShadow: "0 0 60px #442c9c",
            textAlign: "center",
            margin: "0",
            padding: "58px 0 18px 0",
          }}
        >
          <h1 className="shimmer" style={{
            fontSize: "3.7rem", color: "#FFD700",
            marginBottom: "18px", fontWeight: "bold", letterSpacing: "2px", marginTop: "1500px"
          }}>
            Festival de Musique Française 2025
          </h1>
          <h2 style={{
            fontSize: "2.38rem", color: "#37dea6",
            fontWeight: "bold", marginBottom: "25px"
          }}>
            🎶 Célébrez la musique et la lumière de la France !
          </h2>
          <div style={{
            fontSize: "1.33rem", marginBottom: "22px", color: "#f5e7ff", textShadow: "0 1px 18px #111"
          }}>
            <b>Du 21 juin au 5 août • 30+ villes • 100+ artistes</b><br />
            Des nuits inoubliables avec concerts, parades lumineuses, ateliers, et gastronomie.
          </div>
          <div style={{
            margin: "34px 0 18px 0", fontSize: "1.23rem", color: "#b8f3dc", background: "#22182540",
            padding: "13px 0"
          }}>
            <b>Histoire du Festival :</b> <br />
            Lancé en 2001 à Paris, ce festival unit désormais plus de 30 villes chaque été, rassemblant familles et talents venus de tous horizons.
          </div>
          <div style={{
            marginBottom: 28, fontSize: "1.20rem", color: "#ffeae0", background: "#442c9c1f",
            padding: "13px 0"
          }}>
            <b>Pourquoi participer ?</b><br />
            Plus qu'une fête : chaque culture, chaque style et chaque sourire contribue à créer la légende. La musique rassemble, guérit et inspire.
          </div>
          <ul style={{
            textAlign: "left",
            fontSize: "1.14rem",
            margin: "0 auto 26px auto",
            maxWidth: 710,
            color: "#ebe7c3",
            background: "#432fa670", padding: "20px 48px",
            lineHeight: "2.0", borderRadius: 14, fontWeight: 600
          }}>
            <li><b>100+ artistes sur scène :</b> légendes et nouveaux talents.</li>
            <li>Parades et spectacles lumineux chaque soir.</li>
            <li>Ateliers interactifs : devenez actrice/acteur du festival !</li>
            <li>Gastronomie locale : stands de vin, fromage, crêpes sucrées.</li>
            <li>Ouvert à tous : familles, amis, visiteurs du monde entier.</li>
            <li>Quiz musical en direct : testez vos connaissances et gagnez des lots.</li>
            <li>Votez pour vos performances préférées — le public décide !</li>
          </ul>
        </section>
        <section
          style={{
            width: "100vw",
            background: "rgba(21,16,33,0.7)",
            padding: "25px 0 22px 0"
          }}
        >
          <h3 style={{ color: "#FFD700", margin: "12px 0 24px 0", fontSize: "1.49rem" }}>Temps forts du festival</h3>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px", padding: "0 30px", justifyContent: "center", alignItems: "center"
          }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ background: "#3d277a", borderRadius: 12, boxShadow: "0 2px 24px #442c4c55", minHeight: 220 }}>
                <img src={h.src} alt={h.caption} style={{
                  width: "100%", height: "170px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0"
                }} />
                <div style={{ color: "#fff", fontSize: "1.13rem", padding: "14px 14px 11px 14px", fontWeight: 500 }}>{h.caption}</div>
              </div>
            ))}
          </div>
        </section>
        <section
          style={{
            width: "100vw",
            background: "rgba(21,16,33,0.8)",
            padding: "28px 0 15px 0"
          }}
        >
          <h3 style={{ color: "#37dea6", margin: "18px 0 4px 0", fontSize: "1.21rem" }}>Clips & Performances d'artistes</h3>
          <div style={{
            display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", marginBottom: "16px"
          }}>
            <iframe
              width="320"
              height="180"
              src="https://www.youtube.com/embed/oHg5SJYRHA0"
              title="Clip artiste"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "20px" }}
            />
            <iframe
              width="320"
              height="180"
              src="https://www.youtube.com/embed/LsoLEjrDogU"
              title="Highlight Clip"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div style={{
            color: "#ebe7c3", fontSize: "1.13rem", fontStyle: "italic", textAlign: "center", marginTop: "8px"
          }}>
            « La musique donne une âme à l’univers, des ailes à l’esprit, un envol à l’imagination et la vie à tout. »
          </div>
        </section>
        <nav
          style={{
            margin: "42px auto 14px auto", display: "flex", justifyContent: "center", gap: "20px"
          }}
        >
          <Link to="/cities">
            <button style={{
              background: "#37dea6",
              color: "#fff",
              border: "none",
              borderRadius: "28px",
              fontWeight: "bold",
              fontSize: "1.18rem",
              padding: "18px 40px",
              cursor: "pointer",
              boxShadow: "0 2px 18px #442c4c"
            }}>
              Villes participantes
            </button>
          </Link>
          <Link to="/musicians">
            <button style={{
              background: "#FFD700",
              color: "#442c9c",
              border: "none",
              borderRadius: "28px",
              fontWeight: "bold",
              fontSize: "1.18rem",
              padding: "18px 40px",
              cursor: "pointer",
              boxShadow: "0 2px 18px #442c4c"
            }}>
              Musiciens
            </button>
          </Link>
        </nav>
        <footer style={{
          color: "#ebe7c3",
          fontSize: "1.09rem",
          marginTop: "16px",
          background: "#3d277a4c",
          padding: "35px 0 24px 0",
          width: "100vw"
        }}>
          © 2025 Festival de Musique Française | Tous droits réservés
        </footer>
      </main>
      <Confetti width={window.innerWidth} height={window.innerHeight} colors={["#cf3487", "#ffff79"]} />
    </div>
  );
}

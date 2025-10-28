import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const featuredArtists = [
  { name: "Jean Dupont", img: "https://www.rollingstone.com/wp-content/uploads/2021/02/DSF5585-1.jpg" },
  { name: "Marie Leclerc", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOAs3YDJ2D-ezommE2yHTAGuKHmWSKUKXw&s" },
  { name: "Pierre Martin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJwb5LLZET7w2hvhmsvyiiIUpWo4XytV9Dw&s" }
];

function ArtistCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setI((i + 1) % featuredArtists.length), 2800);
    return () => clearTimeout(timer);
  }, [i]);
  const artist = featuredArtists[i];
  return (
    <div
      className="fade-in"
      style={{
        background: "rgba(0,0,0,0.55)",
        padding: "24px 16px",
        borderRadius: "20px",
        maxWidth: "400px",
        margin: "32px auto",
        transition: "opacity 1s"
      }}
    >
      <img
        src={artist.img}
        alt={artist.name}
        style={{ width: "70px", height: "70px", borderRadius: "50%", marginBottom: "10px", boxShadow: "0 0 20px #30DEA2" }}
      />
      <h3 style={{ color: "#FFD700", fontSize: "22px", fontWeight: "bold", margin: "0" }}>{artist.name}</h3>
      <div style={{ color: "#eee", fontSize: "16px" }}>
        Artiste en vedette
      </div>
    </div>
  );
}

const soundURL = "https://cdn.pixabay.com/audio/2022/07/26/audio_121b2d4d97.mp3"; // Replace with your custom sound if desired

export default function Home() {
  const heroRef = useRef();
  const [parallax, setParallax] = useState(0);
  const audioRef = useRef(new Audio(soundURL));

  // Parallax scrolling
  useEffect(() => {
    function handleScroll() {
      if (heroRef.current) {
        setParallax(window.scrollY / 2);
      }
      // Fade-in logic
      document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100)
          el.style.opacity = 1;
      });
    }
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('.fade-in').forEach(el => { el.style.opacity = 0; });
    setTimeout(() => document.querySelectorAll('.fade-in').forEach(el => { el.style.opacity = 1; }), 150);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Play sound effect on button click
  function playSound() {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden",
      color: "white",
      position: "relative"
    }}>
      <div>about page</div>
      {/* Video background hero */}
      <video
        ref={heroRef}
        src="/festival-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw", height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.6)"
        }}
      />
      {/* Parallax hero title */}
      <div style={{
        position: "relative",
        zIndex: 2,
        marginTop: `calc(60px + ${parallax}px)`,
        textAlign: "center",
        transition: "margin-top 0.2s"
      }}>
        <h1 style={{
          fontSize: "70px",
          fontWeight: "bold",
          color: "#30DEA2",
          marginBottom: "8px",
          letterSpacing: "2px",
          textShadow: "0 6px 26px #222"
        }}>
          Festival de musique 2025
        </h1>
        <h2 style={{
          fontSize: "38px",
          fontWeight: "bold",
          margin: "18px 0",
          letterSpacing: "1px",
          textShadow: "0 2px 14px #212121"
        }}>
          🎶 Plongez dans la magie de la musique française!
        </h2>
      </div>
      <ArtistCarousel />

      {/* Festival description */}
      <div style={{
        position: "relative",
        zIndex: 2,
        margin: "68px auto 24px auto",
        maxWidth: "750px",
        background: "rgba(0,0,0,0.45)",
        borderRadius: "28px",
        padding: "36px 30px",
        boxShadow: "0 8px 30px rgba(50,0,30,0.18)"
      }} className="fade-in">
        <p style={{ fontSize: "20px", marginBottom: "16px", color: "#eee" }}>
          Venez vivre une expérience musicale exceptionnelle au cœur de la France ! Le Festival français de la musique vous propose une variété de concerts uniques, des artistes renommés et des jeunes talents sur les plus grandes scènes de tout le pays.
        </p>
        <ul style={{ textAlign: "left", fontSize: "18px", margin: "0 auto", maxWidth: "500px", marginBottom: "18px" }}>
          <li>Plus de 100 artistes et groupes représentés</li>
          <li>Spectacles de lumière et animations interactives</li>
          <li>Stands de gastronomie pour découvrir les saveurs locales</li>
          <li>Rencontres et ateliers avec les musiciens</li>
          <li>Une fête populaire rassemblant passionnés, familles et touristes</li>
        </ul>
        <p style={{ fontSize: "22px", lineHeight: "1.5", textAlign: "center" }}>
          Rejoignez-nous du <span style={{ color: "#FFD700", fontWeight: "bold" }}>21 juin</span> au <span style={{ color: "#FFD700", fontWeight: "bold" }}>5 août</span> pour une série de nuits inoubliables partout en France.
        </p>
        <p style={{ fontSize: "18px", textAlign: "center" }}>
          Concerts live, spectacles, gastronomie et rencontres musicales vous attendent dans plus de <span style={{ color: "#FFD700", fontWeight: "bold" }}>30 villes</span> !
        </p>
      </div>
      
      {/* CTA */}
      <div style={{
        position: "relative",
        zIndex: 2,
        marginBottom: "40px",
        textAlign: "center"
      }} className="fade-in">
        <p style={{ fontSize: "20px", marginBottom: "24px", color: "#FFD700", fontWeight: "bold" }}>
          N'attendez plus : réservez vos billets et embarquez pour une aventure musicale qui restera gravée dans vos souvenirs.
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          flexWrap: "wrap"
        }}>
          <Link to="/tickets">
            <button
              style={{
                background: "#FFD700",
                color: "#212121",
                fontWeight: "bold",
                fontSize: "20px",
                padding: "15px 32px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,0,0,0.22)",
                transition: "background 0.3s, color 0.3s"
              }}
              onClick={playSound}
              onMouseOver={e => { e.target.style.background = "#30DEA2"; e.target.style.color = "#fff"; }}
              onMouseOut={e => { e.target.style.background = "#FFD700"; e.target.style.color = "#212121"; }}
            >
              🎟️ Réserver un billet
            </button>
          </Link>
          <Link to="/musicians">
            <button
              style={{
                background: "#30DEA2",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "20px",
                padding: "15px 32px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,0,0,0.22)",
                transition: "background 0.3s, color 0.3s"
              }}
              onClick={playSound}
              onMouseOver={e => { e.target.style.background = "#FFD700"; e.target.style.color = "#212121"; }}
              onMouseOut={e => { e.target.style.background = "#30DEA2"; e.target.style.color = "#fff"; }}
            >
              🎤 Musiciens
            </button>
          </Link>
          <Link to="/cities">
            <button
              style={{
                background: "#212121",
                color: "#FFF",
                fontWeight: "bold",
                fontSize: "20px",
                padding: "15px 32px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,0,0,0.22)",
                transition: "background 0.3s, color 0.3s"
              }}
              onClick={playSound}
              onMouseOver={e => { e.target.style.background = "#FFD700"; e.target.style.color = "#212121"; }}
              onMouseOut={e => { e.target.style.background = "#212121"; e.target.style.color = "#FFF"; }}
            >
              🏙️ Villes participantes
            </button>
          </Link>
        </div>
      </div>
      <p style={{ fontSize: "16px", fontStyle: "italic", color: "#ddd", marginBottom: "30px", zIndex: 2, position: "relative" }}>
        Ne manquez pas cette célébration annuelle du son et de la culture en France!
      </p>
    </div>
  );
}

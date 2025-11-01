import React, { useRef, useEffect, useState } from "react";

const imgUrl = process.env.PUBLIC_URL + "/image.jpg";
const musicUrl = "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3";

// Information for each section
const sections = [
  {
    title: "Origine & Histoire",
    content: "Fondé en 2001, le Festival de Musique Française puise ses racines dans la tradition de la Fête de la Musique, invitant tous les styles et générations à se réunir. D’abord organisé à Paris, il rayonne aujourd’hui dans plus de 30 villes, soutenant jeunes artistes et grandes stars, mêlant patrimoine et innovation."
  },
  {
    title: "Programme & Scènes",
    content: "Des concerts sur les places historiques, dans les parcs, et même dans des trains et bateaux ! La programmation inclut pop, jazz, classique, folk, électronique, et surprises inédites chaque soir. Les scènes sont conçues pour l’immersion totale, avec installations lumière et son de pointe."
  },
  {
    title: "Musiciens & Artistes",
    content: "Chaque année, plus de 100 musiciens se produisent : groupes émergents, stars internationales, collectifs traditionnels et artistes multidisciplinaires. Des collaborations inédites, des rencontres avec le public et la mise en avant d’artistes locaux sont au cœur du festival."
  },
  {
    title: "Expériences et Ateliers",
    content: "Participez à des ateliers de musique, de danse, d’écriture, d’improvisation ou de cuisine. Apprenez à jouer d’un instrument, découvrez l’envers du décor des spectacles et développez votre créativité dans des masterclass menées par des professionnels reconnus."
  },
  {
    title: "Festival Responsable",
    content: "Le festival s’engage pour la durabilité : éco-scènes, cuisine locale, tri des déchets, mobilité douce, et accessibilité pour les personnes à mobilité réduite. Chaque participant contribue à l’impact positif et à la magie collective des rencontres musicales."
  }
];

export default function About() {
  const fadeRef = useRef();
  useEffect(() => {
    if (fadeRef.current) {
      fadeRef.current.animate(
        [{ opacity: 0, transform: "translateY(60px)" }, { opacity: 1, transform: "none" }],
        { duration: 900, easing: "ease" }
      );
    }
  }, []);

  // State for opened sections (accordion)
  const [openSection, setOpenSection] = useState(-1);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(124deg,#2a1a36 60%,#36b7b5 100%)",
      color: "white",
      padding: "60px 0 30px 0",
      textAlign: "center"
    }}>
      <div
        ref={fadeRef}
        style={{
          background: "rgba(30,10,50,0.82)",
          boxShadow: "0 8px 48px #22182596",
          borderRadius: 30,
          padding: "52px 28px",
          maxWidth: 640,
          margin: "auto"
        }}
      >
        <h1 style={{ color: "#FFD700", marginBottom: 20, fontSize: "2.4rem", letterSpacing: 2 }}>
          À propos du Festival de Musique Française
        </h1>
        {/* Audio background music */}
        <audio
          controls
          src={musicUrl}
          style={{
            width: "84%",
            margin: "12px auto 22px auto",
            background: "#fff",
            borderRadius: "10px"
          }}
        >
          Votre navigateur ne supporte pas l'audio.
        </audio>
        <p style={{ fontSize: "1.18rem", margin: "22px 0", color: "#efe3b5" }}>
          Depuis 2001, le Festival de Musique Française rassemble les passionnés de musique du monde entier pour une <b>célébration magique du son, de la culture et de la communauté</b>. Organisé dans plus de 30 villes et villages à travers la France, notre festival transforme les rues urbaines et les lieux historiques en une scène vibrante.
        </p>
        <ul style={{
          textAlign: "left",
          fontSize: "1.1rem",
          margin: "22px auto 16px auto",
          maxWidth: 460,
          color: "#c8f5dc",
          lineHeight: 1.7,
          padding: "0 0 0 20px"
        }}>
          <li><b>Musique & Diversité :</b> Plus de 100 artistes, des légendes aux talents de demain.</li>
          <li><b>Spectacles :</b> Jeux de lumière, spectacles de danse, concerts en plein air, performances de rue, et bien plus encore !</li>
          <li><b>Ateliers & Rencontres :</b> Rencontrez des musiciens, participez à des ateliers musicaux, et partagez votre passion.</li>
          <li><b>Cuisine Française :</b> Goûtez à la gastronomie française — vin, mets locaux et douceurs à chaque étape.</li>
          <li><b>Pour Tous :</b> Familles, touristes, fans de musique, nouveaux amis : tout le monde est le bienvenu !</li>
        </ul>
        <div style={{ margin: "28px 0 16px 0", color: "#ebe7c3", fontSize: "1.06rem", fontStyle: "italic" }}>
          « La musique donne une âme à l’univers, des ailes à l’esprit, un envol à l’imagination et la vie à tout. »
        </div>
        <p style={{ fontSize: "1.08rem", color: "#edeede", marginBottom: "0" }}>
          Rejoignez-nous du <span style={{ color: "#FFD700" }}>21 juin</span> au <span style={{ color: "#FFD700" }}>5 août</span> — créons ensemble des souvenirs inoubliables !
        </p>
        {/* Accordion sections */}
        <div style={{ marginTop: "42px", marginBottom: "8px" }}>
          {sections.map((section, idx) => (
            <div key={idx} style={{
              borderRadius: 18,
              margin: "16px 0",
              background: openSection === idx ? "rgba(110,200,205,0.35)" : "rgba(80,55,120,0.24)",
              boxShadow: "0 2px 16px #22182529",
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
              transition: "background .2s"
            }}>
              <button
                onClick={() => setOpenSection(openSection === idx ? -1 : idx)}
                style={{
                  width: "100%",
                  padding: "16px 22px",
                  fontSize: "1.22rem",
                  background: "none",
                  color: "#FFD700",
                  border: "none",
                  textAlign: "left",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: 1,
                  transition: "color .2s"
                }}
              >
                {section.title}
                <span style={{
                  float: "right",
                  fontWeight: 500,
                  color: "#efe3b5"
                }}>
                  {openSection === idx ? "▲" : "▼"}
                </span>
              </button>
              {/* Expanding content */}
              <div style={{
                maxHeight: openSection === idx ? "400px" : "0px",
                overflow: "hidden",
                fontSize: "1.08rem",
                color: "#c8f5dc",
                background: "none",
                padding: openSection === idx ? "16px 24px" : "0 24px",
                opacity: openSection === idx ? 1 : 0,
                transition: "all .38s cubic-bezier(.44,2.3,.28,1.2)"
              }}>
                {openSection === idx && section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={imgUrl}
        alt="Festival"
        style={{
          marginTop: "44px",
          borderRadius: "18px",
          boxShadow: "0 6px 38px #000b",
          width: "min(85vw, 540px)",
          maxHeight: "360px",
          objectFit: "cover",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      />
    </div>
  );
}

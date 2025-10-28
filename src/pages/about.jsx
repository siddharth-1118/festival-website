import React, { useRef, useEffect } from "react";

const imgUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=1600&q=80";

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
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        background: `linear-gradient(124deg,#2a1a36 55%,#36b7b5 100%), url(${imgUrl}) center/cover no-repeat`,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        ref={fadeRef}
        style={{
          width: "100vw",
          maxWidth: "none",
          minHeight: "100vh",
          background: "rgba(30,10,50,0.92)",
          boxShadow: "0 8px 48px #22182596",
          borderRadius: 0,
          padding: "0",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{
          width: "100vw",
          padding: "60px 15vw 24px 15vw",
          boxSizing: "border-box"
        }}>
          <h1 style={{
            color: "#FFD700", marginBottom: 18, fontSize: "3rem", letterSpacing: 2, fontWeight: 700
          }}>
            About the French Music Festival
          </h1>
          <div style={{
            marginBottom: 28, marginTop: 12, fontSize: "1.28rem", color: "#b8f3dc", maxWidth: "900px", marginInline: "auto"
          }}>
            <b>History:</b> <br />
            The French Music Festival began in 2001 as a single-city celebration inspired by the <i>Fête de la Musique</i>, expanding each year to unify music lovers across France and the world. Today, it lights up over 30 cities, immersing streets and grand squares in music, creativity, and joy for nearly a million attendees.
          </div>
          <div style={{
            marginBottom: 24, marginTop: 8, fontSize: "1.21rem", color: "#ffeae0", maxWidth: "900px", marginInline: "auto"
          }}>
            <b>Importance:</b> <br />
            More than a series of concerts, the festival champions <b>diversity, connection and artistic freedom</b>. It fosters international collaboration, highlights regional French culture, and brings together families, friends, and strangers through universal harmony. Whether you're performing, listening, or sharing, you're part of a moment that makes music history.
          </div>
          <ul style={{
            textAlign: "left",
            fontSize: "1.15rem",
            margin: "30px auto 24px auto",
            maxWidth: 670,
            color: "#c8f5dc",
            lineHeight: 1.9,
            paddingLeft: 20,
            background: "#2a1a36ba",
            borderRadius: "18px"
          }}>
            <li><b>Music & Diversity:</b> 100+ artists, legendary stars and future icons.</li>
            <li><b>Spectacles:</b> Light shows, open-air concerts, street dance, and spontaneous performances.</li>
            <li><b>Workshops & Encounters:</b> Meet artists, join workshops, and share in creativity.</li>
            <li><b>Cuisine Française:</b> Enjoy signature French food, wine, and desserts at every location.</li>
            <li><b>For Everyone:</b> Families, tourists, locals—all are welcome in the musical family!</li>
          </ul>
          <div style={{
            margin: "36px 0 16px 0", color: "#ebe7c3", fontSize: "1.18rem", fontStyle: "italic"
          }}>
            “Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.”
          </div>
          <p style={{
            fontSize: "1.18rem", color: "#edeede", marginBottom: "0", marginTop: "30px"
          }}>
            Join us from <span style={{ color: "#FFD700" }}>June 21</span> to <span style={{ color: "#FFD700" }}>August 5</span>—let's create unforgettable memories!
          </p>
        </div>
      </div>
    </div>
  );
}

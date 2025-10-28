import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Use this image address (it’s your attached image in /public folder)
const imgUrl = process.env.PUBLIC_URL + "/image.jpg";

export default function Home() {
  const headlineRef = useRef();
  
  // Animate the headline on mount
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
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Oswald, Montserrat, Arial, sans-serif"
      }}
    >
      {/* Soft overlay for text readability */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(32, 12, 52, 0.72)",
          zIndex: 1
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          ref={headlineRef}
          style={{
            background: "rgba(0,0,0,0.56)",
            borderRadius: "32px",
            padding: "44px 40px 54px 40px",
            maxWidth: "650px",
            margin: "60px 0 18px 0",
            boxShadow: "0 0 60px #442c9c",
            textAlign: "center"
          }}
        >
          <h1
            style={{
              fontSize: "3.3rem",
              color: "#FFD700",
              marginBottom: "20px",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            French Music Festival 2025
          </h1>
          <h2 style={{
            fontSize: "2.1rem",
            color: "#37dea6",
            fontWeight: "bold",
            marginBottom: "23px"
          }}>
            🎶 Celebrate the Sound and Light of France!
          </h2>
          <p style={{
            fontSize: "1.19rem",
            marginBottom: "12px",
            color: "#f5e7ff",
            textShadow: "0 1px 18px #111"
          }}>
            From <b>21 June to 5 August</b> join 30+ French cities to discover world-class concerts, 
            live artists, famous musicians, dazzling light shows, and gourmet food. Experience music, culture, and much more!
          </p>
          <ul style={{
            textAlign: "left",
            margin: "20px auto",
            fontSize: "1.10rem",
            maxWidth: "420px",
            color: "#ebe7c3",
            lineHeight: "1.7",
            paddingLeft: "0"
          }}>
            <li>• Over 100 artists and groups live</li>
            <li>• Interactive light parades nightly</li>
            <li>• Stands serve French food & wine</li>
            <li>• Music workshops & family events</li>
            <li>• Celebrate with people from everywhere!</li>
          </ul>
          <div style={{
            marginTop: "36px",
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap"
          }}>
            <Link to="/about">
              <button style={{
                background: "#FFD700",
                color: "#222",
                border: "none",
                borderRadius: "22px",
                fontWeight: "bold",
                fontSize: "1.13rem",
                padding: "16px 32px",
                cursor: "pointer",
                margin: "6px",
                boxShadow: "0 2px 18px #442c4c",
                transition: "all 0.2s"
              }}>
                About
              </button>
            </Link>
            <Link to="/cities">
              <button style={{
                background: "#37dea6",
                color: "#fff",
                border: "none",
                borderRadius: "22px",
                fontWeight: "bold",
                fontSize: "1.13rem",
                padding: "16px 32px",
                cursor: "pointer",
                margin: "6px",
                boxShadow: "0 2px 18px #442c4c",
                transition: "all 0.2s"
              }}>
                Cities
              </button>
            </Link>
            <Link to="/contact">
              <button style={{
                background: "#442c9c",
                color: "#fff",
                border: "none",
                borderRadius: "22px",
                fontWeight: "bold",
                fontSize: "1.13rem",
                padding: "16px 32px",
                cursor: "pointer",
                margin: "6px",
                boxShadow: "0 2px 18px #442c4c",
                transition: "all 0.2s"
              }}>
                Contact
              </button>
            </Link>
          </div>
        </div>
        <footer
          style={{
            color: "#ebe7c3",
            fontSize: "1rem",
            marginTop: "60px"
          }}>
          © 2025 French Music Festival | All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div 
        style={{
          backgroundImage: "url(https://gotstubs.com/wp-content/uploads/2023/05/live-concert-performance-with-yellow-light-show-big-crowd-cheering.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "130vh",
          textAlign: "center",
          color: "white",
          paddingTop: "100px"
        }}
      >
        <h1 style={{ fontSize: "100px", fontWeight: "bold", marginTop: "20px", color: "green" }}>Music festival</h1>
        <h2 style={{ fontSize: "48px", fontWeight: "bold", marginTop: "190px" }}>🎶 French Festival of Music</h2>
        <p style={{ marginTop: "30px", fontSize: "18px", color: "white" }}>
          Join us on 21 July for an unforgettable night!
        </p>

        {/* ✅ Button that goes to Tickets.jsx */}
        <Link to="/tickets">
          <button 
            style={{
              marginTop: "50px",
              padding: "15px 30px",
              fontSize: "18px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#ff4081",
              color: "white",
              cursor: "pointer"
            }}
          >
            🎟️ Get Tickets
          </button>
        </Link>
          <Link to="/musicians">
            <button style={{ margin: "10px", padding: "15px 30px", fontSize: "18px" }}>🎤 Musicians</button>
          </Link>
          <Link to="/contact">
            <button style={{ margin: "10px", padding: "15px 30px", fontSize: "18px" }}>📩 Contact Us</button>
          </Link>
          </div>
    </>
  );
}

import { useParams, Link } from "react-router-dom";

const musicians = {
  1: { name: "Jean Dupont", bio: "A French jazz guitarist with 15 years of experience.", img: "/images/m1.jpg" },
  2: { name: "Marie Leclerc", bio: "An amazing vocalist known for her soulful performances.", img: "/images/m2.jpg" },
  3: { name: "Pierre Martin", bio: "A talented violinist blending classical and modern styles.", img: "/images/m3.jpg" }
};

export default function MusicianDetail() {
  const { id } = useParams();
  const musician = musicians[id];

  if (!musician) return <h2>Musician not found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <img 
        src={musician.img} 
        alt={musician.name} 
        style={{ width: "250px", height: "250px", borderRadius: "50%", objectFit: "cover" }}
      />
      <h1 style={{ marginTop: "20px" }}>{musician.name}</h1>
      <p style={{ fontSize: "18px", marginTop: "15px" }}>{musician.bio}</p>

      <Link to="/musicians">
        <button style={{ marginTop: "30px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          ⬅ Back to Musicians
        </button>
      </Link>
    </div>
  );
}

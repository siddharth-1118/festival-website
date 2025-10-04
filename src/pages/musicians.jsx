import { Link } from "react-router-dom";

const musicians = [
  { id: 1, name: "Jean Dupont", img: "https://i.ebayimg.com/images/g/DqYAAMXQNo5TZPmu/s-l1600.jpg" },
  { id: 2, name: "Marie Leclerc", img: "https://i.ebayimg.com/images/g/DqYAAMXQNo5TZPmu/s-l1600.jpg" },
  { id: 3, name: "Pierre Martin", img: "https://i.ebayimg.com/images/g/DqYAAMXQNo5TZPmu/s-l1600.jpg" }
];

export default function Musicians() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🎤 Meet Our Musicians</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {musicians.map((musician) => (
          <Link key={musician.id} to={`/musicians/${musician.id}`} style={{ textDecoration: "none" }}>
            <div>
              <img 
                src={musician.img} 
                alt={musician.name} 
                style={{
                  width: "200px", 
                  height: "200px", 
                  borderRadius: "50%", 
                  objectFit: "cover", 
                  cursor: "pointer"
                }} 
              />
              <p style={{ color: "white", marginTop: "10px" }}>{musician.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

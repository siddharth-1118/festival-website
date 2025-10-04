import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page home">
      <h2>🎶 French Festival of Music</h2>
      <p>Celebrate with us on <b>21 July 2025</b></p>
      <Link to="/tickets">
        <button className="btn">Get Tickets</button>
      </Link>
    </div>
  );
}

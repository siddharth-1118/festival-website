import React, { useState, useEffect } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissions, setSubmissions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  // About.jsx
const musicUrl = "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3";


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ sheet: "Contact", ...formData })
    })
      .then(() => {
        setSubmitted(true);
        fetchSubmissions();
        setFormData({ name: "", email: "", message: "" });
      });
  }

  const fetchSubmissions = () => {
    fetch("?sheet=Contact")
      .then(res => res.json())
      .then(data => setSubmissions(data));
  };

  // call fetchSubmissions on component mount
  useEffect(() => { fetchSubmissions(); }, []);

  return (
    <div className="page">
      {!submitted ? (
        <>
          <h2>Contactez-nous</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Votre e-mail" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Votre message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button className="btn" type="submit">Envoyer le message</button>
          </form>
        </>
      ) : (
        <div className="confirmation">
          <h2>🎉 Message envoyé !</h2>
          <button className="btn" onClick={() => setSubmitted(false)}>Envoyer un autre</button>
        </div>
      )}

      {/* Display all submissions */}
      {submissions.length > 0 && (
        <div className="submissions-list">
          <h3>Toutes les réponses :</h3>
          <ul>
            {submissions.map((s, i) => (
              <li key={i}>
                {s.name} | {s.email} | {s.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

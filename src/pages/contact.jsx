import React, { useState, useEffect } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissions, setSubmissions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

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
          <h2>Contact Us</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button className="btn" type="submit">Send Message</button>
          </form>
        </>
      ) : (
        <div className="confirmation">
          <h2>🎉 Message sent!</h2>
          <button className="btn" onClick={() => setSubmitted(false)}>Send Another</button>
        </div>
      )}

      {/* Display all submissions */}
      {submissions.length > 0 && (
        <div className="submissions-list">
          <h3>All Submissions:</h3>
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


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
            <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
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
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>


// src/pages/Tickets.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Tickets() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  // EmailJS credentials (use environment variables if possible)
  const SERVICE_ID = "service_zzgy9ct";
  const TEMPLATE_ADMIN = "template_w7c1xzl";
  const TEMPLATE_USER = "template_1jzh78a";
  const PUBLIC_KEY = "3Ypomrf7V7bVnsxSO";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      user_phone: formRef.current.user_phone.value,
      ticket_type: formRef.current.ticket_type.value,
      to_email: formRef.current.user_email.value, // for the user template
    };

    // Step 1: Send details to you (admin)
    emailjs.send(SERVICE_ID, TEMPLATE_ADMIN, templateParams, PUBLIC_KEY)
      .then(() => {
        // Step 2: Send confirmation to user (auto-reply)
        return emailjs.send(SERVICE_ID, TEMPLATE_USER, templateParams, PUBLIC_KEY);
      })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
      });
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <h2>🎟️ Book Your Tickets</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Full Name" required /><br /><br />
        <input type="email" name="user_email" placeholder="Email" required /><br /><br />
        <input type="tel" name="user_phone" placeholder="Phone" required /><br /><br />
        <select name="ticket_type" required>
          <option value="">Select Ticket Type</option>
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
        </select><br /><br />
        <button type="submit">Submit</button>
      </form>

      {status === "sending" && <p>⏳ Sending...</p>}
      {status === "success" && <p>✅ Your ticket request has been sent! Check your email for confirmation.</p>}
      {status === "error" && <p>❌ Something went wrong. Please try again.</p>}
    </div>
  );
}

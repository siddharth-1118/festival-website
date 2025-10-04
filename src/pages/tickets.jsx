import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Tickets() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketType: "",
    quantity: 1,
    Payment: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_zzgy9ct",     // from EmailJS
      "template_w7c1xzl",    // from EmailJS
      formData,
      "3Ypomrf7V7bVnsxSO"      // from EmailJS
    )
    .then(() => {
      alert("🎉 Ticket details sent to your email!");
      setFormData({ name: "", email: "", phone: "", ticketType: "", quantity: 1 });
    })
    .catch((error) => {
      console.error("Email send error:", error);
      alert("❌ Failed to send details.");
    });
  };

  return (
    <div className="tickets-page">
      <h2>Book Your Ticket</h2>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type="text" name="name" placeholder="Full Name" 
          value={formData.name} onChange={handleChange} required 
        />
        <input 
          type="email" name="email" placeholder="Email Address" 
          value={formData.email} onChange={handleChange} required 
        />
        <input 
          type="tel" name="phone" placeholder="Phone Number" 
          value={formData.phone} onChange={handleChange} required 
        />
        <select 
          name="ticketType" value={formData.ticketType} 
          onChange={handleChange} required
        >
          <option value="">Select Ticket Type</option>
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
        </select>
        <input 
          type="number" name="quantity" min="1" 
          value={formData.quantity} onChange={handleChange} required 
        />
        <select name="PaymentMethod" id="">
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
        </select>
        <button type="submit" style={{ backgroundColor: "yellow", color: "black", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
}

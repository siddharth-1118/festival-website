// src/pages/Tickets.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const musicUrl = "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3";
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
      <h2>🎟️ Réservez vos billets</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Nom complet" required /><br /><br />
        <input type="email" name="user_email" placeholder="E-mail" required /><br /><br />
        <input type="tel" name="user_phone" placeholder="Téléphone" required /><br /><br />
        <select name="ticket_type" className="big-placeholder" required>
          <option value="">Sélectionnez le type de billet</option>
          <option value="Regular">Régulier</option>
          <option value="VIP">VIP</option>
        </select><br /><br />
        <input type="number" name="ticket_quantity" placeholder="Nombre de billets" required /><br /><br />
        <input type="text" name="user_message" placeholder="Des demandes particulières ?" /><br /><br />
        <select name="city" id="">
          <option value="">Sélectionnez une ville</option>
          <option value="paris">Paris</option>
          <option value="lyon">Lyon</option>
          <option value="marseille">Marseille</option>
          <option value="toulouse">Toulouse</option>
          <option value="avignon">Avignon</option>
          <option value="cannes">Cannes</option>
          <option value="menton">Menton</option>
          <option value="nice">Nice</option>
          <option value="bordeaux">Bordeaux</option>
          <option value="strasbourg">Strasbourg</option>
          <option value="nantes">Nantes</option>
          <option value="montpellier">Montpellier</option>
          <option value="rennes">Rennes</option>
          <option value="lille">Lille</option>
          <option value="grenoble">Grenoble</option>
          <option value="dijon">Dijon</option>
          <option value="angers">Angers</option>
          <option value="nimes">Nîmes</option>
          <option value="saintetienne">Saint-Étienne</option>
          <option value="tours">Tours</option>
          <option value="clermontferrand">Clermont-Ferrand</option>
          <option value="amiens">Amiens</option>
          <option value="besancon">Besançon</option>
          <option value="metz">Metz</option>
          <option value="perpignan">Perpignan</option>
          <option value="orleans">Orléans</option>
          <option value="caen">Caen</option>
          <option value="nancy">Nancy</option>
          <option value="rouen">Rouen</option>
          <option value="arles">Arles</option>
        </select><br /><br />
        <select name="payment_method" id="">
          <option value="">Sélectionnez le mode de paiement</option>
          <option value="credit_card">Carte bancaire</option>
          <option value="paypal">PayPal</option>
          <option value="bank_transfer">Virement bancaire</option>
        </select><br /><br />
        <button type="submit" className="btn submit-btn shimmer">Envoyer</button>
      </form>

      {status === "sending" && <p>Votre demande est en cours d'envoi...</p>}
      {status === "success" && <p>✅ Votre demande de billet a été envoyée ! Vérifiez votre e-mail pour la confirmation.</p>}
    </div>
  );
}

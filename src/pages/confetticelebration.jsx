// ConfettiButton.jsx
import React, { useState } from "react";
import Confetti from "react-confetti";

const ConfettiButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    // Stop confetti after 4 seconds
    setTimeout(() => setIsActive(false), 4000);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          padding: "1rem 2rem",
          borderRadius: "8px",
          background: "linear-gradient(90deg, #e66465, #9198e5)",
          color: "white",
          fontSize: "1.2rem",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}>
        Celebrate!
      </button>
      {isActive && <Confetti />}
    </div>
  );
};

export default ConfettiButton;

import React from "react";
import { Button } from "react-bootstrap";

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Replace the phone number and message with your desired values
    const phoneNumber = "9389140712"; // Replace with your WhatsApp phone number
    const message = "Hello!"; // Replace with your desired message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      style={{
        position: "fixed",
        bottom: "20px",
        left: "1250px",
        width: "50px",
        height: "50px",
        borderRadius: "30px",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleWhatsAppClick}
    >
      <i
        className="ri-whatsapp-line"
        style={{ fontSize: "40px", color: "white" }}
        aria-hidden="true"
      ></i>
    </Button>
  );
};

export default WhatsApp;

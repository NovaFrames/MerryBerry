// WhatsAppButton.jsx
import React from "react";

export default function WhatsAppButton({
  phone = "9715768735", // e.g. "919876543210"
  message = "Hello! I found your site and would like to chat.", // default message
  icon = "https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-pic-0.png", // your whatsapp icon link
  size = 80, // px (will map to tailwind-friendly sizes via inline style)
}) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-200  flex items-center justify-center hover:scale-105 transition-transform duration-200"
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={icon}
        alt="WhatsApp"
        style={{ width: size * 0.8, height: size * 0.8 }}
        className="object-contain"
      />
    </a>
  );
}

import React, { useState } from "react";

export default function FloatingSocialMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Social Icons Menu */}
      {open && (
        <div className="mb-3 flex flex-col items-center space-y-3 animate-fadeIn">
          <a
            href="https://www.instagram.com/merryberry.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href="https://wa.me/9715768735?text=Hello%20sir%20,%20I%20visited%20your%20website%20and%20can%20I%20speak%20about%20Merry%20Berry"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/716/480/non_2x/whatsapp-icon-free-png.png"
              alt="WhatsApp"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href="https://www.facebook.com/vinoth.merryberry"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
              alt="Facebook"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href="mailto:franchise@merryberry.co.in"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <img
              src="https://img.favpng.com/3/19/25/gmail-icon-gmail-logo-in-iconic-colors-YnPpAcfN_t.jpg"
              alt="Email"
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-yellow-600 shadow-xl flex items-center justify-center text-white text-2xl hover:bg-yellow-700 transition cursor-pointer"
      >
        <h1 className="text-4xl">{open ? "×" : "+"}</h1>
      </button>
    </div>
  );
}

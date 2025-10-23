import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-2">© {new Date().getFullYear()} Merry Berry</div>
        <div className="text-sm text-gray-300">Join our growing family — sweet business, strong returns.</div>
      </div>
    </footer>
  );
}
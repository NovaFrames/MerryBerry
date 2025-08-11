import { Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";


export default function Footer() {
  return (
    <footer className="relative bg-[#fff9f0] pt-20 pb-8">
      {/* Curve Border */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] sm:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff9f0"
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,69.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Logo & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="IceLab Logo"
              className="w-12 h-12"
            />
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">
              Merry Berry
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-[#f4a025] p-2 rounded-full text-white hover:bg-[#e38f1d]"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="bg-[#f4a025] p-2 rounded-full text-white hover:bg-[#e38f1d]"
            >
              <Instagram />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 relative">
            Quick Link
            <span className="block w-10 h-[2px] bg-[#f4a025] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Franchise</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 relative">
            Useful Links
            <span className="block w-10 h-[2px] bg-[#f4a025] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Term & Condition</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 relative">
            Work Hours
            <span className="block w-10 h-[2px] bg-[#f4a025] mt-1"></span>
          </h3>
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <Clock className="text-[#f4a025]" />
            Everyday 10 AM - 9 PM
          </div>
          <p className="text-gray-600 mb-4">
            A wonderful serenity has taken possession of my entire soul
          </p>
          <button className="bg-[#f4a025] text-white py-2 px-5 rounded-full hover:bg-[#e38f1d]">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-sm">
        Ice Cream Shop Template Kit by Jegtheme <br />
        Copyright © 2021. All rights reserved.
      </div>
    </footer>
  );
}

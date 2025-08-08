import React from 'react';
import c1 from '../assets/career/c1.png'
import c2 from '../assets/career/c2.png'
import c3 from '../assets/career/c3.png'

export default function IceCreamIntro() {
  return (
    <section className="relative bg-[url('https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/09/wooden_panels-copy-2@2x.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full overflow-hidden">
      {/* Left Ice Cream Image */}
      <img
        src={c2}
        alt="Chocolate Ice Cream"
        className="absolute left-0 bottom-0 w-70 md:w-90 z-0"
      />

      {/* Right Ice Cream Image */}
      <img
        src={c3}
        alt="Vanilla Ice Cream"
        className="absolute right-0 top-0 w-70 md:w-90  z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
            Delicious ice cream, made from<br />
            <span className="text-black">our very own organic milk</span>
          </h1>
          <p className="text-base md:text-xl text-gray-800 leading-relaxed font-light">
            Twenty five years ago, we set out to create top-notch ice cream, using the organic milk
            made on our farm in Erbistock, a little village hidden away amongst the gentle hills of
            North East Wales. We soon converted a little barn and from it, eagerly worked towards our
            goal; to make a family of ice creams that would be second to none in their taste and
            creamy texture.
          </p>
        </div>
      </div>
    </section>
  );
}

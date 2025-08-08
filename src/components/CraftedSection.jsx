import React from "react";

export default function IceCreamStory() {
  return (
    <section className="relative bg-[url('https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/09/wooden_panels-copy-2@2x.jpg')] bg-cover bg-center text-center px-4 py-20 md:py-32">
      {/* Left Ice Cream Image */}

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        {/* Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/685/685352.png"
          alt="Ice Cream Icon"
          className="w-12 h-12 mx-auto mb-6"
        />

        {/* Paragraphs */}
        <p className="text-lg md:text-xl leading-relaxed text-[#2e2e2e] mb-6 font-light">
          We soon converted a little barn into a shiny new facility and from it, eagerly
          worked towards our goal; to make a family of ice creams that would be second to
          none in their taste and creamy texture.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-[#2e2e2e] mb-6 font-light">
          Organic milk, fresh double cream and cane sugar all come together to craft the
          most delicious ice cream we think you’ll ever taste. We’re obsessed with
          creating the most heavenly ice cream, using the natural flavours of vanilla,
          dark chocolate, roasted nuts and fresh seasonal fruits.
        </p>

        {/* Final Statement */}
        <p className="text-xl md:text-2xl font-bold mt-8 text-[#2e2e2e]">
          Woodlands of Erbistock Ice Cream. Blended together with love to create<br />
          proper dairy ice cream.
        </p>
      </div>
    </section>
  );
}

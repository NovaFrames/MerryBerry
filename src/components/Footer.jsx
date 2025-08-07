import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {

    return (
        <>
            <div className="bg-black text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-xl text-gray-300">
              Let’s connect — we’re just a message away from making something delicious together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: ["+91 9876543210", "Mon-Sat: 9 AM - 7 PM"],
              },
              {
                icon: Mail,
                title: "Email Us",
                content: ["franchise@merryberry.co.in", "We respond within 24 hours"],
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: ["MerryBerry Corporate Office", "Mumbai, India"],
              },
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl w-fit mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2 sm:mb-4">
                    {contact.title}
                  </h4>
                  {contact.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-sm sm:text-lg text-gray-300">
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
        </>
    )
}

export default Footer;
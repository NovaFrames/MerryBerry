import React from "react";
import { CheckCircle2, Clock, Store, FileSignature, MapPin, Users, Sparkles } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    { title: "Submit Enquiry", icon: <CheckCircle2 className="w-5 h-5" />, desc: "Fill out our quick franchise enquiry form." },
    { title: "Initial Discussion", icon: <Clock className="w-5 h-5" />, desc: "Our team connects to discuss your goals & investment." },
    { title: "Location Approval", icon: <MapPin className="w-5 h-5" />, desc: "We help evaluate and finalize your store location." },
    { title: "Franchise Agreement", icon: <FileSignature className="w-5 h-5" />, desc: "Sign the official franchise partnership agreement." },
    { title: "Store Setup", icon: <Store className="w-5 h-5" />, desc: "Our experts assist in complete outlet setup and branding." },
    { title: "Staff Training", icon: <Users className="w-5 h-5" />, desc: "Comprehensive training for your team by our professionals." },
    { title: "Grand Opening", icon: <Sparkles className="w-5 h-5" />, desc: "Launch your outlet with our marketing & event support." },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Franchise Process <span className="text-amber-500">Timeline</span>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Line connector (desktop) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-yellow-300 opacity-40" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center md:w-[14%] group"
            >
              {/* Circle with icon */}
              <div
                className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white shadow-md group-hover:scale-110 transition-transform duration-300"
              >
                {step.icon}
              </div>

              {/* Step number */}
              <div className="mt-3 text-sm font-semibold text-amber-600">
                Step {index + 1}
              </div>

              {/* Title */}
              <div className="mt-1 text-base font-bold text-gray-800">
                {step.title}
              </div>

              {/* Description */}
              {/* <div className="mt-1 text-sm text-gray-600 px-3 md:px-0">
                {step.desc}
              </div> */}

              {/* Connector for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-[2px] h-10 bg-amber-200 my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

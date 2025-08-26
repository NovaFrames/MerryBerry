import React, { useState } from "react";

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How many flavors are available?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        },
        {
            question: "How long will ice cream last in the fridge?",
            answer:
                "Ice cream can typically last for about 2–3 months in the freezer if stored properly in an airtight container."
        },
        {
            question: "Where is this shop located?",
            answer:
                "We are located at 123 Main Street, Erode, Tamil Nadu. You can also order online from our website."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
                <p className="text-[#f4a025] font-semibold mb-2">FAQ</p>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Question About Us
                </h2>
                <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>

            {/* Right FAQ Section */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="rounded-xl shadow-sm transition bg-[#fdfaf3]"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold ${openIndex === index ? "bg-[#eca536] text-white" : "bg-[#fdfaf3]"
                                }`}
                        >
                            {faq.question}
                            <span>
                                {openIndex === index ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M14.77 12.79a.75.75 0 01-1.06-.02L10 9.06l-3.71 3.71a.75.75 0 11-1.06-1.06l4.24-4.25a.75.75 0 011.06 0l4.24 4.25a.75.75 0 01.02 1.06z"
                                            clipRule="evenodd"
                                        />

                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>

                        {/* Smooth Expandable Answer */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0"
                                }`}
                        >
                            <p className="text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;

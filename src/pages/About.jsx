import React, { useState } from 'react';
import { Heart, Clock, Users, CheckCircle2, Award, ChefHat, IceCream, 
  Lightbulb,  
  Shield, 
  MapPin,
  Menu,
  TrendingUp,
  Star,
  DollarSign,
 } from 'lucide-react';
import Footer from '../components/Footer';
import ice from '../assets/home/16.png'
import milkshake from '../assets/Icecreams/milkshake.png'
import chicken from '../assets/Icecreams/chicken.png'
import burger from '../assets/home/108.png'
import one from '../assets/special/3.jpg'
import two from '../assets/special/5.jpg'
import three from '../assets/special/6.jpg'
import four from '../assets/special/6.png'

const About = () => {
  const values = [
    {
      icon: <IceCream className="w-8 h-8 text-yellow-500" />,
      title: "Artisanal Quality",
      description: "Every scoop of ice cream is handcrafted with premium ingredients, and every piece of chicken is seasoned with our secret blend.",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "Fresh Daily",
      description: "We make our ice cream fresh every morning and hand-bread our chicken throughout the day for the perfect crunch.",
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: "Made with Love",
      description: "Every order is prepared with care by our passionate team who believe food should bring joy to your day.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Award Winning",
      description: "Recognized as 'Best Unique Dining Experience' three years running by the Local Food Awards.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-yellow-50">

      {/* === 1. Hero Section === */}
      <section className="relative overflow-hidden bg-black/50 text-white">
        {/* Background images overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-4 h-full">
            {/* Replace with your own images if needed */}
            {[
              'photo-1571091718767-18b5b1457add',
              'photo-1497034825429-c343d7c6a68f',
              'photo-1562967914-608f82629710',
              'photo-1576506295286-5cda18df43e7'
            ].map((id, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`}
                className="w-full h-full object-cover"
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-40 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            About <span className="text-yellow-300">Merry Berry</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Where crispy meets creamy, and every bite is a celebration of flavor
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {[ChefHat, IceCream, Heart].map((Icon, i) => (
              <div
                key={i}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Icon className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-fuchsia-100">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:flex items-center gap-10">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-extrabold tracking-wider mb-4 text-center text-yellow-500 uppercase">
              Our Story
            </h2>
            <p className="text-black/70 mb-6 text-xl ">
              Merry Berry Icecream is your destination for delicious indulgence, offering a wide range of ice creams, sundaes, shakes, fried chicken, burger and mouthwatering add-on snacks like veg burgers and sandwiches. Since opening our doors in April 2023, we have quickly grown and currently operate 3 outlets in Salem, with 4 more outlets in progress across South India-including Bangalore, Chennai, and Erode-as part of our expanding franchise model. With a focus on quality, innovation, and customer satisfaction, we take pride in serving over 50+ varieties of ice cream sundaes, delivering a delightful experience with every scoop. Whether you're a fan of classic flavors or looking for something new and exciting, Merry Berry Icecream has something for everyone!


            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={ice}
              alt="Ice Cream Cones"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* === 3. Values Section === */}
      <section className="bg-[#fff9f0] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Special</h2>
            <p className="text-lg text-gray-600">Our commitment to quality and community</p>
          </div>

          {/* Image Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Fresh Daily",
                caption: "Made every morning",
                src: one
              },
              {
                title: "Perfect Crunch",
                caption: "24-hour brined chicken",
                src: two
              },
              {
                title: "Artisan Flavors",
                caption: "Unique combinations",
                src: three
              },
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={item.src}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-2 transition-all"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fuchsia-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Values Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-pink-600">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do at Merry Berry
            </p>
          </div>

          {/* Values Content */}
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            {/* Values Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-pink-400 p-1">
                  <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                    <div className="text-center">
                      <img src={chicken} alt="Chicken" />
                    </div>
                  </div>
                </div>
                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 bg-pink-400 rounded-full p-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-400 rounded-full p-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Values List */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Quality First</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to using only the finest ingredients in our ice creams and snacks, ensuring every bite delivers an exceptional experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We continually explore new flavors, sundaes, and food combinations to bring exciting, fresh creations to our customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Customer Delight</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our goal is to not just satisfy but delight every customer with friendly service, a welcoming atmosphere, and delectable treats.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Integrity</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in transparency and honesty in all our operations, maintaining ethical practices with our customers, partners, and employees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Community-Centric</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We remain rooted in the communities we serve, fostering strong local partnerships and supporting regional growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-yellow-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Merits Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-600">Merits</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              What makes Merry Berry the perfect choice for your sweet cravings
            </p>
          </div>

          {/* Merits Content */}
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            {/* Merits List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <Menu className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Diverse Menu</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Offering over 50+ varieties of ice cream sundaes and a range of delicious snacks, we cater to a wide array of tastes and preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Franchise Growth</h4>
                  <p className="text-gray-600 leading-relaxed">
                    With successful outlets in Salem and franchises across South India, we offer lucrative business opportunities with a proven model for growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Customer Loyalty</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We have built a strong and loyal customer base through exceptional service, consistently high-quality products, and an inviting dining experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Profitability</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We operate with a solid profit margin, making it a profitable venture for franchisees while offering affordable indulgence for customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                  <Award className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Trusted Brand</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our focus on quality, customer satisfaction, and innovation has positioned us as a trusted and rapidly growing brand in the food and beverage industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Merits Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-yellow-300 p-1">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <div className="text-center">
                    <img src={burger} alt="Burger" />
                  </div>
                </div>
              </div>
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-full p-3">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fuchsia-100 relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 items-center gap-10">

            {/* Left Founder */}
            <div className="text-center">
              <h2 className="text-black text-3xl font-bold mb-6 hidden md:block">Founder</h2>
              <h2 className="text-black text-3xl font-bold mb-6 md:hidden">Meet our Founders</h2>
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">S</span>
              </div>
              <h3 className="text-black font-bold text-2xl">Sarah Johnson</h3>
              <p className="text-yellow-400 font-semibold mb-3">
                Ice Cream Artisan & Co-Founder
              </p>
              <p className="text-black text-lg leading-relaxed">
                Former pastry chef with 15 years of experience, Sarah brings her passion for creating
                unique frozen treats that complement our savory offerings perfectly.
              </p>
            </div>

            {/* Middle Image */}
            <div className="flex justify-center">
              <img
                src={four}
                alt="Milkshake"
                className="max-h-[400px] object-contain"
              />
            </div>

            {/* Right Founder */}
            <div className="text-center">
              <h2 className="text-black text-3xl font-bold mb-6 hidden md:block">Co-Founder</h2>
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">M</span>
              </div>
              <h3 className="text-black font-bold text-2xl">Mike Chen</h3>
              <p className="text-yellow-400 font-semibold mb-3">
                Chicken Master & Co-Founder
              </p>
              <p className="text-black text-lg leading-relaxed">
                Growing up in his family’s restaurant, Mike learned the secrets of perfect fried chicken.
                His innovative approach creates the crispiest, most flavorful chicken in town.
              </p>
            </div>

          </div>
        </div>
      </section>






      {/* === 5. Footer Section === */}
      <Footer />
    </div>
  );
};

export default About;

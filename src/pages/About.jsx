import React, { useState } from 'react';
import { Heart, Clock, Users, CheckCircle2 , Award, ChefHat, IceCream } from 'lucide-react';
import Footer from '../components/Footer';
import about from '../assets/about/about.png'
import about2 from '../assets/about/about2.png'

const About = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: "Our Beginning",
      content:
        "It all started in 2018 when Sarah and Mike discovered the perfect pairing of crispy fried chicken and creamy ice cream during a late-night food adventure. What seemed like an unusual combination became our signature experience.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "The Perfect Recipe",
      content:
        "After two years of perfecting our secret blend of spices and crafting artisanal ice cream flavors, we opened our first location. Our chicken is brined for 24 hours and our ice cream is made fresh daily with local ingredients.",
      icon: <ChefHat className="w-6 h-6" />
    },
  ];

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

      {/* === 2. Our Story Section === */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${about})`,
        }}
      >
        {/* Dark overlay with slow opacity transition */}
        <div className="absolute inset-0 bg-black/60 bg-opacity-60 transition-opacity duration-1000 ease-in-out"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto  px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Merry Berry Icecream is your destination for delicious indulgence, offering a wide range of ice creams, sundaes, shakes, fried chicken, burger and mouthwatering add-on snacks like veg burgers and sandwiches. Since opening our doors in April 2023, we have quickly grown and currently operate 3 outlets in Salem, with 4 more outlets in progress across South India-including Bangalore, Chennai, and Erode-as part of our expanding franchise model.
            With a focus on quality, innovation, and customer satisfaction, we take pride in serving over 50+ varieties of ice cream sundaes, delivering a delightful experience with every scoop. Whether you're a fan of classic flavors or looking for something new and exciting, Merry Berry Icecream has something for everyone!
          </p>
        </div>
      </section>




      {/* === 3. Values Section === */}
      <section className="bg-gray-200 py-16">
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
                src: "photo-1551024601-bec78aea704b"
              },
              {
                title: "Perfect Crunch",
                caption: "24-hour brined chicken",
                src: "photo-1562967914-608f82629710"
              },
              {
                title: "Artisan Flavors",
                caption: "Unique combinations",
                src: "photo-1497034825429-c343d7c6a68f"
              },
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={`https://images.unsplash.com/${item.src}?auto=format&fit=crop&w=800&q=80`}
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



      {/* === 4. Team Section === */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${about2})`,
        }}
      >
        {/* Dark overlay with slow opacity */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-60 transition-opacity duration-1000 ease-in-out pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className=" lg:flex justify-around text-center mb-12">
            <h2 className="text-6xl md:text-6xl font-bold text-white mb-4">Meet our</h2>
            <h2 className="text-6xl md:text-6xl font-bold text-white mb-4">Founders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-100 max-w-7xl mx-auto px-4">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Ice Cream Artisan & Co-Founder',
                desc:
                  'Former pastry chef with 15 years of experience, Sarah brings her passion for creating unique frozen treats that complement our savory offerings perfectly.',
                initial: 'S',
              },
              {
                name: 'Mike Chen',
                role: 'Chicken Master & Co-Founder',
                desc:
                  'Growing up in his family’s restaurant, Mike learned the secrets of perfect fried chicken. His innovative approach creates the crispiest, most flavorful chicken in town.',
                initial: 'M',
              }
            ].map((person, i) => (
              <div key={i} className="text-center gap-3">
                <div className="w-32 h-32 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  {person.initial}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{person.name}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{person.role}</p>
                <p className="text-white/80 leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-black text-4xl font-extrabold mb-12">
          VALUES &amp; MERITS
        </h2>

        {/* Content Box */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          {/* Values */}
          <h3 className="text-center text-lg font-semibold mb-6">
            Merry Berry Values
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Quality First:</strong> We are committed to using only
                the finest ingredients in our ice creams and snacks, ensuring
                every bite delivers an exceptional experience.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Innovation:</strong> We continually explore new flavors,
                sundaes, and food combinations to bring exciting, fresh
                creations to our customers.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Customer Delight:</strong> Our goal is to not just
                satisfy but delight every customer with friendly service, a
                welcoming atmosphere, and delectable treats.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Integrity:</strong> We believe in transparency and
                honesty in all our operations, maintaining ethical practices
                with our customers, partners, and employees.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Community-Centric:</strong> We remain rooted in the
                communities we serve, fostering strong local partnerships and
                supporting regional growth.
              </p>
            </li>
          </ul>

          {/* Merits */}
          <h3 className="text-center text-lg font-semibold mt-10 mb-6">
            Merry Berry Merits
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Diverse Menu:</strong> Offering over 50+ varieties of ice
                cream sundaes and a range of delicious snacks, we cater to a
                wide array of tastes and preferences.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Franchise Growth:</strong> With successful outlets in
                Salem and franchises across South India, we offer lucrative
                business opportunities with a proven model for growth.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Customer Loyalty:</strong> We have built a strong and
                loyal customer base through exceptional service, consistently
                high-quality products, and an inviting dining experience.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Profitability:</strong> We operate with a solid profit
                margin, making it a profitable venture for franchisees while
                offering affordable indulgence for customers.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-1" />
              <p>
                <strong>Trusted Brand:</strong> Our focus on quality, customer
                satisfaction, and innovation has positioned us as a trusted and
                rapidly growing brand in the food and beverage industry.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>



      {/* === 5. Footer Section === */}
      <Footer />
    </div>
  );
};

export default About;

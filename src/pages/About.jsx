import React, { useState } from 'react'
import { Heart, Clock, Users, Award, ChefHat, IceCream } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

const About = () => {
  const [activeStory, setActiveStory] = useState(0)
  const navigate = useNavigate()

  const stories = [
    {
      title: "Our Beginning",
      content: "It all started in 2018 when Sarah and Mike discovered the perfect pairing of crispy fried chicken and creamy ice cream during a late-night food adventure. What seemed like an unusual combination became our signature experience.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "The Perfect Recipe",
      content: "After two years of perfecting our secret blend of spices and crafting artisanal ice cream flavors, we opened our first location. Our chicken is brined for 24 hours and our ice cream is made fresh daily with local ingredients.",
      icon: <ChefHat className="w-6 h-6" />
    },
  ]

  const values = [
    {
      icon: <IceCream className="w-8 h-8 text-yellow-500" />,
      title: "Artisanal Quality",
      description: "Every scoop of ice cream is handcrafted with premium ingredients, and every piece of chicken is seasoned with our secret blend."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "Fresh Daily",
      description: "We make our ice cream fresh every morning and hand-bread our chicken throughout the day for the perfect crunch."
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: "Made with Love",
      description: "Every order is prepared with care by our passionate team who believe food should bring joy to your day."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Award Winning",
      description: "Recognized as 'Best Unique Dining Experience' three years running by the Local Food Awards."
    }
  ]

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black/50 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {/* Background Food Images */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-4 h-full">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-40 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            About <span className="text-yellow-300">Merry Berry</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Where crispy meets creamy, and every bite is a celebration of flavor
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce">
              <ChefHat className="w-8 h-8" />
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <IceCream className="w-8 h-8" />
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Heart className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a crazy idea to your favorite neighborhood spot
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 bg-white `}
                onClick={() => setActiveStory(index)}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`p-2 rounded-full text-yellow-500`}>
                    {story.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{story.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Food Images Collage */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Crispy Fried Chicken"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">Golden Crispy</div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Artisanal Ice Cream"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">Creamy Dream</div>
              </div>
            </div>
            <div className="bg-yellow-500 rounded-2xl relative overflow-hidden shadow-2xl transform transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80"
                alt="Artisanal Ice Cream"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">The Magic Combination</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Special</h2>
            <p className="text-lg text-gray-600">Our commitment to quality and community</p>
          </div>

          {/* Featured Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Fresh Ice Cream Making"
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Fresh Daily</h3>
                <p className="text-sm opacity-90">Made every morning</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Crispy Fried Chicken"
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Perfect Crunch</h3>
                <p className="text-sm opacity-90">24-hour brined chicken</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Ice Cream Scoops"
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Artisan Flavors</h3>
                <p className="text-sm opacity-90">Unique combinations</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Founders</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              S
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Sarah Johnson</h3>
            <p className="text-yellow-500 font-semibold mb-4">Ice Cream Artisan & Co-Founder</p>
            <p className="text-gray-600 leading-relaxed">
              Former pastry chef with 15 years of experience, Sarah brings her passion for creating unique frozen treats that complement our savory offerings perfectly.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              M
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Mike Chen</h3>
            <p className="text-yellow-500 font-semibold mb-4">Chicken Master & Co-Founder</p>
            <p className="text-gray-600 leading-relaxed">
              Growing up in his family's restaurant, Mike learned the secrets of perfect fried chicken. His innovative approach creates the crispiest, most flavorful chicken in town.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black/90 text-white py-16 relative overflow-hidden">
        {/* Background Food Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-4 h-full">
            {[...Array(24)].map((_, i) => (
              <img
                key={i}
                src={i % 2 === 0
                  ? "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  : "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                }
                alt=""
                className="w-full h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Magic?</h2>
          <p className="text-xl mb-8 opacity-90">
            Come visit us and discover why Merry Berry has become the talk of the town
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Find Our Locations
            </button>
            <button onClick={()=>navigate('/products')} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              View Our Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
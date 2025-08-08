import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChefHat, IceCream, Heart } from 'lucide-react'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'franchise@merryberry.co.in',
      link: 'franchise@merryberry.co.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 97877 30500',
      link: 'tel:+919787730500'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Raj Towers, Brindavan Rd, near HDFC Bank, Fairlands, Salem, Tamil Nadu 636016',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      link: null
    }
  ]

  return (
    <div className="bg-white">
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
            Get in <span className="text-yellow-300">Touch</span>
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

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-lg border-2 border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-200 rounded-lg group-hover:bg-black group-hover:text-yellow-400 transition-colors duration-300">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-yellow-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-black mb-8">Send us a message</h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <p className="text-yellow-800">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="Enter your Name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Enter your Phone Number"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select Service</option>
                      <option value="Franchise">Franchise</option>
                      <option value="Job">Job</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                      placeholder="Send your message"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.9276771376644!2d78.1453082!3d11.676302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1bfe3701fed%3A0xd93817a4d6fa69a!2sMerry%20Berry!5e1!3m2!1sen!2sin!4v1754483765217!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
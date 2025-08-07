import { motion, useAnimation, useInView } from 'framer-motion';
import { StarIcon, ChevronLeft, ChevronRight, Quote, Instagram, Heart, MessageCircle, Camera } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    rating: 5,
    content: "The perfect combo! Crispy chicken with creamy ice cream is a game changer. My new favorite spot!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    source: "Instagram",
    instaLink: "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
    foodImage: "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZWQlMjBjaGlja2VufGVufDB8fDB8fHww"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Local Guide",
    rating: 4,
    content: "Never thought fried chicken and ice cream would work together, but this place makes magic. The spicy chicken with vanilla soft serve is incredible.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    source: "Instagram",
    instaLink: "https://instagram.com/post2",
    foodImage: "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZWQlMjBjaGlja2VufGVufDB8fDB8fHww"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Food Critic",
    rating: 5,
    content: "The quality is consistently amazing. Their honey butter chicken with salted caramel ice cream is to die for!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    source: "Instagram",
    instaLink: "https://instagram.com/post3",
    foodImage: "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZWQlMjBjaGlja2VufGVufDB8fDB8fHww"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Regular Customer",
    rating: 5,
    content: "Family-friendly with the most innovative flavors. My kids beg to come here every weekend!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    source: "Instagram",
    instaLink: "https://instagram.com/post4",
    foodImage: "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZWQlMjBjaGlja2VufGVufDB8fDB8fHww"
  }
];

const socialPosts = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/600x600/?food1",
    likes: "1.2k",
    comments: "84"
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/600x600/?food2",
    likes: "2.4k",
    comments: "156"
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/600x600/?food3",
    likes: "3.1k",
    comments: "212"
  },
  {
    id: 4,
    image: "https://source.unsplash.com/random/600x600/?food4",
    likes: "890",
    comments: "43"
  }
];

const Rating = ({ stars }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${i < stars ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.8
      }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full border-2 ${isActive ? 'border-amber-300' : 'border-transparent'}`}
    >
      <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-2 rounded-full">
        <Instagram className="w-5 h-5" />
      </div>

      <div className="flex items-start mb-4">
        <div className="mr-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-xs text-gray-500 mb-1">{testimonial.role}</p>
          <Rating stars={testimonial.rating} />
        </div>
      </div>

      <div className="relative mb-4">
        <Quote className="absolute -left-1 -top-2 w-5 h-5 text-amber-200" />
        <p className="text-sm text-gray-600 pl-5">{testimonial.content}</p>
      </div>

      <div className="mt-4 mb-4 rounded-xl overflow-hidden">
        <img
          src={testimonial.foodImage}
          alt="Featured food"
          className="w-full h-32 object-cover"
        />
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
          {testimonial.source}
        </span>
        <a
          href={testimonial.instaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-amber-600 hover:underline"
        >
          View Post
        </a>
      </div>
    </motion.div>
  );
};

const SocialCard = ({ post }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl shadow-md"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={"https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZWQlMjBjaGlja2VufGVufDB8fDB8fHww"}
        alt="Social media post"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white text-center">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              <span className="text-sm">{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="text-sm">{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const isInView = useInView(useRef(), { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-amber-400 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute bottom-0  left-0 right-0 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".5" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Foodie Love on Social
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See why our customers can't stop posting about us
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-amber-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Instagram Feed Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h3 className="inline-flex text-3xl font-extrabold gap-5 text-gray-800 tracking-tight">
              <Camera className='w-15 h-15' /> Stay Connected with Us on Instagram
            </h3>

            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-amber-700"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-semibold">Follow Us</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialPosts.map((post) => (
              <SocialCard key={post.id} post={post} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
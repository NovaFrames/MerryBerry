import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Camera } from 'lucide-react';
import { memo } from 'react';
import insta1 from '../assets/instaGallery/insta1.png';
import insta2 from '../assets/instaGallery/insta2.png';
import insta3 from '../assets/instaGallery/insta3.png';
import insta4 from '../assets/instaGallery/insta4.png';

// ================== DATA ==================
const socialPosts = [
  {
    id: 1,
    image: insta1,
    likes: "95.2k",
    comments: "84",
    link: 'https://www.instagram.com/reel/DNC2HT6ToNQ'
  },
  {
    id: 2,
    image: insta2,
    likes: "373k",
    comments: "156",
    link: 'https://www.instagram.com/reel/DNAw8q1T-H1'
  },
  {
    id: 3,
    image: insta3,
    likes: "15.8k",
    comments: "212",
    link: 'https://www.instagram.com/reel/DM2fxfmTldM'
  },
  {
    id: 4,
    image: insta4,
    likes: "6283",
    comments: "43",
    link: 'https://www.instagram.com/reel/DMz3-HdTxE0'
  }
];

// ================== COMPONENTS ==================
const SocialCard = memo(({ post }) => (
  <div
    className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
    style={{ transform: 'translateZ(0)' }}
    onClick={() => window.open(post.link, '_blank')}
  >
    <img
      src={post.image}
      alt="Social media post"
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-black/30  transition-all duration-300 flex items-center justify-center">
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
  </div>
));

// ================== MAIN SECTION ==================
export default function Testimonials() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-yellow-100 wave-bg overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Foodie Love on Social
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why our customers can't stop posting about us
          </p>
        </motion.div>

        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h3 className="inline-flex text-3xl font-extrabold gap-5 text-gray-800 tracking-tight">
              <Camera className='w-15 h-15' /> Stay Connected with Us on Instagram
            </h3>
            <a
              href="https://www.instagram.com/merryberry.co.in/"
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

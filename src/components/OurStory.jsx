import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import story from '../../public/images/story.png'
import { useNavigate } from "react-router-dom";
const OurStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const navigate = useNavigate();

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-screen flex items-center justify-center scroll-smooth md:bg-none"
      style={{
        backgroundImage:
          window.innerWidth < 768
            ? "url('https://merryberry.co.in/wp-content/uploads/2024/03/A2-Frames-7-Nos-7-1088x1536.png')"
            : "url('https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/09/wooden_panels-copy-2@2x.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Gradient overlay for better text readability */}
      <div className="absolute md:hidden block inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 px-6 py-20 md:py-32 w-full max-w-5xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Decorative element */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-amber-400 rounded-lg rotate-6"></div>
              <div
                className="w-full h-96 bg-amber-50 rounded-lg bg-opacity-10 backdrop-blur-sm border border-amber-200 border-opacity-20 shadow-lg"
                style={{
                  backgroundImage: "url('https://merryberry.co.in/wp-content/uploads/2024/03/A2-Frames-7-Nos-7-1088x1536.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={containerVariants}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-6">
                <span className="text-amber-400 font-medium tracking-widest text-sm uppercase">
                  Since 2024
                </span>
                <div className="w-full h-0.5 bg-amber-400 mt-2"></div>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 md:text-black text-white"
            >
              Our <span className="text-amber-400">Delicious</span> Story
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg md:text-black text-white leading-relaxed">
                Passionate Origins: Merry Berry Ice Cream Sundae's story traces back to the fervent passion of its founder,
                Vinoth, whose love affair with ice cream ignited the inception of the brand.
              </p>

              <p className="text-lg md:text-black text-white leading-relaxed">
                Rai's dedication and innovative spirit led to the creation of delectable sundaes that captivated taste buds
                and sparked joy in every spoonful.
              </p>

              <div className="relative inline-block mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-amber-500 cursor-pointer text-white font-medium rounded-full shadow-lg hover:bg-amber-600 transition-colors"
                  onClick={()=>{navigate('about')}}
                >
                  Discover More
                </motion.button>
                <div className="absolute -z-10 inset-0 bg-amber-400 blur-md opacity-50 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="md:text-black text-white text-4xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
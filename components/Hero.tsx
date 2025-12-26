import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px]" />

      <div className="z-10 text-center px-4 mix-blend-screen" data-hoverable="true">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mb-6 overflow-hidden"
        >
          <span className="inline-block text-xs md:text-sm tracking-[0.5em] uppercase text-neutral-400">
            Graduation Exhibition 2024
          </span>
        </motion.div>

        <h1 className="serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none">
          {["L", "U", "M", "I", "N", "A"].map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1.2,
                delay: i * 0.1 + 0.8,
                ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for exquisite feel
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 text-neutral-500 italic font-light tracking-widest text-sm"
        >
          SCROLL TO ENTER THE VOID
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </section>
  );
};

export default Hero;
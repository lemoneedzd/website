import React from 'react';
import { motion } from 'framer-motion';
import { ARTIST_BIO } from '../constants';

const BioSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-neutral-950 py-24 px-6 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900 to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            {/* Profile Image / Abstract Representation */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                data-hoverable="true"
            >
                <img 
                    src="https://picsum.photos/500/500?grayscale" 
                    alt="Artist Portrait" 
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="serif text-5xl md:text-7xl text-white mb-6"
                >
                    {ARTIST_BIO.name}
                </motion.h2>

                <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-neutral-400 font-light mb-8 italic"
                >
                    {ARTIST_BIO.tagline}
                </motion.h4>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-neutral-300 leading-loose font-light text-justify md:text-left"
                >
                    {ARTIST_BIO.bio.split('\n').map((line, i) => (
                        <p key={i} className="mb-4">{line}</p>
                    ))}
                </motion.div>
            </div>
        </div>

        {/* Contact / Footer Area */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm"
        >
            <p>&copy; 2024 Lumina Exhibition. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors" data-hoverable="true">Instagram</a>
                <a href="#" className="hover:text-white transition-colors" data-hoverable="true">Email</a>
                <a href="#" className="hover:text-white transition-colors" data-hoverable="true">ArtStation</a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
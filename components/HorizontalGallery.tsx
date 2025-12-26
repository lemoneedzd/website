import React, { useRef } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { ARTWORKS } from '../constants';
import { Artwork } from '../types';

interface GalleryCardProps {
  artwork: Artwork;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ artwork, index }) => {
  // Parallax effect: even items move slightly different speed than odd items
  // Note: This is simulated via layout offset in this specific implementation
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      className={`relative group shrink-0 ${isOdd ? 'mt-32' : 'mb-12'} mx-8 md:mx-16`}
      data-hoverable="true"
      whileHover={{ scale: 1.02, y: -10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-sm shadow-2xl bg-neutral-900 w-[70vw] md:w-[400px] lg:w-[500px] aspect-[3/4]">
        {/* Image */}
        <motion.img
          src={artwork.src}
          alt={artwork.title}
          className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
        />
        
        {/* Overlay Info */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }} // This triggers when the card itself is in view, logic handled by css hover essentially
             className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">{artwork.year}</p>
            <h3 className="serif text-3xl text-white mb-1">{artwork.title}</h3>
            <p className="text-sm text-neutral-300 font-light italic">{artwork.description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const HorizontalGallery: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the target container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map vertical scroll (0 to 1) to horizontal translation (1% to -95%)
  // We use a large negative percentage to ensure we scroll through all items
  const x = useTransform(smoothProgress, [0, 1], ["1%", "-85%"]);
  
  // Background parallax
  const bgX = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

  return (
    // The container height determines how "long" the scroll feels. 400vh means users scroll 4 screens height to get through the gallery.
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Subtle background text decoration moving slowly */}
        <motion.div style={{ x: bgX }} className="absolute top-1/4 left-0 whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-bold serif leading-none">THE COLLECTION</span>
        </motion.div>

        {/* The Moving Rail */}
        <motion.div style={{ x }} className="flex gap-4 px-12 md:px-24">
          
          {/* Intro Card */}
          <div className="shrink-0 w-[80vw] md:w-[400px] h-[60vh] flex flex-col justify-center pr-12">
            <h2 className="serif text-5xl md:text-7xl text-white mb-6">Selected<br/>Works</h2>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
              A curated selection of visual experiments. Drag, scroll, and observe. 
              Each piece represents a fragment of a larger narrative about digital entropy.
            </p>
            <div className="mt-8 w-16 h-[1px] bg-white/30"></div>
          </div>

          {/* Art Cards */}
          {ARTWORKS.map((art, index) => (
            <GalleryCard key={art.id} artwork={art} index={index} />
          ))}

          {/* Outro Spacer */}
           <div className="shrink-0 w-[50vw] flex items-center justify-center">
              <span className="serif text-4xl text-neutral-600 italic">Continue Down</span>
           </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
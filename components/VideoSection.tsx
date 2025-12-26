import React from 'react';
import { motion } from 'framer-motion';
import { VIDEO_WORKS } from '../constants';

const VideoSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-black text-white px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 border-l-2 border-white/20 pl-8"
        >
          <h2 className="serif text-5xl md:text-7xl mb-4">Moving Image</h2>
          <p className="text-neutral-400 max-w-lg">Time-based media exploring temporal distortion and loop mechanics.</p>
        </motion.div>

        <div className="space-y-32">
          {VIDEO_WORKS.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-end`}
            >
              {/* Video Player Container */}
              <div 
                className="w-full lg:w-2/3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900 rounded-sm overflow-hidden"
                data-hoverable="true"
              >
                <video 
                  controls 
                  className="w-full h-auto block"
                  poster={`https://picsum.photos/1920/1080?random=${index + 10}`}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="w-full lg:w-1/3 pb-4">
                <span className="block text-xs font-bold text-neutral-500 tracking-widest mb-2">
                  0{index + 1} — {video.year}
                </span>
                <h3 className="serif text-4xl mb-4">{video.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
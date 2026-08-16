import React from 'react';
import { motion } from 'framer-motion';
import { useIsHanoonHaaniDomain } from '../utils/domainConfig';

export const HeroSection: React.FC = () => {
  const isHanoonHaani = useIsHanoonHaaniDomain();

  const scrollToNext = () => {
    const el = document.getElementById('nikkah-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full min-h-[560px] sm:min-h-[640px] h-[100vh] max-h-[820px] flex flex-col items-center justify-between py-4 xs:py-6 sm:py-8 px-4 overflow-hidden bg-[#FDFBF7]"
      style={{
        background: 'radial-gradient(55% 55% at 50% 50%, rgba(253, 202, 133, 0) 0%, rgba(253, 202, 133, 0.08) 100%)'
      }}
    >
      {/* Golden Arch Frame - Positioned snugly around the inner text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <div className="relative w-[440px] xs:w-[460px] md:w-[520px] max-w-none aspect-[1/1.26] flex items-center justify-center -mx-16">
          <motion.img 
            src="/images/hero/hero_gold_frame.png" 
            alt="Gold Arch Frame" 
            className="w-full h-full object-contain filter drop-shadow-xs select-none scale-115 md:scale-115"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
 
      {/* Main Content inside the Frame - Snug & tight around the frame */}
      <div className="z-10 my-auto flex flex-col items-center justify-center w-full max-w-[300px] text-center py-1 gap-12 xs:gap-13 sm:gap-15 select-none">
        
        {/* Top Blessing Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center pt-0"
        >
          <p 
            className="font-mona font-normal text-[12px] text-[#684818] uppercase text-center"
            style={{
              letterSpacing: '0.14em',
              lineHeight: '140%',
            }}
          >
            WITH BLESSING<br />OF ALLAH
          </p>
        </motion.div>
 
        {/* Couple Names in Great Vibes Cursive Script */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="flex flex-col items-center justify-center gap-5"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="font-vibes font-normal text-[78px] text-[#4D300E] text-center leading-[100%]"
            style={{ letterSpacing: '0%' }}
          >
            {isHanoonHaani ? 'Hanoon' : 'Haani'}
          </motion.h1>
 
          <motion.span 
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
            }}
            className="font-vibes font-normal text-[40px] text-[#684818] text-center leading-[100%] my-[-4px]"
          >
            and
          </motion.span>
 
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="font-vibes font-normal text-[78px] text-[#4D300E] text-center leading-[100%]"
            style={{ letterSpacing: '0%' }}
          >
            {isHanoonHaani ? 'Haani' : 'Hanoon'}
          </motion.h1>
        </motion.div>
 
        {/* Wedding Date */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="pb-0"
        >
          <p 
            className="font-mona font-normal text-[12px] text-[#684818] text-center"
            style={{
              letterSpacing: '0.12em',
              lineHeight: '100%',
            }}
          >
            22.08.2026
          </p>
        </motion.div>
      </div>
 
      {/* Scroll Down Prompt - Borderless, outline-less transparent button */}
      <motion.button 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToNext}
        className="z-10 flex flex-col items-center gap-1.5 text-[#684818]/80 hover:text-[#684818] transition-colors cursor-pointer group pb-1.5 xs:pb-2.5 sm:pb-3 border-none outline-none focus:outline-none focus:ring-0 focus:border-none focus-visible:outline-none bg-transparent appearance-none"
        aria-label="Scroll to next section"
      >
        <span 
          className="font-jakarta font-normal text-[10px] uppercase text-center"
          style={{
            letterSpacing: '0.40em',
            lineHeight: '100%',
          }}
        >
          SCROLL
        </span>
        
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-3 h-3 flex items-center justify-center opacity-80 group-hover:opacity-100"
        >
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 5.5L11 1" stroke="#684818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
};

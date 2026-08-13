import React from 'react';
import { motion } from 'framer-motion';
import { GoldOrnamentWingLeft, GoldOrnamentWingRight } from './GoldOrnamentDivider';

export const NikkahEventSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps?q=12.096549034118652,75.1937484741211&z=17&hl=en";

  return (
    <section 
      id="nikkah-section"
      className="relative w-full md:w-1/2 py-8 md:py-6 px-4 xs:px-5 flex flex-col items-center justify-center bg-[#FDFBF7] overflow-hidden"
    >
      <div className="w-full max-w-[360px] xs:max-w-[380px] sm:max-w-[400px] flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2 w-full mb-7 xs:mb-8"
        >
          {/* Header Subhead flanked by Gold Wings */}
          <div className="flex items-center justify-center gap-3 xs:gap-4 w-full px-1">
            <GoldOrnamentWingLeft className="w-14 xs:w-16 sm:w-20 h-auto opacity-90 shrink-0" />
            
            <span 
              className="font-mona font-normal text-[11px] xs:text-[12px] text-[#684818] uppercase tracking-[0.14em] whitespace-nowrap"
            >
              THE NIKKAH DAY
            </span>
            
            <GoldOrnamentWingRight className="w-14 xs:w-16 sm:w-20 h-auto opacity-90 shrink-0" />
          </div>

          <h2 className="font-vibes font-normal text-[48px] xs:text-[54px] text-[#4D300E] leading-tight select-none mt-1">
            Save the Date
          </h2>
        </motion.div>

        {/* Nikkah Event Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full max-w-[335px] xs:max-w-[350px] rounded-[28px] xs:rounded-[32px] overflow-hidden flex flex-col items-center text-center border border-[#B8923F]/35 shadow-[0_12px_36px_-6px_rgba(42,20,16,0.12)]"
          style={{
            background: 'linear-gradient(180deg, #FBF2DD 0%, #F0E2C2 100%)'
          }}
        >
          {/* Praying Couple Image - Edge-to-Edge Top Fit */}
          <div className="w-full h-[240px] xs:h-[260px] relative overflow-hidden bg-[#EFE3C3] shrink-0">
            <img 
              src="/images/nikkah/nikkah_praying_couple.png" 
              alt="Praying Couple at Nikkah" 
              className="w-full h-full object-cover object-top select-none block pointer-events-none"
            />
          </div>

          {/* Card Details Container - Generous Padding matching Image 2 */}
          <div className="w-full px-6 xs:px-7 pt-7 xs:pt-8 pb-8 xs:pb-9 flex flex-col items-center text-center">
            
            {/* Ceremony Subhead */}
            <p 
              className="font-mona font-normal text-[10px] xs:text-[10.5px] text-[#684818] uppercase mb-5 xs:mb-6"
              style={{
                letterSpacing: '0.36em',
                lineHeight: '100%',
              }}
            >
              NIKAH CEREMONY AT
            </p>

            {/* Venue Heading */}
            <h3 
              className="font-playfair font-medium text-[34px] xs:text-[38px] text-[#4D300E] leading-[1.15] mb-6 xs:mb-7"
              style={{ letterSpacing: '0px' }}
            >
              Bride’s<br />Residency
            </h3>

            {/* Date Details */}
            <div className="flex items-center justify-center gap-2 mb-2.5 xs:mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#89541C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-mona text-[13px] xs:text-[13.5px] font-normal text-[#684818]">
                Saturday, 22 Aug 2026
              </span>
            </div>

            {/* Time & Location Details */}
            <div className="flex items-center justify-center gap-4 xs:gap-5 text-[12px] xs:text-[12.5px] font-mona font-normal text-[#684818] mb-6 xs:mb-7">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#89541C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                10:00 AM
              </span>
              
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#89541C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Payyanur, Kannur
              </span>
            </div>

            {/* Open In Map Button */}
            <motion.a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full max-w-[210px] xs:max-w-[220px] h-[42px] xs:h-[44px] rounded-full bg-[#89541C] text-white font-inter font-medium text-[13px] xs:text-[13.5px] tracking-[0.35px] flex items-center justify-center shadow-[0_4px_14px_rgba(137,84,28,0.25)] hover:bg-[#724314] transition-colors cursor-pointer no-underline"
              style={{ color: '#FFFFFF' }}
            >
              <span style={{ color: '#FFFFFF' }}>Open in map</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};




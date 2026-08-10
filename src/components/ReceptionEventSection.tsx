import React from 'react';
import { motion } from 'framer-motion';

export const ReceptionEventSection: React.FC = () => {
  const mapUrl = "https://maps.google.com/?q=Eripram,Kannur,Kerala";

  return (
    <section 
      id="reception-section"
      className="relative w-full py-14 xs:py-18 sm:py-22 px-5 flex flex-col items-center justify-center bg-[#FDFBF7] overflow-hidden"
    >
      <div className="w-full max-w-sm flex flex-col items-center text-center gap-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2.5"
        >
          {/* RECEPTION AT Subhead */}
          <p 
            className="font-mona font-normal text-[10px] text-[#684818] uppercase"
            style={{
              letterSpacing: '0.36em',
              lineHeight: '100%',
            }}
          >
            RECEPTION AT
          </p>

          {/* Groom's Residency Title */}
          <h2 
            className="font-playfair font-medium text-[36px] text-[#4D300E] leading-[40px]"
            style={{ letterSpacing: '0px' }}
          >
            Groom’s<br />Residency
          </h2>
        </motion.div>

        {/* Event Details */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-3 text-[#4D300E]"
        >
          {/* Date */}
          <div className="flex items-center justify-center gap-2">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#89541C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-mona text-[13px] font-normal text-[#684818]">
              Saturday, 22 Aug 2026
            </span>
          </div>

          {/* Time & Location */}
          <div className="flex items-center justify-center gap-3 text-[12px] font-mona font-normal text-[#684818]">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#89541C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              12:30 PM Onwards
            </span>

            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#89541C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Eripram, Kannur
            </span>
          </div>

          {/* Open In Map Outline Button */}
          <motion.a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full max-w-[180px] h-[38px] rounded-full bg-white text-[#89541C] border border-[#89541C] font-inter font-medium text-[13px] tracking-[0.35px] flex items-center justify-center shadow-xs hover:bg-[#FBF6EC] transition-colors mt-2 cursor-pointer no-underline"
            style={{ color: '#89541C' }}
          >
            <span style={{ color: '#89541C' }}>Open in map</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

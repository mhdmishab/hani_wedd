import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Disable body scroll when envelope is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Enable scroll once the opening animation is mostly complete
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 1000);

    // Completely remove component from DOM after exit animations
    setTimeout(() => {
      setIsRemoved(true);
      onOpen();
    }, 1600);
  };

  if (isRemoved) return null;

  return (
    <AnimatePresence>
      {!isRemoved && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1008]/80 overflow-hidden cursor-pointer select-none backdrop-blur-md"
          onClick={handleOpen}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Centered Phone/Envelope Frame */}
          <div className="relative w-full max-w-[430px] h-full sm:h-[92vh] sm:max-h-[860px] sm:rounded-2xl sm:shadow-2xl overflow-hidden bg-[#FDFBF7] flex flex-col justify-between z-10">
            {/* Ambient vignette shadow overlay inside the container */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none z-30" />
            
            {/* Top Flap & Wax Seal (Cover Up) */}
            <motion.img
              src="/images/envelope/envelope_cover_up.png"
              alt="Envelope Cover Up"
              className="absolute top-0 left-0 w-full h-auto max-h-[460px] pointer-events-none z-20"
              initial={{ y: 0, opacity: 1 }}
              animate={isOpen ? { y: '-105%', opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            />

            {/* Tap to Open Prompt */}
            {/* {!isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0.4, 0.9, 0.4], y: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-25 flex flex-col items-center justify-center pointer-events-none text-center"
                style={{ top: '63%', left: '50%', transform: 'translateX(-50%)' }}
              >
                <div className="px-5 py-2 rounded-full bg-black/10 border border-[#F2E5C7]/15 backdrop-blur-xs shadow-lg">
                  <span className="font-mona text-[11px] uppercase text-[#F2E5C7] tracking-[0.25em] drop-shadow-sm font-light">
                    Tap to Open
                  </span>
                </div>
              </motion.div>
            )} */}

            {/* Bottom Card & Names (Cover Down) */}
            <motion.img
              src="/images/envelope/envelope_cover_down.png"
              alt="Envelope Cover Down"
              className="absolute bottom-0 left-0 w-full h-auto max-h-[610px] pointer-events-none z-10"
              initial={{ y: 0, opacity: 1 }}
              animate={isOpen ? { y: '105%', opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

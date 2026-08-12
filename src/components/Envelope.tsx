import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen();
    setTimeout(() => {
      setIsRemoved(true);
    }, 4700);
  };

  if (isRemoved) {
    return null;
  }

  // Fraction of the screen height each cover occupies at rest.
  // Tune these two numbers to match exactly where the seal sits in your design.
  const TOP_HEIGHT = '43%';
  const BOTTOM_HEIGHT = '57%';

  return (
    <AnimatePresence>
      {!isRemoved && (
        <motion.div
          className="
            fixed
            inset-0
            z-40
            flex
            items-center
            justify-center
            bg-[#2B1B12]
            overflow-hidden
            cursor-pointer
            select-none
            backdrop-blur-md
          "
          onClick={handleOpen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* =====================================================
              ENVELOPE FRAME — always full-bleed on mobile,
              card-like only from sm: up
              ===================================================== */}
          <div
            className="
              relative
              w-full
              h-full
              sm:max-w-[430px]
              sm:h-[92dvh]
              sm:max-h-[860px]
              sm:rounded-2xl
              sm:shadow-2xl
              overflow-hidden
              bg-[#FDFBF7]
              z-10
            "
            style={{ height: '100dvh' }}
          >
            {/* Inner vignette */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none z-30" />

            {/* =====================================================
                TOP COVER — fills its zone completely, no gaps
                ===================================================== */}
            <div
              className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-20"
              style={{ height: TOP_HEIGHT }}
            >
              <motion.img
                src="/images/envelope/envelope_cover_up.png"
                alt="Envelope Cover Up"
                className="w-full h-full object-cover object-top"
                initial={{ y: 0 }}
                animate={isOpen ? { y: '-100%' } : { y: 0 }}
                transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* =====================================================
                BOTTOM COVER — fills its zone completely, no gaps
                ===================================================== */}
            <div
              className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-10"
              style={{ height: BOTTOM_HEIGHT }}
            >
              <motion.img
                src="/images/envelope/envelope_cover_down.png"
                alt="Envelope Cover Down"
                className="w-full h-full object-cover object-bottom"
                initial={{ y: 0 }}
                animate={isOpen ? { y: '100%' } : { y: 0 }}
                transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
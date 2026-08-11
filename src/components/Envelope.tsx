import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  /*
   * Keep scrolling disabled while the envelope / verses
   * experience is active.
   */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpen = () => {
    // Prevent multiple clicks
    if (isOpen) return;

    /*
     * Start envelope animation
     */
    setIsOpen(true);

    /*
     * IMPORTANT:
     *
     * Tell App immediately that the envelope was opened.
     *
     * This makes the Verses component appear immediately,
     * while the envelope is STILL opening underneath it.
     */
    onOpen();

    /*
     * Envelope animation is approximately 3.8 seconds.
     *
     * Remove it only after the animation has finished.
     */
    setTimeout(() => {
      setIsRemoved(true);
    }, 4000);
  };

  if (isRemoved) {
    return null;
  }

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
            bg-[#1E1008]/80
            overflow-hidden
            cursor-pointer
            select-none
            backdrop-blur-md
          "
          onClick={handleOpen}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          {/* 
            Envelope Frame
          */}
          <div
            className="
              relative
              w-full
              max-w-[430px]
              h-full
              sm:h-[92vh]
              sm:max-h-[860px]
              sm:rounded-2xl
              sm:shadow-2xl
              overflow-hidden
              bg-[#FDFBF7]
              flex
              flex-col
              justify-between
              z-10
            "
          >
            {/* 
              Very subtle inner vignette.
            */}
            <div
              className="
                absolute
                inset-0
                bg-black/5
                pointer-events-none
                z-30
              "
            />

            {/* =====================================================
                TOP FLAP
                ===================================================== */}

            <motion.img
              src="/images/envelope/envelope_cover_up.png"
              alt="Envelope Cover Up"
              className="
                absolute
                top-0
                left-0
                w-full
                h-auto
                max-h-[460px]
                pointer-events-none
                z-20
              "
              initial={{
                y: 0,
                opacity: 1,
              }}
              animate={
                isOpen
                  ? {
                      /*
                       * Slowly move the top flap upward.
                       */
                      y: '-105%',
                      opacity: 0,
                    }
                  : {
                      y: 0,
                      opacity: 1,
                    }
              }
              transition={{
                /*
                 * Slow cinematic movement
                 */
                duration: 3.8,

                /*
                 * Smooth:
                 *
                 * - gentle beginning
                 * - natural movement
                 * - soft ending
                 */
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* =====================================================
                BOTTOM COVER
                ===================================================== */}

            <motion.img
              src="/images/envelope/envelope_cover_down.png"
              alt="Envelope Cover Down"
              className="
                absolute
                bottom-0
                left-0
                w-full
                h-auto
                max-h-[610px]
                pointer-events-none
                z-10
              "
              initial={{
                y: 0,
                opacity: 1,
              }}
              animate={
                isOpen
                  ? {
                      /*
                       * Slowly move the bottom cover downward.
                       */
                      y: '105%',
                      opacity: 0,
                    }
                  : {
                      y: 0,
                      opacity: 1,
                    }
              }
              transition={{
                /*
                 * Same timing as top flap
                 * so both move together.
                 */
                duration: 3.8,

                /*
                 * Smooth cinematic easing
                 */
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
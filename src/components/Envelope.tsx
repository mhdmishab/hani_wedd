import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsHanoonHaaniDomain } from '../utils/domainConfig';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const isHanoonHaani = useIsHanoonHaaniDomain();

  /*
   * Keep scrolling locked while envelope/verses
   * experience is active.
   */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpen = () => {
    if (isOpen) return;

    /*
     * Start envelope animation.
     */
    setIsOpen(true);

    /*
     * IMPORTANT:
     *
     * Tell App immediately.
     *
     * Verses will appear NOW,
     * while envelope is still opening.
     */
    onOpen();

    /*
     * Envelope animation:
     * 4.5 seconds
     *
     * Give it a little extra time before
     * removing the component.
     */
    setTimeout(() => {
      setIsRemoved(true);
    }, 4700);
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
            overflow-hidden
            cursor-pointer
            select-none
          "
          onClick={handleOpen}
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
        >
          {/* Backdrop Background & Blur Layer (Fades out quickly on open) */}
          <motion.div
            className="
              absolute
              inset-0
              bg-[#1E1008]/80
              backdrop-blur-md
              z-0
            "
            initial={{ opacity: 1 }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
          {/* =====================================================
              ENVELOPE FRAME
              Full-bleed on mobile (100dvh avoids browser-chrome
              jump), card-like from sm: up.
              ===================================================== */}

          <div
            className="
              relative
              w-full
              sm:max-w-[430px]
              sm:h-[92dvh]
              sm:max-h-[860px]
              sm:rounded-2xl
              sm:shadow-2xl
              overflow-hidden
              bg-[#fff]
              flex
              flex-col
              justify-between
              z-10
            "
            style={{ height: '100dvh', maxWidth: 'min(430px, 48dvh)', containerType: 'inline-size' }}
          >
            {/* Inner vignette */}

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
                TOP COVER
                Natural aspect ratio preserved (w-full h-auto,
                no height cap) so the triangular flap shape
                stays intact and scales consistently with the
                bottom cover across all screen widths.
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
                pointer-events-none
                z-20
              "
              initial={{
                y: 0,
              }}
              animate={
                isOpen
                  ? {
                      /*
                       * Only movement.
                       * NO opacity.
                       */
                      y: '-115%',
                    }
                  : {
                      y: 0,
                    }
              }
              transition={{
                duration: 4.5,

                /*
                 * Slow start + smooth movement + gentle finish.
                 */
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* =====================================================
                BOTTOM COVER BLANK
                Natural aspect ratio preserved, same reasoning
                as the top cover.
                ===================================================== */}

            <motion.img
              src="/images/envelope/envelope_cover_down_blank.png"
              alt="Envelope Cover Down"
              className="
                absolute
                bottom-0
                left-0
                w-full
                h-auto
                pointer-events-none
                z-10
              "
              initial={{
                y: 0,
              }}
              animate={
                isOpen
                  ? {
                      /*
                       * Only movement.
                       * NO opacity.
                       */
                      y: '115%',
                    }
                  : {
                      y: 0,
                    }
              }
              transition={{
                duration: 4.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* =====================================================
                NAMES TEXT PNG
                Positioned relative to the top cover's wax seal.
                ===================================================== */}

            <motion.img
              src={isHanoonHaani ? "/images/envelope/envelope_names_hanoon_haani.png" : "/images/envelope/envelope_names.png"}
              alt={isHanoonHaani ? "Hanoon & Haani" : "Haani & Hanoon"}
              className="
                absolute
                left-1/2
                pointer-events-none
                z-[15]
              "
              style={{
                width: '50cqw',
                top: '171.78cqw',
              }}
              initial={{
                y: 0,
                x: '-50%',
              }}
              animate={
                isOpen
                  ? {
                      y: '218.88cqw',
                      x: '-50%',
                    }
                  : {
                      y: 0,
                      x: '-50%',
                    }
              }
              transition={{
                duration: 4.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* =====================================================
                DATE TEXT PNG
                Positioned relative to the top cover's wax seal.
                ===================================================== */}

            <motion.img
              src="/images/envelope/envelope_date.png"
              alt="22.06.2026"
              className="
                absolute
                left-1/2
                pointer-events-none
                z-[15]
              "
              style={{
                width: '25.5cqw',
                top: '181.84cqw',
              }}
              initial={{
                y: 0,
                x: '-50%',
              }}
              animate={
                isOpen
                  ? {
                      y: '218.88cqw',
                      x: '-50%',
                    }
                  : {
                      y: 0,
                      x: '-50%',
                    }
              }
              transition={{
                duration: 4.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
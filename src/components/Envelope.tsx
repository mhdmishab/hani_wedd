import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

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
            bg-[#1E1008]/80
            overflow-hidden
            cursor-pointer
            select-none
            backdrop-blur-md
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
          {/* =====================================================
              ENVELOPE FRAME
              ===================================================== */}

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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
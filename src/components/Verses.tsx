import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface VersesProps {
  onProceed: () => void;
}

export const Verses: React.FC<VersesProps> = ({ onProceed }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onProceed();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [onProceed]);

  return (
    <motion.section
      onClick={onProceed}
      /*
       * IMPORTANT:
       *
       * Do NOT fade the entire Verses screen.
       * It must appear immediately when the envelope
       * starts opening.
       */
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
      }}
      className="
        fixed
        inset-0
        z-[60]
        w-full
        h-[100dvh]
        flex
        flex-col
        justify-between
        items-center
        overflow-hidden
        select-none
      "
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <motion.div
        className="
          absolute
          inset-0
          bg-[#FDFBF7]
          z-0
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 3.2,
          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          TOP ROTATING MANDALA
          
          The PNG is a COMPLETE circular mandala.

          Its center is positioned exactly at the top
          edge of the screen.

          Therefore only the upper half is visible.
          The rest is clipped outside the screen.
      ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[160px]
          overflow-hidden
          pointer-events-none
          z-10
        "
      >
        <motion.img
          src="/images/envelope/full_mandala.png"
          alt="Top Mandala"
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 0.9,
            scale: 1,
            rotate: 360,
          }}
          transition={{
            opacity: {
              duration: 1.2,
              delay: 0.15,
              ease: 'easeOut',
            },
            scale: {
              duration: 1.2,
              delay: 0.15,
              ease: 'easeOut',
            },
            rotate: {
              duration: 50,
              delay: 1.2,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          className="
            absolute
            left-1/2
            top-0
            w-[240px]
            h-[600px]
            max-w-none
            -translate-x-1/2
            -translate-y-1/2
            object-contain
          "
          draggable={false}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* =====================================================
          CENTER VERSE CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-20
          flex-1
          flex
          flex-col
          justify-center
          items-center
          max-w-[300px]
          text-center
          gap-5
          xs:gap-7
          my-auto
          px-4
        "
      >
        {/* Quran Verse */}

        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 0.25,
            ease: 'easeOut',
          }}
          className="
            font-Abhaya Libre Medium
            text-[6px]
            xs:text-[12px]
            sm:text-[15px]
            text-[#4D300E]
            leading-relaxed
            font-medium
          "
        >
          "And of His signs is that He created for you from yourselves mates
          that you may find tranquility in them; and He placed between you
          affection and mercy. Indeed in that are signs for a people who give
          thought."— [Surah Ar-Rum 30:21]
        </motion.p>

        {/* Surah reference */}

        {/* <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.8,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: 'easeOut',
          }}
          className="
            font-mona
            text-[7px]
            xs:text-[9px]
            text-[#684818]
            uppercase
            tracking-[0.25em]
          "
        >
          — [Surah Ar-Rum 30:21]
        </motion.span> */}
      </div>

      {/* =====================================================
          BOTTOM ROTATING MANDALA
          
          Same COMPLETE PNG is reused.

          The center of the PNG is positioned at the
          bottom edge of the screen.

          Only the upper half of the circle is visible
          inside the screen.
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[900px]
          overflow-hidden
          pointer-events-none
          z-10
        "
      >
        <motion.img
          src="/images/envelope/full_mandala.png"
          alt="Bottom Mandala"
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 0.9,
            scale: 1,
            rotate: 360,
          }}
          transition={{
            opacity: {
              duration: 1.2,
              delay: 0.15,
              ease: 'easeOut',
            },
            scale: {
              duration: 1.2,
              delay: 0.15,
              ease: 'easeOut',
            },
            rotate: {
              duration: 50,
              delay: 1.2,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          className="
            absolute
            left-1/2
            bottom-0
            w-full
            h-[900px]
            max-w-full
            -translate-x-1/2
            translate-y-1/2
            object-contain
          "
          draggable={false}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </motion.section>
  );
};

export default Verses;
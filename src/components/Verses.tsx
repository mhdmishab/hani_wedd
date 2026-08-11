import React from 'react';
import { motion } from 'framer-motion';

interface VersesProps {
  onProceed: () => void;
}

export const Verses: React.FC<VersesProps> = ({ onProceed }) => {
  return (
    <motion.section
      onClick={onProceed}
      /*
       * IMPORTANT:
       *
       * Do NOT fade the entire Verses screen.
       *
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
          
          This is separate from the text and mandalas.
          
          It starts transparent so the envelope can still
          be seen underneath.
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
          /*
           * Start fading almost immediately.
           */
          delay: 0.2,

          /*
           * Slowly cover the envelope.
           */
          duration: 3.2,

          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          TOP MANDALA
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 0.9,
          y: 0,
        }}
        transition={{
          /*
           * Starts almost immediately.
           */
          duration: 1.2,
          delay: 0.15,
          ease: 'easeOut',
        }}
        className="
          relative
          z-10
          w-full
          flex
          justify-center
          -mt-6
          md:-mt-10
          lg:-mt-12
          overflow-hidden
        "
        style={{
          height: '160px',
        }}
      >
        <motion.img
          src="/images/envelope/top_mandala.svg"
          alt="Top Mandala"
          className="
            w-full
            max-w-[280px]
            xs:max-w-[320px]
            md:max-w-[400px]
            lg:max-w-[480px]
            xl:max-w-[550px]
            h-auto
            object-contain
          "
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </motion.div>

      {/* =====================================================
          CENTER VERSE CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          flex-1
          flex
          flex-col
          justify-center
          items-center
          max-w-[340px]
          text-center
          gap-5
          xs:gap-7
          my-auto
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
            /*
             * Verse starts almost immediately.
             */
            duration: 1.1,
            delay: 0.25,
            ease: 'easeOut',
          }}
          className="
            font-cormorant
            italic
            text-[17px]
            xs:text-[19px]
            sm:text-[21px]
            text-[#4D300E]
            leading-relaxed
            font-medium
          "
        >
          "And of His signs is that He created for you from yourselves mates
          that you may find tranquility in them; and He placed between you
          affection and mercy. Indeed in that are signs for a people who give
          thought."
        </motion.p>

        {/* Surah reference */}

        <motion.span
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
            text-[10px]
            xs:text-[11px]
            text-[#684818]
            uppercase
            tracking-[0.25em]
          "
        >
          — [Surah Ar-Rum 30:21]
        </motion.span>
      </div>

      {/* =====================================================
          BOTTOM MANDALA
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 0.9,
          y: 0,
        }}
        transition={{
          /*
           * Starts almost immediately.
           */
          duration: 1.2,
          delay: 0.15,
          ease: 'easeOut',
        }}
        className="
          relative
          z-10
          w-full
          -mb-6
          md:-mb-10
          lg:-mb-16
          xl:-mb-20
        "
        style={{
          height: '310px',
        }}
      >
        <motion.img
          src="/images/envelope/bottom_mandala.svg"
          alt="Bottom Mandala"
          className="
            w-full
            h-auto
            md:max-w-[900px]
            lg:max-w-[1200px]
            xl:max-w-[1400px]
            mx-auto
          "
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Verses;
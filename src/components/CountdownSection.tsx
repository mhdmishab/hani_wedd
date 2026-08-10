import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CountdownSection: React.FC = () => {
  const targetDate = new Date('2026-08-22T10:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="countdown"
      className="relative w-full py-16 xs:py-20 sm:py-24 px-5 flex flex-col items-center justify-center overflow-hidden text-[#F2E5C7]"
      style={{
        background: 'linear-gradient(145.85deg, #4D300E 0%, #613706 47.21%, #4D300E 95.71%)'
      }}
    >
      <div className="w-full max-w-sm flex flex-col items-center text-center gap-6">
        
        {/* Header with Wing Ornaments */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2.5 w-full"
        >
          {/* Subhead flanked by 47x7 SVG wings */}
          <div className="flex items-center justify-center gap-2.5 w-full">
            {/* Left 47x7 SVG Wing (Rotated 180deg) */}
            <svg width="47" height="7" viewBox="0 0 47 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180 flex-shrink-0">
              <path d="M46.1055 2.97645C46.1055 2.97645 44.8676 -3.74633 36.418 3.01521C36.418 3.01521 44.3838 9.84548 46.1055 2.97645ZM44.1631 3.01407C44.164 3.19202 44.02 3.33686 43.8421 3.33771C43.6641 3.33856 43.5193 3.19456 43.5184 3.01662C43.5176 2.83868 43.6616 2.69355 43.8395 2.69299C44.0174 2.69242 44.1623 2.83613 44.1631 3.01407ZM38.5128 3.02765C38.5128 3.02765 39.0574 1.00409 42.9345 3.00983C42.9345 3.00983 39.3194 5.0863 38.5128 3.02765Z" fill="url(#wing_l_grad)"/>
              <defs>
                <linearGradient id="wing_l_grad" x1="36" y1="3" x2="46" y2="3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F2E5C7"/>
                  <stop offset="1" stopColor="#B8923F"/>
                </linearGradient>
              </defs>
            </svg>

            <span 
              className="font-mona font-normal text-[10px] uppercase text-[#F2E5C7] tracking-[0.10em] whitespace-nowrap"
            >
              UNTIL WE BECOME ONE
            </span>

            {/* Right 47x7 SVG Wing */}
            <svg width="47" height="7" viewBox="0 0 47 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M46.1055 2.97645C46.1055 2.97645 44.8676 -3.74633 36.418 3.01521C36.418 3.01521 44.3838 9.84548 46.1055 2.97645ZM44.1631 3.01407C44.164 3.19202 44.02 3.33686 43.8421 3.33771C43.6641 3.33856 43.5193 3.19456 43.5184 3.01662C43.5176 2.83868 43.6616 2.69355 43.8395 2.69299C44.0174 2.69242 44.1623 2.83613 44.1631 3.01407ZM38.5128 3.02765C38.5128 3.02765 39.0574 1.00409 42.9345 3.00983C42.9345 3.00983 39.3194 5.0863 38.5128 3.02765Z" fill="url(#wing_r_grad)"/>
              <defs>
                <linearGradient id="wing_r_grad" x1="36" y1="3" x2="46" y2="3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F2E5C7"/>
                  <stop offset="1" stopColor="#B8923F"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="font-vibes font-normal text-[46px] text-[#F2E5C7] leading-tight mt-1">
            Countdown to our<br />Special Day
          </h2>
        </motion.div>

        {/* 4 Timer Boxes Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-2.5 w-full max-w-[325px] mx-auto justify-items-center my-1"
        >
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={index}
              className="w-[72px] h-[72px] rounded-[14px] flex flex-col items-center justify-center gap-0.5 border border-[#7A4B13]/60 shadow-[0_8px_20px_rgba(0,0,0,0.35)] relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #3D2206 0%, #2A1502 100%)'
              }}
            >
              <span className="font-mona font-normal text-[24px] text-[#F2E5C7] leading-none">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-mona font-normal text-[8px] tracking-[0.16em] text-[#F2E5C7]/80 uppercase mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Subtitle Date */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-mona font-normal text-[14px] text-[#F2E5C7] tracking-[0.05em] text-center mt-1"
        >
          22 Aug 2026. 10:00 AM
        </motion.p>
      </div>
    </section>
  );
};

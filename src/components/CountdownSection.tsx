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
      <div className="w-full max-w-sm md:max-w-xl lg:max-w-2xl flex flex-col items-center text-center gap-6">
        
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
            {/* Left custom 47x7 SVG Wing */}
            <svg width="47" height="7" viewBox="0 0 47 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M0 2.97645C0 2.97645 1.23797 -3.74633 9.68755 3.01521C9.68755 3.01521 1.72171 9.84548 0 2.97645ZM1.94238 3.01407C1.94153 3.19202 2.08551 3.33686 2.26346 3.33771C2.4414 3.33856 2.58626 3.19456 2.5871 3.01662C2.58795 2.83868 2.44395 2.69355 2.26601 2.69299C2.08807 2.69242 1.94323 2.83613 1.94238 3.01407ZM7.59268 3.02765C7.59268 3.02765 7.04811 1.00409 3.17099 3.00983C3.17099 3.00983 6.78614 5.0863 7.59268 3.02765Z" fill="url(#cd_l_paint0_linear)"/>
              <path d="M10.3131 3.93807C10.8048 3.94005 11.2051 3.54315 11.2071 3.05119C11.2091 2.55952 10.8121 2.15921 10.3202 2.15723C9.82851 2.15525 9.4282 2.55216 9.42622 3.04412C9.42424 3.53579 9.82143 3.93609 10.3131 3.93807Z" fill="url(#cd_l_paint1_linear)"/>
              <path d="M17.153 3.96542C17.6446 3.9674 18.0449 3.57049 18.0469 3.07854C18.0489 2.58686 17.652 2.18656 17.16 2.18458C16.6684 2.1826 16.2681 2.57951 16.2661 3.07146C16.2641 3.56342 16.661 3.96344 17.153 3.96542Z" fill="url(#cd_l_paint2_linear)"/>
              <path d="M13.7376 5.4206C13.7376 5.4206 10.6913 3.06151 10.7182 3.04935C10.6916 3.0369 13.7565 0.702148 13.7565 0.702148C14.1112 1.47361 16.794 3.07028 16.7886 3.07339C16.8322 3.09885 14.0988 4.65225 13.7376 5.4206Z" fill="url(#cd_l_paint3_linear)"/>
              <path d="M39.7969 3.03571C45.2995 -1.36731 46.1055 3.01053 46.1055 3.01053C44.9844 7.48371 39.7969 3.03571 39.7969 3.03571ZM44.6299 2.8258C44.5139 2.82637 44.4203 2.92057 44.4209 3.03656C44.4214 3.15255 44.5156 3.24618 44.6316 3.24562C44.7476 3.24505 44.8412 3.15085 44.8407 3.03486C44.8404 2.91916 44.7459 2.82552 44.6299 2.8258ZM44.0406 3.03231C41.5158 1.72589 41.1613 3.04391 41.1613 3.04391C41.6867 4.38456 44.0406 3.03231 44.0406 3.03231Z" fill="url(#cd_l_paint4_linear)"/>
              <path d="M39.3914 3.63617C39.0712 3.6373 38.8106 3.37873 38.8092 3.05877C38.8081 2.73853 39.0663 2.47798 39.3866 2.47657C39.7068 2.47515 39.9674 2.73372 39.9688 3.05396C39.9702 3.3742 39.7116 3.63475 39.3914 3.63617Z" fill="url(#cd_l_paint5_linear)"/>
              <path d="M18.1515 2.75977H38.8086V3.38978H18.1515V2.75977Z" fill="url(#cd_l_paint6_linear)"/>
              <defs>
                <linearGradient id="cd_l_paint0_linear" x1="5.63405" y1="-0.556546" x2="1.67436" y2="3.32411" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_l_paint1_linear" x1="10.4619" y1="1.99312" x2="9.42278" y2="2.62802" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_l_paint2_linear" x1="17.3018" y1="2.02046" x2="16.2626" y2="2.65535" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_l_paint3_linear" x1="14.2488" y1="0.267334" x2="11.2421" y2="2.63104" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_l_paint4_linear" x1="43.4658" y1="0.709841" x2="40.8873" y2="3.23696" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_l_paint5_linear" x1="39.4836" y1="2.3697" x2="38.807" y2="2.78311" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_l_paint6_linear" x1="30.1652" y1="2.70171" x2="30.1241" y2="3.52595" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
              </defs>
            </svg>
 
            <span 
              className="font-mona font-normal text-[10px] uppercase text-[#F2E5C7] tracking-[0.10em] whitespace-nowrap"
            >
              UNTIL WE BECOME ONE
            </span>
 
            {/* Right custom 47x7 SVG Wing (Rotated 180deg) */}
            <svg width="47" height="7" viewBox="0 0 47 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180 flex-shrink-0">
              <path d="M0 2.97645C0 2.97645 1.23797 -3.74633 9.68755 3.01521C9.68755 3.01521 1.72171 9.84548 0 2.97645ZM1.94238 3.01407C1.94153 3.19202 2.08551 3.33686 2.26346 3.33771C2.4414 3.33856 2.58626 3.19456 2.5871 3.01662C2.58795 2.83868 2.44395 2.69355 2.26601 2.69299C2.08807 2.69242 1.94323 2.83613 1.94238 3.01407ZM7.59268 3.02765C7.59268 3.02765 7.04811 1.00409 3.17099 3.00983C3.17099 3.00983 6.78614 5.0863 7.59268 3.02765Z" fill="url(#cd_r_paint0_linear)"/>
              <path d="M10.3131 3.93807C10.8048 3.94005 11.2051 3.54315 11.2071 3.05119C11.2091 2.55952 10.8121 2.15921 10.3202 2.15723C9.82851 2.15525 9.4282 2.55216 9.42622 3.04412C9.42424 3.53579 9.82143 3.93609 10.3131 3.93807Z" fill="url(#cd_r_paint1_linear)"/>
              <path d="M17.153 3.96542C17.6446 3.9674 18.0449 3.57049 18.0469 3.07854C18.0489 2.58686 17.652 2.18656 17.16 2.18458C16.6684 2.1826 16.2681 2.57951 16.2661 3.07146C16.2641 3.56342 16.661 3.96344 17.153 3.96542Z" fill="url(#cd_r_paint2_linear)"/>
              <path d="M13.7376 5.4206C13.7376 5.4206 10.6913 3.06151 10.7182 3.04935C10.6916 3.0369 13.7565 0.702148 13.7565 0.702148C14.1112 1.47361 16.794 3.07028 16.7886 3.07339C16.8322 3.09885 14.0988 4.65225 13.7376 5.4206Z" fill="url(#cd_r_paint3_linear)"/>
              <path d="M39.7969 3.03571C45.2995 -1.36731 46.1055 3.01053 46.1055 3.01053C44.9844 7.48371 39.7969 3.03571 39.7969 3.03571ZM44.6299 2.8258C44.5139 2.82637 44.4203 2.92057 44.4209 3.03656C44.4214 3.15255 44.5156 3.24618 44.6316 3.24562C44.7476 3.24505 44.8412 3.15085 44.8407 3.03486C44.8404 2.91916 44.7459 2.82552 44.6299 2.8258ZM44.0406 3.03231C41.5158 1.72589 41.1613 3.04391 41.1613 3.04391C41.6867 4.38456 44.0406 3.03231 44.0406 3.03231Z" fill="url(#cd_r_paint4_linear)"/>
              <path d="M39.3914 3.63617C39.0712 3.6373 38.8106 3.37873 38.8092 3.05877C38.8081 2.73853 39.0663 2.47798 39.3866 2.47657C39.7068 2.47515 39.9674 2.73372 39.9688 3.05396C39.9702 3.3742 39.7116 3.63475 39.3914 3.63617Z" fill="url(#cd_r_paint5_linear)"/>
              <path d="M18.1515 2.75977H38.8086V3.38978H18.1515V2.75977Z" fill="url(#cd_r_paint6_linear)"/>
              <defs>
                <linearGradient id="cd_r_paint0_linear" x1="5.63405" y1="-0.556546" x2="1.67436" y2="3.32411" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_r_paint1_linear" x1="10.4619" y1="1.99312" x2="9.42278" y2="2.62802" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_r_paint2_linear" x1="17.3018" y1="2.02046" x2="16.2626" y2="2.65535" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_r_paint3_linear" x1="14.2488" y1="0.267334" x2="11.2421" y2="2.63104" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_r_paint4_linear" x1="43.4658" y1="0.709841" x2="40.8873" y2="3.23696" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_r_paint5_linear" x1="39.4836" y1="2.3697" x2="38.807" y2="2.78311" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
                <linearGradient id="cd_r_paint6_linear" x1="30.1652" y1="2.70171" x2="30.1241" y2="3.52595" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BC945D"/>
                  <stop offset="0.2784" stopColor="#966F41"/>
                  <stop offset="0.4243" stopColor="#C79B62"/>
                  <stop offset="0.5578" stopColor="#EEBD7B"/>
                  <stop offset="0.6275" stopColor="#FDCA85"/>
                  <stop offset="0.7092" stopColor="#ECBB79"/>
                  <stop offset="0.8713" stopColor="#BE935C"/>
                  <stop offset="1" stopColor="#966F41"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
 
          <h2 className="font-vibes font-normal text-[46px] md:text-[54px] lg:text-[60px] text-[#F2E5C7] leading-tight mt-1">
            Countdown to our<br />Special Day
          </h2>
        </motion.div>
 
        {/* 4 Timer Boxes Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-2.5 md:gap-4 lg:gap-5 w-full max-w-[325px] md:max-w-[400px] lg:max-w-[500px] mx-auto justify-items-center my-1"
        >
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={index}
              className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] lg:w-[100px] lg:h-[100px] rounded-[14px] flex flex-col items-center justify-center gap-0.5 border border-[#7A4B13]/60 shadow-[0_8px_20px_rgba(0,0,0,0.35)] relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #3D2206 0%, #2A1502 100%)'
              }}
            >
              <span className="font-mona font-normal text-[24px] md:text-[28px] lg:text-[34px] text-[#F2E5C7] leading-none">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-mona font-normal text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.16em] text-[#F2E5C7]/80 uppercase mt-0.5">
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

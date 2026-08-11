import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B8923F', '#89541C', '#F2E5C7']
    });
  };

  return (
    <section 
      id="rsvp"
      className="relative w-full py-12 xs:py-16 sm:py-20 px-4 xs:px-6 flex flex-col items-center justify-center bg-[#FDFBF7] overflow-hidden"
    >
      <div className="w-full max-w-[360px] xs:max-w-[380px] sm:max-w-[400px] md:max-w-[460px] flex flex-col items-center text-center">
        
        {/* Star Line Top Divider SVG (Matching Screenshot) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 w-full max-w-[260px] mb-6 xs:mb-7"
        >
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D9CEAE] to-[#D9CEAE]" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C5B48B] shrink-0">
            <path d="M12 2L13.8 10.2L22 12L13.8 13.8L12 22L10.2 13.8L2 12L10.2 10.2L12 2Z" stroke="#C5B48B" strokeWidth="1" fill="none"/>
          </svg>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#D9CEAE] to-[#D9CEAE]" />
        </motion.div>
 
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center w-full mb-7 xs:mb-8"
        >
          {/* Subhead RSVP */}
          <span 
            className="font-mona font-normal text-[11px] xs:text-[12px] text-[#684818] uppercase tracking-[0.14em] whitespace-nowrap mb-2"
          >
            RSVP
          </span>
 
          {/* Cursive Title */}
          <h2 className="font-vibes font-normal text-[48px] xs:text-[54px] sm:text-[58px] text-[#4D300E] leading-[1.08] select-none mb-3 xs:mb-4">
            Kindly Confirm<br />Your Presence
          </h2>
 
          {/* Subtitle Body */}
          <p className="font-cormorant font-normal text-[16px] xs:text-[17px] text-[#613706] max-w-[300px] xs:max-w-[320px] md:max-w-md leading-[1.4] text-center">
            Please confirm your presence by entering<br className="hidden xs:inline" />
            your name and number of guests.
          </p>
        </motion.div>
 
        {/* RSVP Form */}
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[320px] p-6 rounded-[24px] bg-[#FAF3E1] border border-[#E4D9BD] flex flex-col items-center gap-3 text-center my-2 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#89541C] text-white flex items-center justify-center text-xl">
              ✓
            </div>
            <h3 className="font-vibes text-3xl text-[#4D300E]">Thank You!</h3>
            <p className="font-cormorant text-base text-[#4D300E]">
              Your response has been saved. We look forward to celebrating together!
            </p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full max-w-[315px] xs:max-w-[330px] md:max-w-[420px] flex flex-col gap-4 xs:gap-5 text-left"
          >
            {/* Field 1: Guest Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-mona text-[11.5px] xs:text-[12px] font-normal text-[#684818]">
                Guest name
              </label>
              <input 
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-[48px] xs:h-[50px] rounded-[18px] px-4 font-mona text-[13px] text-[#4D300E] placeholder:text-[#A69372] border border-[#E4D9BD] bg-[#FAF3E1] outline-none focus:border-[#89541C] transition-colors"
              />
            </div>

            {/* Field 2: Number of guest */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-mona text-[11.5px] xs:text-[12px] font-normal text-[#684818]">
                Number of guest
              </label>
              <select 
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full h-[48px] xs:h-[50px] rounded-[18px] px-4 font-mona text-[13px] text-[#4D300E] border border-[#E4D9BD] bg-[#FAF3E1] outline-none focus:border-[#89541C] transition-colors cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2389541C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.25rem center',
                  backgroundSize: '1.1em'
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Will you attend? */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-mona text-[11.5px] xs:text-[12px] font-normal text-[#684818]">
                Will you attend?
              </label>
              <div className="grid grid-cols-2 gap-3 w-full">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'yes' })}
                  className={`h-[48px] xs:h-[50px] rounded-[18px] font-mona text-[12.5px] xs:text-[13px] font-medium transition-all cursor-pointer border ${
                    formData.attending === 'yes'
                      ? 'bg-[#89541C] text-white border-[#89541C] shadow-xs'
                      : 'bg-white border-[#E4D9BD] text-[#4D300E] hover:bg-[#FAF3E1]/60'
                  }`}
                >
                  Joyfully accept
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'no' })}
                  className={`h-[48px] xs:h-[50px] rounded-[18px] font-mona text-[12.5px] xs:text-[13px] font-medium transition-all cursor-pointer border ${
                    formData.attending === 'no'
                      ? 'bg-[#89541C] text-white border-[#89541C] shadow-xs'
                      : 'bg-white border-[#E4D9BD] text-[#4D300E] hover:bg-[#FAF3E1]/60'
                  }`}
                >
                  Regretfully decline
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-3 xs:mt-4">
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full max-w-[200px] xs:max-w-[210px] h-[44px] xs:h-[46px] rounded-full bg-[#89541C] text-white font-mona font-medium text-[13.5px] xs:text-[14px] tracking-[0.02em] flex items-center justify-center shadow-[0_4px_14px_rgba(137,84,28,0.28)] hover:bg-[#724314] transition-all cursor-pointer border-none"
                style={{ color: '#FFFFFF' }}
              >
                <span style={{ color: '#FFFFFF' }}>Submit RSVP</span>
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};


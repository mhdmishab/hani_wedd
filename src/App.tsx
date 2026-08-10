import { HeroSection } from './components/HeroSection';
import { NikkahEventSection } from './components/NikkahEventSection';
import { InvitationSection } from './components/InvitationSection';
import { ReceptionEventSection } from './components/ReceptionEventSection';
import { CountdownSection } from './components/CountdownSection';
import { RSVPSection } from './components/RSVPSection';
import { FooterSection } from './components/FooterSection';
import { motion } from 'framer-motion';

export function App() {
  return (
    <div className="min-h-screen bg-[#140C04] flex justify-center items-center font-cormorant selection:bg-[#B8923F]/20 selection:text-[#4D300E] overflow-x-hidden w-full sm:py-8 md:py-12">
      {/* Centered Luxury Digital Invitation Card Shell */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[430px] bg-[#FDFBF7] sm:rounded-[32px] sm:shadow-[0_25px_70px_rgba(0,0,0,0.75)] sm:border sm:border-[#B8923F]/40 overflow-hidden relative"
      >
        <main className="w-full flex flex-col items-center gap-8 xs:gap-12 sm:gap-16">
          <HeroSection />
          <NikkahEventSection />
          <InvitationSection />
          <ReceptionEventSection />
          <CountdownSection />
          <RSVPSection />
        </main>
        
        <FooterSection />
      </motion.div>
    </div>
  );
}

export default App;

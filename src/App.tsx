import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { NikkahEventSection } from './components/NikkahEventSection';
import { InvitationSection } from './components/InvitationSection';
import { ReceptionEventSection } from './components/ReceptionEventSection';
import { CountdownSection } from './components/CountdownSection';
import { RSVPSection } from './components/RSVPSection';
import { FooterSection } from './components/FooterSection';
import { Envelope } from './components/Envelope';
import { AudioPlayer } from './components/AudioPlayer';
import { Verses } from './components/Verses';
import { AnimatePresence } from 'framer-motion';
import { FallingLeaves } from './components/FallingLeaves';
import { useIsHanoonHaaniDomain } from './utils/domainConfig';

export function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [versesProceeded, setVersesProceeded] = useState(false);
  const isHanoonHaani = useIsHanoonHaaniDomain();

  /*
   * Lock scrolling until the user proceeds
   * from the Verses screen.
   */
  useEffect(() => {
    if (isHanoonHaani) {
      document.title = 'Hanoon & Haani — Wedding Invitation';
    } else {
      document.title = 'Haani & Hanoon — Wedding Invitation';
    }

    if (!versesProceeded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [versesProceeded, isHanoonHaani]);

  return (
    <div
      className="
        min-h-screen
        bg-[#FDFBF7]
        font-cormorant
        selection:bg-[#B8923F]/20
        selection:text-[#4D300E]
        overflow-x-hidden
        w-full
        flex
        flex-col
        justify-start
        items-center
      "
    >
      {/* =====================================================
          AUDIO
          ===================================================== */}

      {envelopeOpened && <AudioPlayer shouldPlay={envelopeOpened} />}

      {envelopeOpened && <FallingLeaves />}

      {/* =====================================================
          ENVELOPE
          ===================================================== */}

      {!versesProceeded && (
        <Envelope
          onOpen={() => {
            /*
             * IMPORTANT:
             * This happens immediately when the envelope
             * is clicked.
             */
            setEnvelopeOpened(true);
          }}
        />
      )}

      {/* =====================================================
          VERSES
          ===================================================== */}

      <AnimatePresence>
        {envelopeOpened && !versesProceeded && (
          <Verses
            onProceed={() => {
              setVersesProceeded(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN INVITATION
          ===================================================== */}

      {envelopeOpened && versesProceeded && (
        <main className="w-full flex flex-col items-center">
          <HeroSection />

          <div
            className={`
              w-full
              max-w-5xl
              mx-auto
              flex
              flex-col
              ${isHanoonHaani ? 'items-center justify-center' : 'md:flex-row md:items-stretch md:justify-center'}
              gap-4
              md:gap-8
              lg:gap-12
              px-4
              bg-[#FDFBF7]
            `}
          >
            <NikkahEventSection />
            {!isHanoonHaani && <ReceptionEventSection />}
          </div>

          <InvitationSection />

          <CountdownSection />

          <RSVPSection />

          <FooterSection />
        </main>
      )}
    </div>
  );
}

export default App;
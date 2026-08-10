import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio play error:", err);
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Royalty Free Ambient Background Music track */}
      <audio 
        ref={audioRef} 
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-piano-and-strings-112702.mp3"
      />
      
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleAudio}
        className="group relative flex items-center gap-2.5 p-3.5 bg-[#4D300E]/90 hover:bg-[#4D300E] text-[#FDCA85] border border-[#B8923F]/60 rounded-full shadow-xl backdrop-blur-md transition-colors cursor-pointer outline-none"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label="Toggle background music"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#FDCA85]" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#F2E5C7]/70" />
          )}
        </div>

        {/* Animated Equalizer Bars when playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="flex items-end gap-0.5 h-4 overflow-hidden"
            >
              {[0.4, 0.8, 0.5, 0.9, 0.3].map((heightRatio, idx) => (
                <motion.span
                  key={idx}
                  className="w-0.5 bg-[#FDCA85] rounded-full"
                  animate={{
                    height: ['20%', `${heightRatio * 100}%`, '30%'],
                  }}
                  transition={{
                    duration: 0.6 + idx * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-mona text-xs tracking-wider text-[#F2E5C7]">
          {isPlaying ? "Pause Music" : "Play Music"}
        </span>

        {/* Ambient glowing indicator aura */}
        {isPlaying && (
          <motion.span 
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-[#B8923F] pointer-events-none"
          />
        )}
      </motion.button>
    </motion.div>
  );
};


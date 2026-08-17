import React from 'react';
import { GoldOrnamentDivider } from './GoldOrnamentDivider';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { useIsHanoonHaaniDomain } from '../utils/domainConfig';

export const EventsSection: React.FC = () => {
  const isHanoonHaani = useIsHanoonHaaniDomain();
  const nikkahMapUrl = "https://maps.app.goo.gl/UZTSci4ryDEqkjGZA?g_st=icm6";
  const receptionMapUrl = "https://goo.gl/maps/1TyQjvnW9Fn673WK7?g_st=aw";

  return (
    <section id="events" className="py-16 px-4 md:py-24 max-w-5xl mx-auto flex flex-col items-center">
      {/* Header */}
      <GoldOrnamentDivider title="THE NIKKAH DAY" className="mb-4" />
      
      <h2 className="font-vibes text-5xl sm:text-6xl text-[#4D300E] text-center mb-12">
        Save the Date
      </h2>

      {/* Events Grid */}
      <div className={`grid grid-cols-1 ${isHanoonHaani ? 'max-w-md mx-auto' : 'md:grid-cols-2 max-w-4xl'} gap-8 md:gap-10 w-full`}>
        {/* Nikkah Event Card */}
        <article className="bg-gradient-to-b from-[#FBF2DD] to-[#F0E2C2] border border-[#B8923F]/40 shadow-card-soft rounded-[24px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl">
          {/* Card Top Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img 
              src="/images/nikkah_praying_couple.jpg" 
              alt="Nikkah Ceremony" 
              className="w-full h-full object-cover object-top filter brightness-95 hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#20070A]/60 via-[#1A080C]/30 to-transparent" />
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 flex flex-col items-center text-center flex-grow justify-between gap-6">
            <div className="flex flex-col items-center gap-3">
              <span 
                className="font-mona text-[10px] sm:text-xs text-[#684818] uppercase"
                style={{ letterSpacing: isHanoonHaani ? '0.22em' : '0.36em' }}
              >
                {isHanoonHaani ? 'NIKAH & RECEPTION CEREMONY AT' : 'NIKAH CEREMONY AT'}
              </span>
              <h3 className="font-playfair text-3xl sm:text-4xl font-medium text-[#2A1410]">
                {isHanoonHaani ? 'Safa Marwa' : 'Bride’s Residency'}
              </h3>
            </div>

            {/* Date & Location Badges */}
            <div className="flex flex-col items-center gap-3 font-mona text-sm text-[#684818]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#B8923F]" />
                <span>Saturday, 22 Aug 2026</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#B8923F]" />
                  <span>{isHanoonHaani ? '10:00 AM Onwards' : '10:00 AM'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#B8923F]" />
                  <span>Payyanur, Kannur</span>
                </div>
              </div>
            </div>

            {/* Solid Map Button */}
            <a 
              href={nikkahMapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-[#89541C] text-white font-inter font-medium text-sm rounded-full shadow-md hover:bg-[#684818] transition-colors duration-200"
            >
              <span>Open in map</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>
          </div>
        </article>

        {/* Reception Event Card */}
        {!isHanoonHaani && (
          <article className="bg-gradient-to-b from-[#FAF4E5] to-[#F5E8CB] border border-[#B8923F]/40 shadow-card-soft rounded-[24px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl">
            {/* Card Top Image or Stage Preview */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#2A1410]">
              <img 
                src="/images/stage_decor.jpg" 
                alt="Groom's Reception" 
                className="w-full h-full object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#20070A]/70 via-[#1A080C]/40 to-transparent" />
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex flex-col items-center text-center flex-grow justify-between gap-6">
              <div className="flex flex-col items-center gap-3">
                <span className="font-mona text-[10px] sm:text-xs tracking-[0.36em] text-[#684818] uppercase">
                  RECEPTION AT
                </span>
                <h3 className="font-playfair text-3xl sm:text-4xl font-medium text-[#2A1410]">
                  Groom’s Residency
                </h3>
              </div>

              {/* Date & Location Badges */}
              <div className="flex flex-col items-center gap-3 font-mona text-sm text-[#684818]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#B8923F]" />
                  <span>Saturday, 22 Aug 2026</span>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#B8923F]" />
                    <span>12:30 PM Onwards</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#B8923F]" />
                    <span>Eripram, Kannur</span>
                  </div>
                </div>
              </div>

              {/* Outline Map Button */}
              <a 
                href={receptionMapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-2.5 border border-[#89541C] text-[#89541C] font-inter font-medium text-sm rounded-full shadow-sm hover:bg-[#89541C] hover:text-white transition-colors duration-200"
              >
                <span>Open in map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

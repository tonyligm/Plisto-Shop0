
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Translations } from '../i18n';

interface HeroProps {
  t: Translations;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000&h=800",
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2000&h=800",
  "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2000&h=800",
  "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=2000&h=800"
];

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = window.setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    stopAutoPlay();
    setIsDragging(true);
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(x);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = x - startX;
    setOffsetX(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50; // min distance for swipe
    if (offsetX > threshold) {
      // Swipe Right (Prev)
      setCurrentIdx((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    } else if (offsetX < -threshold) {
      // Swipe Left (Next)
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }
    
    setOffsetX(0);
    startAutoPlay();
  };

  const goToSlide = (index: number) => {
    stopAutoPlay();
    setCurrentIdx(index);
    startAutoPlay();
  };

  return (
    <div 
      className="relative w-full bg-white overflow-hidden h-[300px] sm:h-[450px] lg:h-[600px] select-none touch-pan-y"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {/* Sliding Image Container */}
      <div 
        className={`flex h-full w-full transition-transform ${isDragging ? 'duration-0' : 'duration-700 ease-in-out'}`}
        style={{ transform: `translateX(calc(-${currentIdx * 100}% + ${offsetX}px))` }}
      >
        {HERO_IMAGES.map((img, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-black/5 z-10"></div>
            <img 
              className="h-full w-full object-cover pointer-events-none"
              src={img} 
              alt={`Slide ${index + 1}`} 
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIdx 
                ? 'w-12 h-1.5 bg-white shadow-lg' 
                : 'w-2.5 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 z-20 pointer-events-none">
        <button 
          onClick={(e) => { e.stopPropagation(); stopAutoPlay(); setCurrentIdx((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length); startAutoPlay(); }}
          className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white transition-all transform hover:scale-110 opacity-0 lg:opacity-100 group-hover:opacity-100"
        >
          <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); stopAutoPlay(); setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length); startAutoPlay(); }}
          className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white transition-all transform hover:scale-110 opacity-0 lg:opacity-100 group-hover:opacity-100"
        >
          <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;

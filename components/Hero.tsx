
import React, { useState, useEffect } from 'react';
import { Translations } from '../i18n';

interface HeroProps {
  t: Translations;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200&h=800",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200&h=800",
  "https://images.unsplash.com/photo-1616489953149-998175a9ee4a?auto=format&fit=crop&q=80&w=1200&h=800",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1200&h=800"
];

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Decorative Triangle Slant */}
          <svg 
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 z-10" 
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{t.heroTitle.split(' ')[0]} {t.heroTitle.split(' ')[1]}</span>{' '}
                <span className="block text-brand xl:inline">{t.heroTitle.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
                {t.heroSubtitle}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-xl shadow-lg shadow-brand/20">
                  <a href="#products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-brand hover:bg-brand-dark md:py-4 md:text-lg md:px-10 transition-all transform hover:-translate-y-0.5">
                    {t.heroExplore}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border-2 border-brand text-base font-bold rounded-xl text-brand bg-white hover:bg-brand-light md:py-4 md:text-lg md:px-10 transition-all shadow-sm">
                    {t.heroNew}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Hero Carousel Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-full relative overflow-hidden bg-gray-100">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIdx ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
          >
            <img 
              className="h-full w-full object-cover transform scale-105 animate-slow-zoom" 
              src={img} 
              alt={`Slide ${index + 1}`} 
            />
          </div>
        ))}
        
        {/* Navigation Dots Overlay */}
        <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIdx(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIdx ? 'w-8 bg-brand shadow-lg' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default Hero;

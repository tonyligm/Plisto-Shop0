
import React, { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';
import { Translations, LanguageCode } from '../i18n';

interface ProductCarouselProps {
  products: Product[];
  t: Translations;
  langCode: LanguageCode;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, t, langCode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => {
          const name = product.name[langCode] || product.name['en'];
          const desc = product.description[langCode] || product.description['en'];
          
          return (
            <div key={product.id} className="w-full flex-shrink-0">
              <div className="flex flex-col md:flex-row items-stretch min-h-[450px]">
                {/* Image Side */}
                <div className="w-full md:w-3/5 relative overflow-hidden group">
                  <img 
                    src={product.imageUrl} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  {product.isNew && (
                    <span className="absolute top-6 left-6 bg-yellow-400 text-red-600 text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg z-10">
                      {t.heroNew.split(' ')[0]}
                    </span>
                  )}
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                  <div className="space-y-6">
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-5 w-5 fill-current ${i < Math.floor(product.rating || 0) ? 'text-yellow-400' : 'text-gray-200'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-[1.1]">
                      {name}
                    </h3>
                    
                    <p className="text-lg text-gray-500 leading-relaxed">
                      {desc}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-baseline text-gray-900 font-black">
                        <span className="text-2xl">{product.currency === 'USD' ? '$' : product.currency}</span>
                        <span className="text-4xl ml-1">{product.price.toFixed(2)}</span>
                      </div>
                      
                      <button 
                        onClick={() => handleRedirect(product.externalUrl)}
                        className="px-8 py-3 bg-brand text-white font-bold rounded-2xl shadow-xl shadow-brand/30 hover:bg-brand-dark hover:scale-105 transition-all"
                      >
                        {t.buyNow}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-10 bg-brand' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

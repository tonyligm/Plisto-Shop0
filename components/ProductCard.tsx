
import React from 'react';
import { Product } from '../types';
import { Translations } from '../i18n';

interface ProductCardProps {
  product: Product;
  t: Translations;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, t, index = 0 }) => {
  const isEven = index % 2 === 0;

  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(product.externalUrl, '_blank', 'noopener,noreferrer');
  };

  const getTranslatedCategory = (cat: string) => {
    if (cat === 'Placemat') return t.categoryPlacemat;
    if (cat === 'Pillowcase') return t.categoryPillowcase;
    return cat;
  };

  return (
    <div 
      className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center group cursor-pointer transition-all duration-500 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      onClick={handleRedirect}
    >
      {/* Image Container - Fixed 4:3 Aspect Ratio */}
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-3xl bg-gray-100 shadow-sm transition-shadow group-hover:shadow-xl">
        <div className="aspect-[4/3] w-full">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {product.isNew && (
          <span className="absolute top-6 left-6 bg-brand text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            {t.heroNew.split(' ')[0]}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 space-y-6 lg:space-y-8">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-bold text-brand uppercase tracking-widest">
              {getTranslatedCategory(product.category)}
            </span>
            {product.rating && (
              <div className="flex items-center bg-yellow-50 px-2 py-0.5 rounded text-yellow-600 text-sm font-bold">
                <svg className="h-4 w-4 fill-current mr-1" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {product.rating}
              </div>
            )}
          </div>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 group-hover:text-brand transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
        </div>

        <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-normal">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <div className="flex items-baseline font-black text-gray-900">
            <span className="text-2xl">{product.currency === 'USD' ? '$' : product.currency}</span>
            <span className="text-4xl ml-1">{product.price.toFixed(2)}</span>
          </div>
          
          <button 
            className="flex-grow sm:flex-grow-0 px-10 py-4 bg-brand hover:bg-brand-dark text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-brand/30 transition-all duration-300 flex items-center justify-center space-x-3 transform group-hover:translate-y-[-2px]"
          >
            <span>{t.buyNow}</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

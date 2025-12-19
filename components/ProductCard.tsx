
import React from 'react';
import { Product } from '../types';
import { Translations } from '../i18n';

interface ProductCardProps {
  product: Product;
  t: Translations;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, t }) => {
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
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
      onClick={handleRedirect}
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-brand text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            {t.heroNew.split(' ')[0]}
          </span>
        )}
      </div>
      <div className="flex-1 p-3 sm:p-4 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{getTranslatedCategory(product.category)}</p>
          {product.rating && (
            <div className="flex items-center text-yellow-400 text-xs">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-gray-500 font-medium">{product.rating}</span>
            </div>
          )}
        </div>
        <h3 className="text-base font-bold text-gray-900 line-clamp-1 group-hover:text-brand transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2 flex-1 leading-tight">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline font-extrabold text-gray-900">
            <span className="text-lg">{product.currency === 'USD' ? '$' : product.currency}</span>
            <span className="text-xl ml-0.5">{product.price.toFixed(2)}</span>
          </div>
          <div className="p-1.5 bg-gray-50 rounded-lg text-gray-400 group-hover:bg-brand group-hover:text-white transition-colors">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

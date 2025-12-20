
import React from 'react';
import { Product } from '../types';
import { Translations, LanguageCode } from '../i18n';

interface ProductCardProps {
  product: Product;
  t: Translations;
  langCode: LanguageCode;
  isReversed?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, t, langCode, isReversed = false }) => {
  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(product.externalUrl, '_blank', 'noopener,noreferrer');
  };

  const productName = product.name[langCode] || product.name['en'];
  const productDescription = product.description[langCode] || product.description['en'];

  return (
    <div 
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 border-b border-gray-50 last:border-0 group cursor-pointer transition-colors hover:bg-white rounded-3xl px-4 md:px-8 -mx-4 md:-mx-8 ${isReversed ? 'md:flex-row-reverse' : ''}`}
      onClick={handleRedirect}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
          <img
            src={product.imageUrl}
            alt={productName}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-yellow-400 text-red-600 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm z-10">
              {t.heroNew.split(' ')[0]}
            </span>
          )}
        </div>
      </div>

      {/* Details Section - Left Aligned */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
        <div className="flex items-center justify-start gap-3 mb-4">
          {product.rating && (
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`h-5 w-5 fill-current ${i < Math.floor(product.rating || 0) ? 'text-yellow-400' : 'text-gray-200'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-500 font-bold">{product.rating}</span>
            </div>
          )}
        </div>

        <h3 className="text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-brand transition-colors leading-tight">
          {productName}
        </h3>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
          {productDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-baseline font-black text-gray-900">
            <span className="text-2xl">{product.currency === 'USD' ? '$' : product.currency}</span>
            <span className="text-4xl ml-1">{product.price.toFixed(2)}</span>
          </div>
          
          <button 
            className="px-8 py-3 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20 hover:bg-brand-dark hover:shadow-brand/40 transform hover:-translate-y-0.5 transition-all"
          >
            {t.buyNow}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { productService } from './services/productService';
import { Product } from './types';
import { translations, LanguageCode } from './i18n';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [langCode, setLangCode] = useState<LanguageCode>('en');

  const t = translations[langCode];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map(p => p.category)));
    return cats.sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const getTranslatedCategory = (cat: string) => {
    if (cat === 'Placemat') return t.categoryPlacemat;
    if (cat === 'Pillowcase') return t.categoryPillowcase;
    return cat;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onSearch={setSearchTerm} 
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        langCode={langCode}
        onLangChange={setLangCode}
        t={t}
      />
      
      <main className="flex-grow">
        {selectedCategory === 'All' && !searchTerm && <Hero t={t} />}
        
        {/* 
          Aligning with Header: 
          Header uses 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'.
          Applying the exact same classes here ensures the grid boundaries match the logo and language picker.
        */}
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? t.fullCollection : getTranslatedCategory(selectedCategory)}
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({filteredProducts.length} {t.items})
              </span>
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse flex flex-col space-y-4">
                  <div className="bg-gray-200 aspect-square rounded-xl"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} t={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">{t.noProducts}</h3>
              <p className="mt-1 text-sm text-gray-500">{t.noProductsSub}</p>
            </div>
          )}
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;


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
        
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-16 border-b border-gray-100 pb-4">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? t.fullCollection : getTranslatedCategory(selectedCategory)}
              <span className="ml-3 text-lg font-normal text-gray-400">
                ({filteredProducts.length} {t.items})
              </span>
            </h2>
          </div>

          {loading ? (
            <div className="space-y-24">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 bg-gray-200 aspect-[4/3] rounded-2xl animate-pulse"></div>
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-20 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-14 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-24 md:space-y-32">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} t={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
              <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">{t.noProducts}</h3>
              <p className="mt-2 text-gray-500">{t.noProductsSub}</p>
            </div>
          )}
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;

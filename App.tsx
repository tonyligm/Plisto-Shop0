
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

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const name = (product.name[langCode] || product.name['en']).toLowerCase();
      const desc = (product.description[langCode] || product.description['en']).toLowerCase();
      const term = searchTerm.toLowerCase();

      const matchesSearch = name.includes(term) || desc.includes(term);
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory, langCode]);

  // Grouping logic for specific categories
  const categoriesToDisplay = useMemo(() => {
    if (selectedCategory !== 'All') return [selectedCategory];
    // Order: Placemat first, then Pillowcase
    return ['Placemat', 'Pillowcase'];
  }, [selectedCategory]);

  const getTranslatedCategory = (cat: string) => {
    if (cat === 'Placemat') return t.categoryPlacemat;
    if (cat === 'Pillowcase') return t.categoryPillowcase;
    return cat;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onSearch={setSearchTerm} 
        categories={['Placemat', 'Pillowcase']} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        langCode={langCode}
        onLangChange={setLangCode}
        t={t}
      />
      
      <main className="flex-grow">
        {selectedCategory === 'All' && !searchTerm && <Hero t={t} />}
        
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <div className="space-y-12">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="animate-pulse flex flex-col md:flex-row gap-8">
                  <div className="bg-gray-200 aspect-video md:w-1/2 rounded-3xl"></div>
                  <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-24">
              {categoriesToDisplay.map((cat) => {
                const categoryProducts = filteredProducts.filter(p => p.category === cat);
                if (categoryProducts.length === 0) return null;

                return (
                  <section key={cat}>
                    <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-4">
                      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight uppercase">
                        {getTranslatedCategory(cat)}
                      </h2>
                    </div>
                    
                    <div className="space-y-12 md:space-y-0">
                      {categoryProducts.map((product, index) => (
                        <ProductCard 
                          key={product.id} 
                          product={product} 
                          t={t} 
                          langCode={langCode} 
                          isReversed={index % 2 !== 0}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}

              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">{t.noProducts}</h3>
                  <p className="mt-1 text-sm text-gray-500">{t.noProductsSub}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;

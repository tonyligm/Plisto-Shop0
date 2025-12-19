
import React, { useState, useRef, useEffect } from 'react';
import { LanguageCode, Translations } from '../i18n';

interface HeaderProps {
  onSearch: (term: string) => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  langCode: LanguageCode;
  onLangChange: (code: LanguageCode) => void;
  t: Translations;
}

const languages: { code: LanguageCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'de', label: 'Deutsch' },
];

const PlistoLogo = () => (
  <svg 
    viewBox="0 0 562.7 169.2" 
    className="h-10 sm:h-12 w-auto" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <style dangerouslySetInnerHTML={{ __html: ".st0{fill:#537FF2;}" }} />
    <g>
      <g>
        <path className="st0" d="M342.4,33.8c-5.9,2.2-8.9,8.2-7,13.9c2.8,8.6,19.4,8.7,23.6,0.3c2.5-4.9,0.9-11.5-3.1-13.7 C352.9,32.8,346,32.5,342.4,33.8z"/>
        <path className="st0" d="M297.4,40.6c-1.5,0.5-2.8,1.1-2.8,1.3c-0.3,0.4-5.3,69.3-5.3,73.3c0,8,2.6,12.7,8.6,15.9c4,2.2,14,2.2,18.2,0 c3.3-1.8,6.3-5.1,7-7.6c0.7-2.6-0.2-6.6-1.8-8.2c-1.4-1.3-1.5-1.3-3.9-0.2c-2.7,1.3-4.9,0.9-5.9-0.8c-0.3-0.7,0.4-14.2,1.9-33.6 c2.4-32.2,2.4-32.4,1.1-35.1c-2-4.1-4.4-5.5-9.9-5.7C302,39.7,299,40,297.4,40.6z"/>
        <path className="st0" d="M237.4,43.1c-11.1,1-17.8,2.2-17.8,3c0,0.4-1.3,18-2.8,39.1c-2.6,35.5-2.8,38.5-1.8,40.9 c1.9,4.5,9,6.5,16.9,4.5c1.7-0.4,3.3-1.1,3.5-1.5c0.2-0.3,0.7-4,1-8.1s0.7-8.7,0.9-10.3l0.3-2.8l5.8,0.2c21.4,0.8,38.3-15,38.3-36 c0-14.2-7-23.9-20.1-27.9C256.4,42.9,246,42.3,237.4,43.1z M253.1,62.1c4.3,2.2,6.3,6.1,6.3,12.2c0,5.3-1.4,8.8-4.7,12.3 c-3,3.1-6.7,4.2-11.7,3.6c-4.3-0.5-4,0.9-3-13.5c1-14.6,1-14.6,3.7-15.3C247.2,60.3,249.8,60.5,253.1,62.1z"/>
        <path className="st0" d="M453,46.2c-2.7,0.9-2.8,1.6-4,12.6l-0.5,5.6l-3.4,0.5c-5.3,0.7-8.2,4.2-8.2,9.7c0,5.8,0.3,6.1,5.3,6.1h4.5 v2.6c0,1.5-0.5,7.1-1,12.7c-1.9,18.9-1.3,24.8,3.2,30.1c6.4,7.8,23.4,9.1,30.9,2.5c4.2-3.7,4.7-10.2,1-13.5 c-1.3-1.1-1.6-1.2-4.3,0c-3.8,1.5-7.1,0.9-8.7-1.5c-1.4-2.2-1.4-4.8,0.1-20.1c0.5-6.1,1-11.5,1-12.1s1.6-0.8,5.5-0.8 c4.1,0,5.9-0.3,7.7-1.4c4.3-2.6,6.1-8.1,4.3-12.8c-0.6-1.8-0.7-1.8-8-1.8h-7.3V58c0-7.1-0.7-9.4-3.4-11.3 C465.3,45.3,456.4,44.9,453,46.2z"/>
        <path className="st0" d="M392.8,62.9c-3.9,1.5-4.5,2.2-4.9,6.7c-1.4,11.7-7.6,26-18.4,42.1c-7.9,11.7-8.4,13.4-5.1,16.5 c5,4.9,13.6,4.2,18.4-1.4l1.8-2.2l2.7,2.6c4,4,8.7,5.1,19,4.8c7.2-0.2,8.6-0.5,12.6-2.4c9.1-4.3,12.2-8.8,12.2-18 c0-8.5-1.7-11.4-11.7-20.8c-4.5-4.2-8.8-8.7-9.5-10c-1-1.7-1.6-4.2-2-8.6c-0.4-5.5-0.7-6.5-2.3-8.2c-1.5-1.5-2.6-1.8-5.9-2 C397.2,62,394.4,62.4,392.8,62.9z M408.5,105.7c3.8,7.8-2.8,13.9-12.3,11.3c-5.1-1.4-5.1-1.8-1.2-10.9c2-4.5,3.7-8.9,4-9.8 c0.4-1.6,0.7-1.4,4.3,2.4C405.3,100.9,407.6,104,408.5,105.7z"/>
        <path className="st0" d="M518.1,62.9c-17.8,4.3-28.6,20.4-27.3,40.8c0.9,13.2,5.1,20.6,14.7,25.4c5.3,2.6,5.7,2.7,13.9,3 c13,0.4,21.7-2.4,28.7-9.4c12.6-12.5,14.3-38.9,3.5-52.1c-2.8-3.4-9-6.8-14.2-8C532.7,61.8,522.6,61.8,518.1,62.9z M531.5,80.7 c3.9,2.4,4.7,4.9,4.7,14.3c0,8.8-0.5,11.3-3.6,15.5c-2.2,3-5.1,4.4-9.4,4.5c-4.3,0-6.5-1.5-8.6-5.5c-1.1-2.2-1.4-4-1.4-10.4 c0.1-10.6,2.2-15.4,8.4-18.7C524.5,79,528.8,79.1,531.5,80.7z"/>
        <path className="st0" d="M337.2,64.4c-1.5,0.5-2.8,1-2.9,1.2c-0.6,0.6-3.9,49.4-3.5,52.3c1.2,8.9,5.7,13.8,13.7,14.8 c9.7,1.1,16.9-5.2,15.5-13.7c-0.4-2.2-0.7-2.7-2-2.7c-0.8,0-2.2-0.6-3-1.4c-1.9-1.8-2-4.8-0.5-22.3c1.9-22.4,1.5-25.4-4-27.9 C346.9,63.1,340.9,63,337.2,64.4z"/>
      </g>
      <g>
        <path className="st0" d="M107.4,66.5c-2.7-0.9-6.1-1.4-11-1.6c-7.8-0.4-9.9,0.2-10.2,2.5c-0.3,2.1,2.1,24.4,2.7,25.8 c0.5,1,1,1.1,3.4,0.7c3.8-0.5,12.3-3.7,16.5-6.2c4.5-2.6,9.5-7.6,10.1-9.9C119.7,73.6,115,68.9,107.4,66.5z"/>
        <path className="st0" d="M152.1,29.6c-2.3-5.3-8.3-12.1-13.3-15.3c-8-5-20.7-6.7-29.5-4c-6.2,2-82,46.5-87.5,51.4 C10.2,72.1,6.7,88.2,13.2,102c2.1,4.6,16.1,22.5,28.6,36.4c15.2,17,37.7,23.4,58.1,16.5c11.5-3.9,48.1-22.4,53.2-26.9 c5.7-5.1,10.5-14.4,11.4-22.1C165.2,98.9,155.1,36.3,152.1,29.6z M133,74.9c0,4.3-0.3,5.4-1.7,8c-5.1,9.7-18.6,18.2-35.2,22.1 c-3.2,0.8-6,1.7-6.3,2.2c-0.3,0.4-0.4,2.4-0.2,4.3c0.2,2,0.5,6.8,0.9,10.8c0.9,11.3-0.3,13.8-6.8,13.7c-3.7,0-6.2-0.9-6.7-2.4 c-0.2-0.5-0.6-6-0.9-12.2s-0.7-13.9-1-17.2s-0.7-8.5-0.9-11.5c-0.7-10.5-1.9-19.1-3-20.7c-1.4-1.8-4.2-2.3-5.3-0.9 c-0.4,0.6-0.8,2.7-0.8,4.8c0,4.6-1.2,7.5-3.4,8.6c-7.7,3.9-13.4-1.6-11.3-11C53,61.6,67.7,53.4,89.2,51.9 c20.5-1.5,36.2,4,41.9,14.5C132.8,69.5,133,70.4,133,74.9z"/>
      </g>
    </g>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ 
  onSearch, 
  categories, 
  selectedCategory, 
  onSelectCategory,
  langCode,
  onLangChange,
  t
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === langCode) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTranslatedCategory = (cat: string) => {
    if (cat === 'Placemat') return t.categoryPlacemat;
    if (cat === 'Pillowcase') return t.categoryPillowcase;
    return cat;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onSelectCategory('All')}>
            <PlistoLogo />
          </div>

          {/* Navigation and Search Container */}
          <div className="flex-1 flex items-center justify-end md:justify-center px-4">
            {/* Category Links (Shop all, Placemat, Pillowcase) */}
            <nav className="hidden md:flex items-center space-x-6 mr-8">
              <button 
                onClick={() => onSelectCategory('All')}
                className={`text-sm font-semibold whitespace-nowrap tracking-tight transition-colors ${
                  selectedCategory === 'All' ? 'text-brand' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.shopAll}
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`text-sm font-semibold whitespace-nowrap tracking-tight transition-colors ${
                    selectedCategory === cat ? 'text-brand' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {getTranslatedCategory(cat)}
                </button>
              ))}
            </nav>

            {/* Search Box */}
            <div className="relative w-full max-w-xs hidden sm:block">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent rounded-full py-2 px-4 pl-10 text-sm"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Language Picker */}
          <div className="flex items-center ml-2 relative" ref={dropdownRef}>
             <button 
               onClick={() => setIsLangOpen(!isLangOpen)}
               className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
             >
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden sm:inline">{currentLang.label}</span>
                <svg className={`h-4 w-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
             </button>

             {isLangOpen && (
               <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 overflow-hidden ring-1 ring-black ring-opacity-5 animate-in fade-in slide-in-from-top-2">
                 {languages.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => {
                       onLangChange(lang.code);
                       setIsLangOpen(false);
                     }}
                     className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                       langCode === lang.code 
                         ? 'bg-brand/10 text-brand font-semibold' 
                         : 'text-gray-700 hover:bg-gray-50'
                     }`}
                   >
                     {lang.label}
                   </button>
                 ))}
               </div>
             )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

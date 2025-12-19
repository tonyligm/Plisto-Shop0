
import React from 'react';
import { Translations } from '../i18n';

interface FooterProps {
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium">{t.footerAbout}</a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium">{t.footerContact}</a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium">{t.footerShipping}</a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium">{t.footerTerms}</a>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-gray-100 py-8 flex flex-col items-center">
          <h4 className="text-gray-900 font-bold mb-6 text-lg">{t.payWith}</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {/* Visa */}
            <div className="bg-white border border-gray-200 rounded-lg p-2 h-10 w-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-full w-auto" />
            </div>
            {/* Mastercard */}
            <div className="bg-white border border-gray-200 rounded-lg p-2 h-10 w-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full w-auto" />
            </div>
            {/* UnionPay */}
            <div className="bg-white border border-gray-200 rounded-lg p-1 h-10 w-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg" alt="UnionPay" className="h-full w-auto" />
            </div>
            {/* JCB */}
            <div className="bg-white border border-gray-200 rounded-lg p-1 h-10 w-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" alt="JCB" className="h-full w-auto" />
            </div>
            {/* AMEX */}
            <div className="bg-white border border-gray-200 rounded-lg p-1 h-10 w-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="American Express" className="h-full w-auto" />
            </div>
          </div>
        </div>

        {/* Copyright and Phase info */}
        <div className="border-t border-gray-100 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6 mb-4 md:mb-0">
             {/* Social links placeholder */}
          </div>
          <div className="md:order-1">
            <p className="text-center md:text-left text-base text-gray-400">
              &copy; {new Date().getFullYear()} GlobalShop Station. {t.footerRights}
              <span className="block text-xs mt-1 font-light opacity-75">{t.footerPhase}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

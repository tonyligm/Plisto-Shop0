
import { LanguageCode } from './i18n';

export interface Product {
  id: string;
  name: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  price: number;
  currency: string;
  imageUrl: string;
  externalUrl: string; // The redirect link (AliExpress, Amazon, etc.)
  category: string;
  isNew?: boolean;
  rating?: number;
}

export interface SiteConfig {
  storeName: string;
  currencySymbol: string;
  contactEmail: string;
}

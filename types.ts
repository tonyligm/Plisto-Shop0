
export interface Product {
  id: string;
  name: string;
  description: string;
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

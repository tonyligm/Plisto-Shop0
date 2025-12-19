
export type LanguageCode = 'en' | 'ru' | 'pt' | 'es' | 'fr' | 'it' | 'tr' | 'de';

export interface Translations {
  shopAll: string;
  searchPlaceholder: string;
  heroTitle: string;
  heroSubtitle: string;
  heroExplore: string;
  heroNew: string;
  fullCollection: string;
  items: string;
  noProducts: string;
  noProductsSub: string;
  footerAbout: string;
  footerContact: string;
  footerShipping: string;
  footerTerms: string;
  footerRights: string;
  footerPhase: string;
  buyNow: string;
  categoryPlacemat: string;
  categoryPillowcase: string;
  payWith: string;
}

export const translations: Record<LanguageCode, Translations> = {
  en: {
    shopAll: 'Shop All',
    searchPlaceholder: 'Search products...',
    heroTitle: 'Premium Goods Sourced Globally',
    heroSubtitle: 'Curated collection of the finest products from around the world. Secure shopping directly from top global marketplaces.',
    heroExplore: 'Explore Now',
    heroNew: 'New Arrivals',
    fullCollection: 'Full Collection',
    items: 'items',
    noProducts: 'No products found',
    noProductsSub: 'Try searching for something else in the collection.',
    footerAbout: 'About',
    footerContact: 'Contact',
    footerShipping: 'Shipping Policy',
    footerTerms: 'Terms of Service',
    footerRights: 'All rights reserved.',
    footerPhase: 'Cross-border independent station - Phase 1 Prototype',
    buyNow: 'Buy Now',
    categoryPlacemat: 'Placemat',
    categoryPillowcase: 'Pillowcase',
    payWith: 'Pay with'
  },
  ru: {
    shopAll: 'Магазин',
    searchPlaceholder: 'Поиск товаров...',
    heroTitle: 'Товары премиум-класса со всего мира',
    heroSubtitle: 'Кураторская коллекция лучших товаров со всего мира. Безопасные покупки напрямую с ведущих мировых торговых площадок.',
    heroExplore: 'Исследовать',
    heroNew: 'Новинки',
    fullCollection: 'Полная коллекция',
    items: 'товаров',
    noProducts: 'Товары не найдены',
    noProductsSub: 'Попробуйте изменить параметры поиска.',
    footerAbout: 'О нас',
    footerContact: 'Контакты',
    footerShipping: 'Доставка',
    footerTerms: 'Условия',
    footerRights: 'Все права защищены.',
    footerPhase: 'Трансграничная независимая станция - Прототип Фазы 1',
    buyNow: 'Купить',
    categoryPlacemat: 'Салфетки',
    categoryPillowcase: 'Наволочки',
    payWith: 'Способы оплаты'
  },
  pt: {
    shopAll: 'Loja Completa',
    searchPlaceholder: 'Buscar produtos...',
    heroTitle: 'Produtos Premium de Origem Global',
    heroSubtitle: 'Coleção selecionada dos melhores produtos de todo o mundo. Compras seguras diretamente dos principais mercados globais.',
    heroExplore: 'Explorar Agora',
    heroNew: 'Novidades',
    fullCollection: 'Coleção Completa',
    items: 'itens',
    noProducts: 'Nenhum produto encontrado',
    noProductsSub: 'Tente pesquisar outra coisa na coleção.',
    footerAbout: 'Sobre',
    footerContact: 'Contato',
    footerShipping: 'Política de Envio',
    footerTerms: 'Termos de Serviço',
    footerRights: 'Todos os direitos reservados.',
    footerPhase: 'Estação independente transfronteiriça - Protótipo Fase 1',
    buyNow: 'Comprar Agora',
    categoryPlacemat: 'Jogo Americano',
    categoryPillowcase: 'Fronha',
    payWith: 'Pague com'
  },
  es: {
    shopAll: 'Tienda Todo',
    searchPlaceholder: 'Buscar productos...',
    heroTitle: 'Productos Premium de Origen Global',
    heroSubtitle: 'Colección seleccionada de los mejores productos del mundo. Compras seguras directamente desde los principales mercados globales.',
    heroExplore: 'Explorar Ahora',
    heroNew: 'Novedades',
    fullCollection: 'Colección Completa',
    items: 'artículos',
    noProducts: 'No se encontraron productos',
    noProductsSub: 'Intenta buscar otra cosa en la colección.',
    footerAbout: 'Sobre nosotros',
    footerContact: 'Contacto',
    footerShipping: 'Política de Envío',
    footerTerms: 'Términos de Servicio',
    footerRights: 'Todos los derechos reservados.',
    footerPhase: 'Estación independiente transfronteriza - Prototipo Fase 1',
    buyNow: 'Comprar ahora',
    categoryPlacemat: 'Mantel Individual',
    categoryPillowcase: 'Funda de Almohada',
    payWith: 'Pagar con'
  },
  fr: {
    shopAll: 'Tout Acheter',
    searchPlaceholder: 'Rechercher des produits...',
    heroTitle: 'Produits Premium Sourcés Globalement',
    heroSubtitle: 'Collection organisée des meilleurs produits du monde entier. Achats sécurisés directement sur les principales places de marché mondiales.',
    heroExplore: 'Explorer Maintenant',
    heroNew: 'Nouveautés',
    fullCollection: 'Collection Complète',
    items: 'articles',
    noProducts: 'Aucun produit trouvé',
    noProductsSub: 'Essayez de chercher autre chose dans la collection.',
    footerAbout: 'À Propos',
    footerContact: 'Contact',
    footerShipping: 'Politique de Livraison',
    footerTerms: 'Conditions d\'Utilisation',
    footerRights: 'Tous droits réservés.',
    footerPhase: 'Station indépendante transfrontalière - Prototype Phase 1',
    buyNow: 'Acheter',
    categoryPlacemat: 'Set de Table',
    categoryPillowcase: 'Taie d\'Oreiller',
    payWith: 'Payer avec'
  },
  it: {
    shopAll: 'Tutto lo Shop',
    searchPlaceholder: 'Cerca prodotti...',
    heroTitle: 'Prodotti Premium da Tutto il Mondo',
    heroSubtitle: 'Collezione curata dei migliori prodotti da tutto il mondo. Acquisti sicuri direttamente dai principali marketplace globali.',
    heroExplore: 'Esplora Ora',
    heroNew: 'Nuovi Arrivi',
    fullCollection: 'Collezione Completa',
    items: 'articoli',
    noProducts: 'Nessun prodotto trovato',
    noProductsSub: 'Prova a cercare qualcos\'altro nella collezione.',
    footerAbout: 'Chi Siamo',
    footerContact: 'Contatti',
    footerShipping: 'Politica di Spedizione',
    footerTerms: 'Termini di Servizio',
    footerRights: 'Tutti i diritti riservati.',
    footerPhase: 'Stazione indipendente transfrontaliera - Prototipo Fase 1',
    buyNow: 'Acquista',
    categoryPlacemat: 'Tovaglietta',
    categoryPillowcase: 'Federa',
    payWith: 'Paga con'
  },
  tr: {
    shopAll: 'Hepsini Gör',
    searchPlaceholder: 'Ürün ara...',
    heroTitle: 'Küresel Kaynaklı Premium Ürünler',
    heroSubtitle: 'Dünyanın dört bir yanından en iyi ürünlerin özenle seçilmiş koleksiyonu. Doğrudan küresel pazarlardan güvenli alışveriş.',
    heroExplore: 'Şimdi Keşfet',
    heroNew: 'Yeni Gelenler',
    fullCollection: 'Tüm Koleksiyon',
    items: 'ürün',
    noProducts: 'Ürün bulunamadı',
    noProductsSub: 'Koleksiyonda başka bir şey aramayı deneyin.',
    footerAbout: 'Hakkımızda',
    footerContact: 'İletişim',
    footerShipping: 'Nakliye Politikası',
    footerTerms: 'Kullanım Şartları',
    footerRights: 'Tüm hakları saklıdır.',
    footerPhase: 'Sınır ötesi bağımsız istasyon - Aşama 1 Prototipi',
    buyNow: 'Satın Al',
    categoryPlacemat: 'Amerikan Servis',
    categoryPillowcase: 'Yastık Kılıfı',
    payWith: 'Ödeme yöntemleri'
  },
  de: {
    shopAll: 'Alles shoppen',
    searchPlaceholder: 'Produkte suchen...',
    heroTitle: 'Premium-Waren aus aller Welt',
    heroSubtitle: 'Kuratierte Kollektion der feinsten Produkte aus der ganzen Welt. Sicherer Einkauf direkt von den führenden globalen Marktplätzen.',
    heroExplore: 'Jetzt erkunden',
    heroNew: 'Neuheiten',
    fullCollection: 'Gesamte Kollektion',
    items: 'Artikel',
    noProducts: 'Keine Produkte gefunden',
    noProductsSub: 'Versuchen Sie es mit einer anderen Suche in der Kollektion.',
    footerAbout: 'Über uns',
    footerContact: 'Kontakt',
    footerShipping: 'Versandrichtlinien',
    footerTerms: 'Nutzungsbedingungen',
    footerRights: 'Alle Rechte vorbehalten.',
    footerPhase: 'Grenzüberschreitende unabhängige Station - Phase 1 Prototyp',
    buyNow: 'Jetzt kaufen',
    categoryPlacemat: 'Platzset',
    categoryPillowcase: 'Kissenbezug',
    payWith: 'Bezahlen mit'
  }
};

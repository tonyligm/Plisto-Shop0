
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- PLACEMAT SERIES (5 Products) ---
  {
    id: 'pm-1',
    name: {
      en: 'Nordic Style Linen Placemat - Pattern A',
      ru: 'Льняная салфетка в скандинавском стиле - Узор A',
      pt: 'Jogo Americano de Linho Estilo Nórdico - Padrão A',
      es: 'Mantel Individual de Lino Estilo Nórdico - Patrón A',
      fr: 'Set de Table en Lin Style Nordique - Motif A',
      it: 'Tovaglietta in Lino Stile Nordico - Motivo A',
      tr: 'İskandinav Tarzı Keten Amerikan Servis - Desen A',
      de: 'Leinen-Platzset im nordischen Stil - Muster A'
    },
    description: {
      en: 'Heat-resistant linen placemat for elegant dining settings.',
      ru: 'Термостойкая льняная салфетка для элегантной сервировки стола.',
      pt: 'Jogo americano de linho resistente ao calor para mesas elegantes.',
      es: 'Mantel individual de lino resistente al calor para cenas elegantes.',
      fr: 'Set de table en lin résistant à la chaleur pour des repas élégants.',
      it: 'Tovaglietta in lino resistente al calore per una tavola elegante.',
      tr: 'Şık yemek masaları için ısıya dayanıklı keten amerikan servis.',
      de: 'Hitzebeständiges Leinen-Platzset für elegante Tischdekorationen.'
    },
    price: 12.99,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/placemat1/800/600',
    externalUrl: 'https://www.aliexpress.com',
    category: 'Placemat',
    isNew: true,
    rating: 4.8
  },
  {
    id: 'pm-2',
    name: {
      en: 'Waterproof PVC Gold-Stamped Placemat',
      ru: 'Водонепроницаемая салфетка из ПВХ с золотым тиснением',
      pt: 'Jogo Americano Impermeável de PVC com Estampa Dourada',
      es: 'Mantel Individual de PVC Impermeable con Estampado Dorado',
      fr: 'Set de Table Imperméable en PVC avec Marquage à l\'Or',
      it: 'Tovaglietta Impermeabile in PVC con Stampa Oro',
      tr: 'Su Geçirmez PVC Altın Baskılı Amerikan Servis',
      de: 'Wasserdichtes PVC-Platzset mit Goldprägung'
    },
    description: {
      en: 'Easy to clean, luxury gold stamping for special occasions.',
      ru: 'Легко чистится, роскошное золотое тиснение для особых случаев.',
      pt: 'Fácil de limpar, estampa dourada de luxo para ocasiões especiais.',
      es: 'Fácil de limpiar, estampado dorado de lujo para ocasiones especiales.',
      fr: 'Facile à nettoyer, marquage à l\'or de luxe pour les occasions spéciales.',
      it: 'Facile da pulire, stampa oro di lusso per occasioni speciali.',
      tr: 'Temizlemesi kolay, özel günler için lüks altın baskı.',
      de: 'Leicht zu reinigen, luxuriöse Goldprägung für besondere Anlässe.'
    },
    price: 8.50,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/placemat2/800/600',
    externalUrl: 'https://www.aliexpress.com/item/placemat-b.html',
    category: 'Placemat',
    rating: 4.7
  },
  {
    id: 'pm-3',
    name: {
      en: 'Round Braided Cotton Placemat',
      ru: 'Круглая плетеная хлопковая салфетка',
      pt: 'Jogo Americano Redondo de Algodão Trançado',
      es: 'Mantel Individual Redondo de Algodón Trenzado',
      fr: 'Set de Table Rond en Coton Tressé',
      it: 'Tovaglietta Rotonda in Cotone Intrecciato',
      tr: 'Yuvarlak Örgü Pamuklu Amerikan Servis',
      de: 'Rundes geflochtenes Baumwoll-Platzset'
    },
    description: {
      en: 'Hand-woven natural cotton for a cozy, rustic table vibe.',
      ru: 'Тканый вручную натуральный хлопок для создания уютной рустикальной атмосферы.',
      pt: 'Algodão natural tecido à mão para uma vibração de mesa rústica e aconchegante.',
      es: 'Algodón natural tejido a mano para un ambiente de mesa acogedor y rústico.',
      fr: 'Coton naturel tissé à la main pour une ambiance de table chaleureuse et rustique.',
      it: 'Cotone naturale intrecciato a mano per un\'atmosfera accogliente e rustica.',
      tr: 'Rahat ve rustik bir masa havası için el dokuması doğal pamuk.',
      de: 'Handgewebte Naturbaumwolle für ein gemütliches, rustikales Tischambiente.'
    },
    price: 15.20,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/placemat3/800/600',
    externalUrl: 'https://www.aliexpress.com/item/placemat-c.html',
    category: 'Placemat',
    rating: 4.6
  },
  {
    id: 'pm-4',
    name: {
      en: 'Elegant Lace Trimmed Placemat',
      ru: 'Элегантная салфетка с кружевной отделкой',
      pt: 'Jogo Americano Elegante com Renda',
      es: 'Mantel Individual Elegante con Encaje',
      fr: 'Set de Table Élégant avec Dentelle',
      it: 'Tovaglietta Elegante con Pizzo',
      tr: 'Zarif Dantel İşlemeli Amerikan Servis',
      de: 'Elegantes Platzset mit Spitzenbesatz'
    },
    description: {
      en: 'Vintage-inspired lace details for classic and formal dinners.',
      ru: 'Детали из кружева в винтажном стиле для классических и торжественных ужинов.',
      pt: 'Detalhes de renda de inspiração vintage para jantares clássicos e formais.',
      es: 'Detalles de encaje de inspiración vintage para cenas clásicas y formales.',
      fr: 'Détails en dentelle d\'inspiration vintage pour les dîners classiques et formels.',
      it: 'Dettagli in pizzo d\'ispirazione vintage per cene classiche e formali.',
      tr: 'Klasik ve resmi akşam yemekleri için vintage esintili dantel detayları.',
      de: 'Vintage-inspirierte Spitzendetails für klassische und formelle Abendessen.'
    },
    price: 19.99,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/placemat4/800/600',
    externalUrl: 'https://www.aliexpress.com/item/placemat-d.html',
    category: 'Placemat',
    isNew: true,
    rating: 4.9
  },
  {
    id: 'pm-5',
    name: {
      en: 'Modern Abstract Print Placemat',
      ru: 'Салфетка с современным абстрактным принтом',
      pt: 'Jogo Americano com Estampa Abstrata Moderna',
      es: 'Mantel Individual con Estampado Abstracto Moderno',
      fr: 'Set de Table à Imprimé Abstrait Moderne',
      it: 'Tovaglietta con Stampa Astratta Moderna',
      tr: 'Modern Soyut Baskılı Amerikan Servis',
      de: 'Platzset mit modernem abstraktem Druck'
    },
    description: {
      en: 'Bold artistic designs to brighten up your contemporary kitchen.',
      ru: 'Смелые художественные решения, которые украсят вашу современную кухню.',
      pt: 'Designs artísticos ousados para iluminar sua cozinha contemporânea.',
      es: 'Diseños artísticos atrevidos para alegrar tu cocina contemporánea.',
      fr: 'Des designs artistiques audacieux pour égayer votre cuisine contemporaine.',
      it: 'Design artistici audaci per ravvivare la tua cucina contemporanea.',
      tr: 'Çağdaş mutfağınızı canlandıracak cesur sanatsal tasarımlar.',
      de: 'Kühne künstlerische Designs, um Ihre moderne Küche aufzuhellen.'
    },
    price: 11.45,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/placemat5/800/600',
    externalUrl: 'https://www.aliexpress.com/item/placemat-e.html',
    category: 'Placemat',
    rating: 4.5
  },

  // --- PILLOWCASE SERIES (5 Products) ---
  {
    id: 'pc-1',
    name: {
      en: 'Luxury Silk Satin Pillowcase',
      ru: 'Роскошная шелковая атласная наволочка',
      pt: 'Fronha de Cetim de Seda de Luxo',
      es: 'Funda de Almohada de Satén de Seda de Lujo',
      fr: 'Taie d\'Oreiller de Luxe en Satin de Soie',
      it: 'Federa di Lusso in Raso di Seta',
      tr: 'Lüks İpek Saten Yastık Kılıfı',
      de: 'Luxus-Seidensatin-Kissenbezug'
    },
    description: {
      en: 'Protect your hair and skin while you sleep. Ultra-smooth finish.',
      ru: 'Защитите свои волосы и кожу во время сна. Ультрагладкая поверхность.',
      pt: 'Proteja seu cabelo e pele enquanto dorme. Acabamento ultra-suave.',
      es: 'Protege tu cabello y piel mientras duermes. Acabado ultra suave.',
      fr: 'Protégez vos cheveux et votre peau pendant votre sommeil. Finition ultra-lisse.',
      it: 'Proteggi i tuoi capelli e la tua pelle mentre dormi. Finitura ultra-liscia.',
      tr: 'Uyurken saçınızı ve cildinizi koruyun. Ultra pürüzsüz yüzey.',
      de: 'Schützen Sie Ihr Haar und Ihre Haut im Schlaf. Ultraglattes Finish.'
    },
    price: 24.99,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/pillow1/800/600',
    externalUrl: 'https://www.aliexpress.com/item/pillow-a.html',
    category: 'Pillowcase',
    isNew: true,
    rating: 4.9
  },
  {
    id: 'pc-2',
    name: {
      en: 'Velvet Soft Cushion Cover - Teal',
      ru: 'Бархатный мягкий чехол для подушки - Бирюзовый',
      pt: 'Capa de Almofada de Veludo Macio - Verde-azulado',
      es: 'Funda de Cojín de Terciopelo Suave - Verde Azulado',
      fr: 'Housse de Coussin en Velours Doux - Sarcelle',
      it: 'Fodera per Cuscino in Velluto Morbido - Ottanio',
      tr: 'Kadife Yumuşak Kırlent Kılıfı - Cam Göbeği',
      de: 'Weicher Samt-Kissenbezug - Petrol'
    },
    description: {
      en: 'Premium velvet fabric with hidden zipper closure.',
      ru: 'Высококачественная бархатная ткань с потайной застежкой-молнией.',
      pt: 'Tecido de veludo premium com fecho de zíper oculto.',
      es: 'Tejido de terciopelo de primera calidad con cierre de cremallera oculto.',
      fr: 'Tissu en velours de qualité supérieure avec fermeture éclair cachée.',
      it: 'Tessuto in velluto pregiato con chiusura a zip nascosta.',
      tr: 'Gizli fermuarlı kapamaya sahip birinci sınıf kadife kumaş.',
      de: 'Hochwertiger Samtstoff mit verdecktem Reißverschluss.'
    },
    price: 18.50,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/pillow2/800/600',
    externalUrl: 'https://www.aliexpress.com/item/pillow-b.html',
    category: 'Pillowcase',
    rating: 4.7
  },
  {
    id: 'pc-3',
    name: {
      en: 'Breathable Cotton Linen Pillowcase',
      ru: 'Дышащая хлопковая наволочка из льна',
      pt: 'Fronha de Algodão e Linho Respirável',
      es: 'Funda de Almohada de Algodón y Lino Transpirable',
      fr: 'Taie d\'Oreiller Respirante en Coton et Lin',
      it: 'Federa Traspirante in Cotone e Lino',
      tr: 'Nefes Alabilen Pamuklu Keten Yastık Kılıfı',
      de: 'Atmungsaktiver Baumwoll-Leinen-Kissenbezug'
    },
    description: {
      en: 'Natural fibers for year-round comfort and durability.',
      ru: 'Натуральные волокна для комфорта и долговечности в любое время года.',
      pt: 'Fibras naturais para conforto e durabilidade durante todo o ano.',
      es: 'Fibras naturales para comodidad y durabilidad durante todo el año.',
      fr: 'Fibres naturelles pour un confort et une durabilité tout au long de l\'année.',
      it: 'Fibre naturali per comfort e durata in ogni stagione.',
      tr: 'Yıl boyu konfor ve dayanıklılık için doğal lifler.',
      de: 'Naturfasern für ganzjährigen Komfort und Langlebigkeit.'
    },
    price: 14.80,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/pillow3/800/600',
    externalUrl: 'https://www.aliexpress.com/item/pillow-c.html',
    category: 'Pillowcase',
    rating: 4.5
  },
  {
    id: 'pc-4',
    name: {
      en: 'Cooling Bamboo Pillowcase',
      ru: 'Охлаждающая бамбуковая наволочка',
      pt: 'Fronha de Bambu com Efeito de Resfriamento',
      es: 'Funda de Almohada de Bambú Refrescante',
      fr: 'Taie d\'Oreiller Rafraîchissante en Bambou',
      it: 'Federa Rinfrescante in Bambù',
      tr: 'Serinletici Bambu Yastık Kılıfı',
      de: 'Kühlender Bambus-Kissenbezug'
    },
    description: {
      en: 'Temperature regulating bamboo fabric for hot sleepers.',
      ru: 'Терморегулирующая бамбуковая ткань для тех, кому жарко спать.',
      pt: 'Tecido de bambu com regulação de temperatura para quem sente calor ao dormir.',
      es: 'Tejido de bambú que regula la temperatura para quienes pasan calor al dormir.',
      fr: 'Tissu en bambou régulateur de température pour les dormeurs ayant chaud.',
      it: 'Tessuto in bambù termoregolatore per chi soffre il caldo durante il sonno.',
      tr: 'Sıcak uyuyanlar için sıcaklık düzenleyici bambu kumaş.',
      de: 'Temperaturregulierendes Bambusgewebe für heiße Schläfer.'
    },
    price: 21.00,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/pillow4/800/600',
    externalUrl: 'https://www.aliexpress.com/item/pillow-d.html',
    category: 'Pillowcase',
    isNew: true,
    rating: 4.8
  },
  {
    id: 'pc-5',
    name: {
      en: 'Geometric Pattern Cushion Cover',
      ru: 'Чехол для подушки с геометрическим рисунком',
      pt: 'Capa de Almofada com Padrão Geométrico',
      es: 'Funda de Cojín con Patrón Geométrico',
      fr: 'Housse de Coussin à Motif Géométrique',
      it: 'Fodera per Cuscino con Motivo Geometrico',
      tr: 'Geometrik Desenli Kırlent Kılıfı',
      de: 'Kissenbezug mit geometrischem Muster'
    },
    description: {
      en: 'Stylish accents for your living room or bedroom decor.',
      ru: 'Стильные акценты для декора вашей гостиной или спальни.',
      pt: 'Toques elegantes para a decoração da sua sala de estar ou quarto.',
      es: 'Acentos elegantes para la decoración de tu sala de estar o dormitorio.',
      fr: 'Des touches élégantes pour la décoration de votre salon ou de votre chambre.',
      it: 'Accenti di stile per l\'arredamento del tuo soggiorno o della tua camera da letto.',
      tr: 'Oturma odanız veya yatak odası dekorunuz için şık dokunuşlar.',
      de: 'Stilvolle Akzente für Ihr Wohn- oder Schlafzimmerdekor.'
    },
    price: 12.50,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/pillow5/800/600',
    externalUrl: 'https://www.aliexpress.com/item/pillow-e.html',
    category: 'Pillowcase',
    rating: 4.4
  }
];

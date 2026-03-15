export const SITE_CONFIG = {
  name: 'Le Rucher de la Gravière',
  tagline: 'Miel artisanal de Condé-en-Brie',
  description:
    'Apiculteurs passionnés à Condé-en-Brie dans l\'Aisne. Miel de tournesols, de fleurs, pain d\'épices, nougat et nougatine. Vente sur les marchés et en direct.',
  url: 'https://rucherdelagraviere.fr',
  phone: '06 51 97 72 22',
  address: '3 place de l\'Église',
  city: '02330 Condé-en-Brie',
  region: 'Aisne, Hauts-de-France',
} as const;

export const NAV_LINKS = [
  { href: '/#histoire', label: 'Notre histoire' },
  { href: '/#produits', label: 'Nos produits' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/#trouver', label: 'Nous trouver' },
] as const;

export interface Product {
  name: string;
  description: string;
  composition?: string;
  image: string;
  prices: { size: string; price: string }[];
  category: 'miel' | 'gourmandise';
}

export const PRODUCTS: Product[] = [
  {
    name: 'Miel de tournesols',
    description:
      'Onctueux et parfumé, ce miel est récolté en été dans les champs de tournesols de l\'Aisne. Idéal pour les tartines.',
    image: '/images/pot-miel.jpg',
    prices: [
      { size: '500g', price: '7,00 €' },
      { size: '250g', price: '4,00 €' },
    ],
    category: 'miel',
  },
  {
    name: 'Miel de fleurs',
    description:
      'Un miel toutes fleurs qui capture la diversité du terroir picard. Chaque récolte est unique, au gré des floraisons.',
    image: '/images/pot-miel.jpg',
    prices: [
      { size: '500g', price: '7,00 €' },
      { size: '250g', price: '4,00 €' },
    ],
    category: 'miel',
  },
  {
    name: 'Pain d\'épices nature',
    description: 'Moelleux et parfumé, préparé avec notre propre miel.',
    composition: 'Farine 34%, miel 33%, lait 33%, épices',
    image: '/images/nougatine.jpg',
    prices: [{ size: '1 pièce', price: '4,00 €' }],
    category: 'gourmandise',
  },
  {
    name: 'Pain d\'épices orange',
    description: 'Pain d\'épices moelleux, sublimé par des écorces d\'orange confites.',
    composition: 'Farine 26%, miel 26%, lait 26%, écorce d\'orange confite 22%, épices',
    image: '/images/nougatine.jpg',
    prices: [{ size: '1 pièce', price: '4,50 €' }],
    category: 'gourmandise',
  },
  {
    name: 'Nougat au miel',
    description: 'Nougat tendre fait maison avec notre miel, des amandes, noisettes et pistaches.',
    composition: 'Sucre 40%, miel 25%, amandes 19%, noisettes 7%, pistaches 7%, blanc d\'œuf 2% — poids net 120g',
    image: '/images/nougatine.jpg',
    prices: [{ size: '120g', price: '4,00 €' }],
    category: 'gourmandise',
  },
  {
    name: 'Nougatine',
    description: 'Croquante et dorée, notre nougatine aux amandes et au miel fond en bouche.',
    composition: 'Sucre 46%, amandes 38%, miel 25%, beurre 1% — poids net 150g',
    image: '/images/nougatine.jpg',
    prices: [{ size: '150g', price: '4,50 €' }],
    category: 'gourmandise',
  },
];

export const GALLERY_IMAGES = [
  { src: '/images/hero-rucher.jpg', alt: 'Apiculteurs au travail au rucher' },
  { src: '/images/abeilles-cadre.jpg', alt: 'Abeilles sur un cadre de ruche' },
  { src: '/images/hero-abeilles.jpg', alt: 'Gros plan sur les abeilles' },
  { src: '/images/marche.jpg', alt: 'Notre stand au marché de Condé-en-Brie' },
  { src: '/images/pot-miel.jpg', alt: 'Pot de miel de fleurs' },
  { src: '/images/nougatine.jpg', alt: 'Nougatine artisanale au miel' },
] as const;

export const HISTOIRE = {
  title: 'Notre histoire',
  paragraphs: [
    'Au cœur de Condé-en-Brie, dans l\'Aisne, Le Rucher de la Gravière perpétue une tradition apicole familiale. Nos abeilles butinent les tournesols et fleurs sauvages du terroir picard pour produire des miels authentiques.',
    'De la ruche au pot, tout est fait à la main, avec patience et respect des abeilles. Nous récoltons, extrayons et mettons en pot notre miel nous-mêmes, sans intermédiaire ni transformation industrielle.',
    'Retrouvez-nous sur les marchés locaux ou directement chez nous pour découvrir nos miels et gourmandises au miel : pain d\'épices, nougat et nougatine, tous préparés avec notre propre récolte.',
  ],
} as const;

export interface Market {
  name: string;
  schedule: string;
  location: string;
}

export const MARKETS: Market[] = [
  {
    name: 'Marché de Condé-en-Brie',
    schedule: '2e dimanche du mois, d\'avril à octobre',
    location: 'Condé-en-Brie',
  },
];

export function getNextMarketDate(): Date | null {
  const now = new Date();
  // Marchés = 2e dimanche, avril (3) à octobre (9)
  for (let monthOffset = 0; monthOffset <= 12; monthOffset++) {
    const d = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
    const month = d.getMonth();
    if (month < 3 || month > 9) continue; // avril=3, octobre=9
    // 2e dimanche : premier dimanche + 7
    const firstDay = d.getDay(); // 0=dim
    const firstSunday = firstDay === 0 ? 1 : 8 - firstDay;
    const secondSunday = firstSunday + 7;
    const marketDate = new Date(d.getFullYear(), month, secondSunday);
    if (marketDate >= now) return marketDate;
  }
  return null;
}

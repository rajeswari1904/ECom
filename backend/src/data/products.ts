import { Product } from '../types/product';

const createProductArt = (title: string, primary: string, secondary: string): string => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="100%" stop-color="${secondary}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)"/>
      <circle cx="250" cy="220" r="180" fill="rgba(255,255,255,0.18)"/>
      <circle cx="960" cy="650" r="220" fill="rgba(15,23,42,0.12)"/>
      <rect x="160" y="330" width="880" height="220" rx="36" fill="rgba(255,255,255,0.15)"/>
      <text x="600" y="452" text-anchor="middle" font-family="Arial, sans-serif" font-size="62" font-weight="700" fill="#ffffff">${title}</text>
      <text x="600" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="rgba(255,255,255,0.75)">ABC LED</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Smart LED Bulb 12W',
    category: 'LED Bulbs',
    badge: 'Best seller',
    stock: 'In stock',
    price: 799,
    originalPrice: 899,
    description: 'Warm white smart bulb with app and voice control for modern homes and workspaces.',
    image: createProductArt('Smart LED Bulb', '#f59e0b', '#fef3c7'),
    gallery: [
      createProductArt('Smart LED Bulb', '#f59e0b', '#fef3c7'),
      createProductArt('Warm Glow', '#fdba74', '#ffedd5'),
      createProductArt('Home Lighting', '#fbbf24', '#fef3c7'),
    ],
    rating: 4.8,
    reviews: 120,
    specs: [
      { label: 'Wattage', value: '12W' },
      { label: 'Colour', value: '2700K warm white' },
      { label: 'Compatibility', value: 'Alexa / Google Home / App' },
    ],
  },
  {
    id: 2,
    name: 'Ultra Slim Panel 24W',
    category: 'Panel Lights',
    badge: 'New',
    stock: 'Low stock',
    price: 1299,
    originalPrice: 1499,
    description: 'Premium office lighting with an ultra-slim frame, low glare, and even brightness.',
    image: createProductArt('Ultra Slim Panel', '#10b981', '#d1fae5'),
    gallery: [
      createProductArt('Ultra Slim Panel', '#10b981', '#d1fae5'),
      createProductArt('Office Glow', '#34d399', '#ecfeff'),
      createProductArt('Clean Light', '#6ee7b7', '#d1fae5'),
    ],
    rating: 4.7,
    reviews: 84,
    specs: [
      { label: 'Output', value: '24W' },
      { label: 'Finish', value: 'Matte white' },
      { label: 'Coverage', value: 'Office / retail / studio' },
    ],
  },
  {
    id: 3,
    name: 'RGB Strip Kit',
    category: 'Smart LEDs',
    badge: 'Smart',
    stock: 'In stock',
    price: 1899,
    originalPrice: 2199,
    description: 'Color-changing LED strip kit that adds mood lighting and ambiance to interiors.',
    image: createProductArt('RGB Strip Kit', '#8b5cf6', '#ede9fe'),
    gallery: [
      createProductArt('RGB Strip Kit', '#8b5cf6', '#ede9fe'),
      createProductArt('Mood Lighting', '#a78bfa', '#f5f3ff'),
      createProductArt('Color Mode', '#c4b5fd', '#ede9fe'),
    ],
    rating: 4.9,
    reviews: 96,
    specs: [
      { label: 'Length', value: '5m RGB strip' },
      { label: 'Control', value: 'Mobile app + voice' },
      { label: 'Use case', value: 'Living room / bedroom / décor' },
    ],
  },
  {
    id: 4,
    name: 'Cove Light Pro 18W',
    category: 'Smart LEDs',
    badge: 'Popular',
    stock: 'In stock',
    price: 1599,
    originalPrice: 1799,
    description: 'Elegant cove lighting for luxury interiors, studios, and hospitality projects.',
    image: createProductArt('Cove Light Pro', '#2563eb', '#dbeafe'),
    gallery: [
      createProductArt('Cove Light Pro', '#2563eb', '#dbeafe'),
      createProductArt('Ambient Glow', '#60a5fa', '#dbeafe'),
      createProductArt('Luxury Illume', '#93c5fd', '#eff6ff'),
    ],
    rating: 4.6,
    reviews: 61,
    specs: [
      { label: 'Brightness', value: '1800 lm' },
      { label: 'Finish', value: 'Soft diffuse glow' },
      { label: 'Audience', value: 'Ambience / hospitality' },
    ],
  },
  {
    id: 5,
    name: 'Streetguard Flood 50W',
    category: 'Flood Lights',
    badge: 'Outdoor',
    stock: 'In stock',
    price: 2399,
    originalPrice: 2799,
    description: 'Weatherproof floodlight designed for driveways, entrances, and exterior security.',
    image: createProductArt('Streetguard Flood', '#fb7185', '#ffe4e6'),
    gallery: [
      createProductArt('Streetguard Flood', '#fb7185', '#ffe4e6'),
      createProductArt('Security Light', '#fda4af', '#fff1f2'),
      createProductArt('Night Vision', '#f9a8d4', '#fdf2f8'),
    ],
    rating: 4.8,
    reviews: 142,
    specs: [
      { label: 'Beam', value: 'Wide-angle flood' },
      { label: 'IP rating', value: 'IP65' },
      { label: 'Use case', value: 'Outdoor / security' },
    ],
  },
  {
    id: 6,
    name: 'TubeGlow 20W',
    category: 'Tube Lights',
    badge: 'Energy saver',
    stock: 'Low stock',
    price: 1099,
    originalPrice: 1299,
    description: 'Efficient tube lighting for commercial spaces, workshops, and utility rooms.',
    image: createProductArt('TubeGlow 20W', '#14b8a6', '#ccfbf1'),
    gallery: [
      createProductArt('TubeGlow 20W', '#14b8a6', '#ccfbf1'),
      createProductArt('Workshop Light', '#2dd4bf', '#f0fdfa'),
      createProductArt('Bright Space', '#5eead4', '#ccfbf1'),
    ],
    rating: 4.5,
    reviews: 73,
    specs: [
      { label: 'Power', value: '20W' },
      { label: 'Colour', value: 'Cool white' },
      { label: 'Warranty', value: '2 years' },
    ],
  },
];

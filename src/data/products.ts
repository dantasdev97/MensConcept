import { Product } from '../types/product'

export const products: Product[] = [
  // HAIR WAXES (2 products)
  {
    id: 1,
    name: "Shine Effect Hair Wax 100ml",
    price: 14.90,
    oldPrice: 19.90,
    category: "Wax",
    description: "Achieve a polished, high-shine finish with our Shine Effect Hair Wax 100ml. Designed for modern men in Luxembourg, this wax provides flexible control, glossy texture, and long-lasting definition without greasiness. Perfect for sleek, elegant hairstyles.",
    benefits: [
      "Provides a clean, glossy shine without residue",
      "Flexible hold for everyday styling",
      "Smooth, modern fragrance suitable for all hair types",
      "Perfect for modern hairstyles",
    ],
    howToUse: "Apply a small amount to hands and style on dry or damp hair.",
    rating: 4.9,
    image: "/products/cerabrilho100ml.png",
    gallery: [
      
    ],
    tags: ["Best Seller", "Premium"],
  },
  {
    id: 2,
    name: "Matt Strong Hold Wax 100ml",
    price: 16.90,
    oldPrice: 21.90,
    category: "Wax",
    description: "Get a powerful matte finish with our Matt Strong Hold Wax 100ml. Ideal for men in Luxembourg looking for texture, volume, and all-day control. Delivers a natural look with zero shine and a strong, lasting hold.",
    benefits: [
      "Strong, long-lasting hold for structured styles",
      "Matte, natural finish with no shine",
      "No white residue",
      
    ],
    howToUse: "Apply to damp hair, distribute evenly and style as desired.",
    rating: 4.8,
    image: "/products/ceramattforte100ml.png",
    gallery: [
      "/products/shop2.png",
      "/products/wax-matte-finish-2.jpg",
    ],
    tags: ["Professional", "New"],
  },

  // SHAMPOOS (2 products)
  {
    id: 3,
    name: "Beard Shampoo 300ml",
    price: 12.90,
    category: "Shampoo",
    description: "A premium Beard Shampoo designed to cleanse, soften, and hydrate facial hair. Perfect for men in Luxembourg seeking a healthy, itch-free beard with a fresh, masculine scent. Removes impurities without stripping natural oils.",
    benefits: [
      "Deep cleansing without drying the beard",
      "Reduces itchiness and beard dandruff",
      "Softens and hydrates coarse beard hair",
      "Fresh masculine fragrance for daily use",
    ],
    howToUse: "Apply to wet hair and beard, massage gently, then rinse thoroughly.",
    rating: 4.7,
    image: "/products/shampoobarbablue300.png",
    gallery: [
      
    ],
    tags: ["Essential"],
  },
  {
    id: 4,
    name: "Hair & Beard Shampoo",
    price: 16.90,
    oldPrice: 21.90,
    category: "Shampoo",
    description: "A versatile 2-in-1 Hair & Beard Shampoo formulated for modern men in Luxembourg. Cleanses both hair and beard with balanced hydration, leaving everything fresh, soft, and easy to style.",
    benefits: [
      "Cleans hair and beard in one simple step",
      "Hydrates and reduces dryness",
      "Suitable for all hair and beard types",
      "Fresh daily-use formula with a clean scent",
    ],
    howToUse: "Apply to wet hair, massage into scalp and beard, rinse well.",
    rating: 4.8,
    image: "/products/shampoobarbablue300ml.png",
    gallery: [
      "/products/shampoo-premium.jpg",
      "/products/shampoo-premium-2.jpg",
    ],
    tags: ["Premium", "Best Seller"],
  },

  {
    id: 5,
    name: "Anti-Hair Loss Shampoo",
    price: 16.90,
    oldPrice: 21.90,
    category: "Shampoo",
    description: "A targeted Anti-Hair Loss Shampoo designed to reduce hair fall, strengthen roots, and promote healthy growth. Ideal for men in Luxembourg who want thicker, stronger, and more resilient hair.",
    benefits: [
      "Helps prevent hair loss and breakage",
      "Strengthens roots and improves scalp health",
      "Promotes thicker, fuller hair",
      "Energizing formula ideal for daily use",
    ],
    howToUse: "Apply to wet hair, massage into scalp and beard, rinse well.",
    rating: 4.8,
    image: "/products/shampooantiqueda.jpg",
    gallery: [
      "/products/shampoo-premium.jpg",
      "/products/shampoo-premium-2.jpg",
    ],
    tags: ["Premium", "Best Seller"],
  },
  // SCISSORS (2 products)
  {
    id: 6,
    name: "Professional Hair Cutting Scissors",
    price: 45.90,
    category: "Scissors",
    description: "Professional grade stainless steel scissors designed for precision hair cutting and styling.",
    benefits: [
      "Surgical stainless steel",
      "Precision cutting",
      "Comfortable grip",
      "Professional quality",
    ],
    howToUse: "Use for professional hair cutting. Clean and oil regularly for maintenance.",
    rating: 4.9,
    image: "/products/scissors-professional.jpg",
    gallery: [
      "/products/scissors-professional.jpg",
      "/products/scissors-professional-2.jpg",
    ],
    tags: ["Professional", "Essential"],
  },
  {
    id: 7,
    name: "Beard Trimming Scissors",
    price: 28.90,
    category: "Scissors",
    description: "Specialized scissors for precise beard trimming and shaping. Perfect for home and professional use.",
    benefits: [
      "Beard-specific design",
      "Precision trimming",
      "Comfortable handle",
      "Durable construction",
    ],
    howToUse: "Use for trimming and shaping beard. Clean after each use.",
    rating: 4.7,
    image: "/products/scissors-beard.jpg",
    gallery: [
      "/products/scissors-beard.jpg",
      "/products/scissors-beard-2.jpg",
    ],
    tags: ["Essential", "Popular"],
  },

  // BEARD SOFTENER SPRAYS (2 products)
  {
    id: 8,
    name: "Beard Softener Spray - Hydrating",
    price: 18.90,
    category: "Spray",
    description: "Hydrating beard softener spray that tames and softens beard hair while providing intense moisture.",
    benefits: [
      "Deep hydration",
      "Softens coarse hair",
      "Tames flyaways",
      "Long-lasting moisture",
    ],
    howToUse: "Spray evenly on clean, dry beard. Comb through for even distribution.",
    rating: 4.8,
    image: "/products/spray-hydrating.jpg",
    gallery: [
      "/products/spray-hydrating.jpg",
      "/products/spray-hydrating-2.jpg",
    ],
    tags: ["New", "Hydrating"],
  },
  {
    id: 9,
    name: "Beard Softener Spray - Oil Control",
    price: 16.90,
    oldPrice: 21.90,
    category: "Spray",
    description: "Oil-control beard softener spray that manages excess oil while keeping beard soft and manageable.",
    benefits: [
      "Oil control",
      "Softens beard",
      "Controls shine",
      "Refreshing formula",
    ],
    howToUse: "Spray on beard as needed throughout the day. Comb through for best results.",
    rating: 4.6,
    image: "/products/spray-oil-control.jpg",
    gallery: [
      "/products/spray-oil-control.jpg",
      "/products/spray-oil-control-2.jpg",
    ],
    tags: ["On Sale", "Popular"],
  },
]

// Funções auxiliares para trabalhar com os produtos
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.tags.includes("Best Seller"))
}

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.tags.includes("New"))
}

export const getProductsOnSale = (): Product[] => {
  return products.filter(product => product.oldPrice !== undefined)
}

export const getUniqueCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))]
}
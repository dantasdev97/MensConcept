import { Product } from '../types/product'

export const products: Product[] = [
  // MODELADORES
  {
    id: 1,
    name: "West Beard Oil",
    price: 14.90,
    oldPrice: 19.90,
    category: "Shampoo",
    description:
	
	
	"Fixação forte sem resíduos. Mantém o penteado impecável o dia todo.",



    benefits: [
      "Fixação forte",
      "Não deixa o cabelo oleoso",
      "Aroma masculino premium",
      "Ideal para penteados modernos",
    ],
    howToUse: "Aplique uma pequena quantidade nas mãos e modele no cabelo seco ou úmido.",
    rating: 4.9,
    image: "/products/shampoobarbablue300ml-.png",
    gallery: [
      "/products/shampoobarbablue300ml-.png",
      "/products/pomada2.jpg",
      "/products/pomada3.jpg",
    ],
    video: "/products/pomada-video.mp4",
    tags: ["Best Seller", "Premium"],
  },
  {
    id: 2,
    name: "Hair and Beard Shampoo",
    price: 12.90,
    category: "Shampoo",
    description:
	
	
	"The Biker Skull Hair and Beard Shampoo is the perfect all-in-one solution for men who value practicality and performance. Specially formulated to cleanse both hair and beard, it removes dirt, excess oil, and impurities while maintaining hydration and leaving a refreshing, clean feeling.",





    benefits: [
      "Acabamento matte",
      "Fixação média",
      "Não deixa resíduos brancos",
      "Durabilidade todo o dia",
    ],
    howToUse: "Aplique no cabelo úmido, distribua uniformemente e modele como desejar.",
    rating: 4.7,
    image: "/products/shampoobarbacabelo.png",
    gallery: [
      "/products/gel1.jpg",
      "/products/gel2.jpg",
    ],
    tags: ["New"],
  },
  {
    id: 3,
    name: "Hair and Beard Shampoo",
    price: 16.90,
    oldPrice: 21.90,
    category: "Shampoo",
    description: 
	
	"The Biker Skull Hair and Beard Shampoo is the perfect all-in-one solution for men who value practicality and performance. Specially formulated to cleanse both hair and beard, it removes dirt, excess oil, and impurities while maintaining hydration and leaving a refreshing, clean feeling.",

	
    benefits: [
      "Criação de texturas",
      "Flexibilidade no styling",
      "Aroma sofisticado",
      "Efeito duradouro",
    ],
    howToUse: "Pegue uma pequena quantidade, esfregue nas mãos e aplique no cabelo seco.",
    rating: 4.8,
    image: "/products/shampoobarbacabelo.png",
    gallery: [
      "",
      "/",
      "/",
    ],
    tags: ["Professional"],
  },

  // BARBA
  {
    id: 4,
    name: "Óleo para Barba Premium",
    price: 18.90,
    category: "Beard",
    description: "Óleo nutritivo que hidrata e dá brilho à barba.",
    benefits: [
      "Hidratação profunda",
      "Brilho natural",
      "Reduz coceira",
      "Aroma masculino intenso",
    ],
    howToUse: "Aplique algumas gotas na barba limpa, massageie e penteie.",
    rating: 4.9,
    image: "/products/oleo-barba1.jpg",
    gallery: [
      "/products/oleo-barba1.jpg",
      "/products/oleo-barba2.jpg",
    ],
    tags: ["Best Seller", "Natural"],
  },
  {
    id: 5,
    name: "Bálsamo para Barba" ,
    price: 15.90,
    oldPrice: 19.90,
    category: "Beard",
    description: "Bálsamo condicionado que suaviza e dá forma à barba.",
    benefits: [
      "Suaviza os pelos",
      "Facilita o penteado",
      "Hidratação duradoura",
      "Controle de frizz",
    ],
    howToUse: "Aplique uma pequena quantidade na barba úmida após o banho.",
    rating: 4.6,
    image: "/",
    gallery: [
      "/",
      "/",
    ],
    tags: ["On Sale"],
  },
  {
    id: 6,
    name: "Creme de Barbear Tradicional",
    price: 13.90,
    category: "Beard",
    description: "Creme cremoso para um barbear suave e confortável.",
    benefits: [
      "Proteção da pele",
      "Facilita o deslize da lâmina",
      "Hidratação instantânea",
      "Aroma clássico",
    ],
    howToUse: "Aplique uma camada fina no rosto úmido antes da barba.",
    rating: 4.8,
    image: "/products/creme-barbear1.jpg",
    gallery: [
      "/products/creme-barbear1.jpg",
      "/products/creme-barbear2.jpg",
    ],
    tags: ["Classic", "Professional"],
  },

  // PELE
  {
    id: 7,
    name: "Loção Pós-Barbear Calmante",
    price: 11.90,
    category: "Beard",
    description: "Loção refrescante que acalma a pele após o barbear.",
    benefits: [
      "Alívio instantâneo",
      "Reduz irritações",
      "Hidratação profunda",
      "Aroma refrescante",
    ],
    howToUse: "Aplique suavemente no rosto após a barba com movimentos circulares.",
    rating: 4.7,
    image: "/products/locao-pos1.jpg",
    gallery: [
      "/products/locao-pos1.jpg",
      "/products/locao-pos2.jpg",
    ],
    tags: ["Essential", "Natural"],
  },
  {
    id: 8,
    name: "Hidratante Facial Masculino",
    price: 17.90,
    oldPrice: 22.90,
    category: "Beard",
    description: "Hidratante não oleoso específico para pele masculina.",
    benefits: [
      "Hidratação 24h",
      "Absorção rápida",
      "Não deixa brilho",
      "Para todos os tipos de pele",
    ],
    howToUse: "Aplique pela manhã e à noite no rosto limpo com movimentos ascendentes.",
    rating: 4.5,
    image: "",
    gallery: [
      "/",
      "/",
    ],
    tags: ["New", "On Sale"],
  },

  // FERRAMENTAS
  {
    id: 9,
    name: "Pente de Madeira Profissional",
    price: 8.90,
    category: "Tools",
    description: "Pente de madeira resistente ideal para todos os tipos de cabelo.",
    benefits: [
      "Material natural",
      "Durabilidade extrema",
      "Dentes largos e finos",
      "Design ergonômico",
    ],
    howToUse: "Use diariamente para pentear e modelar o cabelo.",
    rating: 4.8,
    image: "",
    gallery: [
      "/",
      "/",
    ],
    tags: ["Essential", "Professional"],
  },
  {
    id: 10,
    name: "Escova para Barba Premium",
    price: 12.90,
    category: "Tools",
    description: "Escova natural perfeita para limpeza e modelagem da barba.",
    benefits: [
      "Cerdas naturais",
      "Limpeza profunda",
      "Distribui produtos uniformemente",
      "Durável",
    ],
    howToUse: "Use para aplicar óleos e bálsamos, e para pentear a barba.",
    rating: 4.6,
    image: "/products/escova-barba1.jpg",
    gallery: [
      "/products/escova-barba1.jpg",
      "/products/escova-barba2.jpg",
    ],
    tags: ["Premium"],
  },

  // KITS
  {
    id: 11,
    name: "Kit Barba Completo Premium",
    price: 39.90,
    oldPrice: 49.90,
    category: "Beard",
    description: "Kit completo com tudo que você precisa para cuidar da barba.",
    benefits: [
      "Produtos essenciais",
      "Economia no valor",
      "Qualidade profissional",
      "Para todos os tipos de barba",
    ],
    howToUse: "Siga as instruções de cada produto individualmente.",
    rating: 4.9,
    image: "/products/kit-barba1.jpg",
    gallery: [
      "/products/kit-barba1.jpg",
      "/products/kit-barba2.jpg",
      "/products/kit-barba3.jpg",
    ],
    tags: ["Best Seller", "Complete Kit"],
  },
  {
    id: 12,
    name: "Kit Cabelo + Barba Essential",
    price: 34.90,
    category: "Beard",
    description: "Kit perfeito para cuidados completos com cabelo e barba.",
    benefits: [
      "Cuidados completos",
      "Produtos compatíveis",
      "Aroma coordenado",
      "Valor acessível",
    ],
    howToUse: "Use os produtos de acordo com suas necessidades diárias.",
    rating: 4.7,
    image: "/products/kit-completo1.jpg",
    gallery: [
      "/products/kit-completo1.jpg",
      "/products/kit-completo2.jpg",
    ],
    tags: ["Popular", "Complete"],
  },

  // LANÇAMENTOS
  {
    id: 13,
    name: "Spray Fixador Invisible",
    price: 16.90,
    category: "Oil",
    description: "Spray de fixação invisível com tecnologia avançada.",
    benefits: [
      "Fixação invisível",
      "Sem resíduos",
      "Proteção térmica",
      "Durabilidade extrema",
    ],
    howToUse: "Pulverize a 20-30cm de distância e modele com as mãos.",
    rating: 4.8,
    image: "/products/spray1.jpg",
    gallery: [
      "/products/spray1.jpg",
      "/products/spray2.jpg",
    ],
    video: "/products/spray-video.mp4",
    tags: ["New", "Technology"],
  },
  {
    id: 14,
    name: "Óleo de Argan para Barba",
    price: 22.90,
    oldPrice: 27.90,
    category: "Beard",
    description: "Óleo puro de argan marroquino para barba luxuosa.",
    benefits: [
      "100% natural",
      "Hidratação intensa",
      "Brilho natural",
      "Aroma sutil",
    ],
    howToUse: "Aplique 2-3 gotas na barba diariamente.",
    rating: 4.9,
    image: "/products/argan-barba1.jpg",
    gallery: [
      "/products/argan-barba1.jpg",
      "/products/argan-barba2.jpg",
    ],
    tags: ["Premium", "Natural", "On Sale"],
  },
  {
    id: 15,
    name: "Shampoo Sólido Artesanal",
    price: 9.90,
    category: "Shampoo",
    description: "Shampoo sólido feito à mão com ingredientes naturais.",
    benefits: [
      "100% natural",
      "Sem plástico",
      "Limpeza profunda",
      "Aroma masculino",
    ],
    howToUse: "Umedeça o cabelo, esfregue o shampoo sólido e enxágue.",
    rating: 4.5,
    image: "/products/shampoo-solido1.jpg",
    gallery: [
      "/products/shampoo-solido1.jpg",
      "/products/shampoo-solido2.jpg",
    ],
    tags: ["Sustainable", "Natural"],
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
  return products.filter(product => product.tags.includes("Mais Vendido"))
}

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.tags.includes("Novo"))
}

export const getProductsOnSale = (): Product[] => {
  return products.filter(product => product.oldPrice !== undefined)
}

export const getUniqueCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))]
}

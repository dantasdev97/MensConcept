# MensConcept Products Data

This file contains organized product data for the MensConcept barbershop.

## Data Structure

### Product Interface
```typescript
interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number // Optional - for products on sale
  category: string
  description: string
  benefits: string[]
  howToUse: string
  rating: number // 0-5
  image: string // Main image path
  gallery: string[] // Image gallery array
  video?: string // Optional - product video
  tags: string[] // Tags like "Best Seller", "New", etc.
}
```

## Available Categories

- **Wax**: Hair styling waxes (2 products)
- **Shampoo**: Hair and beard shampoos (2 products)
- **Scissors**: Professional cutting tools (2 products)
- **Spray**: Beard softener sprays (2 products)

## Como Usar

### Importar todos os produtos
```typescript
import { products } from '../data/products'
```

### Importar funções auxiliares
```typescript
import {
  getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  getNewProducts,
  getProductsOnSale,
  getUniqueCategories
} from '../data/products'
```

### Usage Examples

```typescript
// All products
const allProducts = products

// Specific product by ID
const product = getProductById(1)

// Products by category
const waxes = getProductsByCategory("Wax")
const shampoos = getProductsByCategory("Shampoo")
const scissors = getProductsByCategory("Scissors")
const sprays = getProductsByCategory("Spray")

// Featured products
const featured = getFeaturedProducts()

// New products
const newProducts = getNewProducts()

// Products on sale
const onSale = getProductsOnSale()

// All available categories
const categories = getUniqueCategories()
```

## Estrutura de Arquivos

```
src/
├── data/
│   ├── products.ts     # Dados mockados e funções auxiliares
│   └── README.md       # Esta documentação
└── types/
    └── product.ts      # Interface TypeScript
```

## Next Steps

1. **Images**: Add real images in the `public/products/` folder following the naming convention
2. **Components**: Create React components to display the products
3. **Pages**: Create product/category pages
4. **Cart**: Implement shopping cart functionality
5. **API**: Connect with real backend when available

## Current Product Organization

- **2 Hair Waxes**: Strong hold and matte finish styling products
- **2 Shampoos**: Daily clean and premium hair & beard shampoos
- **2 Scissors**: Professional hair cutting and beard trimming scissors
- **2 Beard Sprays**: Hydrating and oil control beard softener sprays

All descriptions and content are in English as requested.

## Available Tags

- `Best Seller` - Popular products
- `New` - Recent releases
- `Premium` - High-quality products
- `Natural` - Natural ingredients
- `Professional` - Professional recommended
- `Essential` - Basic products
- `On Sale` - Products on promotion
- `Sustainable` - Eco-friendly products
- `Complete Kit` - Product sets
- `Popular` - Well-liked products

# Dados Mockados - Produtos MensConcept

Este arquivo contém dados mockados organizados para os produtos da barbearia MensConcept.

## Estrutura dos Dados

### Interface Product
```typescript
interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number // Opcional - para produtos em promoção
  category: string
  description: string
  benefits: string[]
  howToUse: string
  rating: number // 0-5
  image: string // Caminho da imagem principal
  gallery: string[] // Array de imagens para galeria
  video?: string // Opcional - vídeo do produto
  tags: string[] // Tags como "Mais Vendido", "Novo", etc.
}
```

## Categorias Disponíveis

- **Modeladores**: Pomadas, géis, ceras para cabelo
- **Barba**: Óleos, bálsamos, cremes para barba
- **Pele**: Loções pós-barba, hidratantes
- **Ferramentas**: Pentes, escovas, acessórios
- **Kits**: Conjuntos de produtos
- **Cuidados**: Shampoos, cuidados especiais

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

### Exemplos de uso

```typescript
// Todos os produtos
const allProducts = products

// Produto específico por ID
const product = getProductById(1)

// Produtos de uma categoria
const modeladores = getProductsByCategory("Modeladores")

// Produtos em destaque
const featured = getFeaturedProducts()

// Produtos novos
const newProducts = getNewProducts()

// Produtos em promoção
const onSale = getProductsOnSale()

// Todas as categorias disponíveis
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

## Próximos Passos

1. **Imagens**: Adicionar imagens reais na pasta `public/products/`
2. **Componentes**: Criar componentes React para exibir os produtos
3. **Páginas**: Criar página de produtos/categoria
4. **Carrinho**: Implementar funcionalidade de carrinho
5. **API**: Conectar com backend real quando disponível

## Tags Disponíveis

- `Mais Vendido` - Produtos populares
- `Novo` - Lançamentos recentes
- `Premium` - Produtos de alta qualidade
- `Natural` - Ingredientes naturais
- `Profissional` - Recomendado por profissionais
- `Essencial` - Produtos básicos
- `Promoção` - Produtos em oferta
- `Sustentável` - Produtos eco-friendly
- `Kit Completo` - Conjuntos de produtos
- `Tecnologia` - Produtos com tecnologia avançada

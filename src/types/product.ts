export interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  category: string
  description: string
  benefits: string[]
  howToUse: string
  rating: number
  image: string
  gallery: string[]
  video?: string
  tags: string[]
}


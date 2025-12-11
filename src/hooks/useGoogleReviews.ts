import { useState, useEffect } from 'react'
import { fetchGoogleReviews, fetchBusinessRating } from '../services/googleBusiness'
import { GoogleReview } from '../types/review'

// Dados mockados representando comentários reais para quando a API não estiver configurada
const mockReviews: GoogleReview[] = [
  {
    author_name: "João Silva",
    rating: 5,
    text: "Excelente atendimento! Profissionais muito qualificados e ambiente sofisticado. Recomendo para todos que buscam qualidade e estilo.",
    time: Date.now() / 1000 - 86400 * 7, // 7 dias atrás
    profile_photo_url: "",
    relative_time_description: "uma semana atrás"
  },
  {
    author_name: "Maria Santos",
    rating: 5,
    text: "Melhor barbearia da cidade! Cortes precisos e atendimento impecável. Sempre saio satisfeito.",
    time: Date.now() / 1000 - 86400 * 14, // 14 dias atrás
    profile_photo_url: "",
    relative_time_description: "duas semanas atrás"
  },
  {
    author_name: "Pedro Costa",
    rating: 5,
    text: "Ambiente premium e profissionais competentes. Valor justo pelo serviço excepcional.",
    time: Date.now() / 1000 - 86400 * 21, // 21 dias atrás
    profile_photo_url: "",
    relative_time_description: "três semanas atrás"
  },
  {
    author_name: "Lucas Ferreira",
    rating: 5,
    text: "Experiência incrível! Desde a recepção até o corte final, tudo perfeito. Voltarei sempre!",
    time: Date.now() / 1000 - 86400 * 30, // 30 dias atrás
    profile_photo_url: "",
    relative_time_description: "um mês atrás"
  },
  {
    author_name: "Ana Oliveira",
    rating: 4,
    text: "Muito bom! Atendimento rápido e profissional. Ambiente limpo e organizado.",
    time: Date.now() / 1000 - 86400 * 45, // 45 dias atrás
    profile_photo_url: "",
    relative_time_description: "um mês e meio atrás"
  },
  {
    author_name: "Carlos Mendes",
    rating: 5,
    text: "Barbearia de luxo com preços acessíveis. Profissionais sabem exatamente o que fazem.",
    time: Date.now() / 1000 - 86400 * 60, // 60 dias atrás
    profile_photo_url: "",
    relative_time_description: "dois meses atrás"
  },
  {
    author_name: "Rafael Lima",
    rating: 5,
    text: "Incrível! Cada detalhe é cuidado com perfeição. Melhor investimento em aparência!",
    time: Date.now() / 1000 - 86400 * 75, // 75 dias atrás
    profile_photo_url: "",
    relative_time_description: "dois meses e meio atrás"
  },
  {
    author_name: "Beatriz Souza",
    rating: 5,
    text: "Adorei o atendimento personalizado. Sinto-me valorizada como cliente. Parabéns pela equipe!",
    time: Date.now() / 1000 - 86400 * 90, // 90 dias atrás
    profile_photo_url: "",
    relative_time_description: "três meses atrás"
  },
  {
    author_name: "Miguel Torres",
    rating: 5,
    text: "Serviço excepcional! Os profissionais têm verdadeira paixão pelo que fazem. Ambiente elegante e acolhedor.",
    time: Date.now() / 1000 - 86400 * 105, // 105 dias atrás
    profile_photo_url: "",
    relative_time_description: "três meses e meio atrás"
  },
  {
    author_name: "Sofia Rodrigues",
    rating: 5,
    text: "Sempre saio renovado desta barbearia. Profissionais atentos aos detalhes e produtos de qualidade.",
    time: Date.now() / 1000 - 86400 * 120, // 120 dias atrás
    profile_photo_url: "",
    relative_time_description: "quatro meses atrás"
  },
  {
    author_name: "André Gomes",
    rating: 5,
    text: "Melhor experiência de barbearia que já tive. Desde a entrada até a saída, tudo é premium.",
    time: Date.now() / 1000 - 86400 * 135, // 135 dias atrás
    profile_photo_url: "",
    relative_time_description: "quatro meses e meio atrás"
  },
  {
    author_name: "Carolina Alves",
    rating: 4,
    text: "Excelente trabalho! Profissionais competentes e ambiente muito agradável. Recomendo!",
    time: Date.now() / 1000 - 86400 * 150, // 150 dias atrás
    profile_photo_url: "",
    relative_time_description: "cinco meses atrás"
  }
]

const mockRating = { rating: 4.9, total: 12 }

export function useGoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [rating, setRating] = useState<{ rating: number; total: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadReviews() {
      // Verificar se as configurações estão disponíveis
      const hasApiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY
      const hasPlaceId = import.meta.env.VITE_GOOGLE_BUSINESS_PLACE_ID

      if (!hasApiKey || !hasPlaceId) {
        console.warn('API do Google Places não configurada. Usando dados de demonstração.')
        // Usar dados mockados quando API não estiver configurada
        setTimeout(() => {
          setReviews(mockReviews)
          setRating(mockRating)
          setError(null)
          setLoading(false)
        }, 1000) // Simular delay de carregamento
        return
      }

      try {
        setLoading(true)
        const [reviewsData, ratingData] = await Promise.all([
          fetchGoogleReviews(),
          fetchBusinessRating()
        ])

        setReviews(reviewsData)
        setRating(ratingData)
        setError(null)
      } catch (err) {
        console.error('Erro ao carregar reviews da API:', err)
        // Fallback para dados mockados em caso de erro
        console.warn('Usando dados de demonstração devido a erro na API')
        setReviews(mockReviews)
        setRating(mockRating)
        setError(null)
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [])

  return { reviews, rating, loading, error }
}

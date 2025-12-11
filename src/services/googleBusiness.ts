import { GOOGLE_BUSINESS_CONFIG } from '../config/googleBusiness'
import { GoogleReview } from '../types/review'

const API_BASE_URL = import.meta.env.DEV
  ? '/api/google-places/place'
  : '/api/google-reviews'

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  // Verificar se as variáveis estão definidas e não são vazias
  const apiKey = GOOGLE_BUSINESS_CONFIG.API_KEY?.trim()
  const placeId = GOOGLE_BUSINESS_CONFIG.PLACE_ID?.trim()

  if (!apiKey || !placeId) {
    console.warn('Configuração do Google Business incompleta - retornando array vazio')
    console.warn('API Key:', apiKey ? 'definida' : 'não definida')
    console.warn('Place ID:', placeId ? 'definido' : 'não definido')
    return []
  }

  try {
    const url = import.meta.env.DEV
      ? `${API_BASE_URL}/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&reviews_sort=newest`
      : `${API_BASE_URL}?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&reviews_sort=newest`
    console.log('Fazendo requisição para Google Places API...')
    console.log('URL:', import.meta.env.DEV ? url : url.replace(apiKey, 'API_KEY_OCULTA'))

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    console.log('Status da resposta:', response.status)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Dados recebidos da API:', data)

    // Em produção (Vercel Function), os dados já vêm processados
    if (import.meta.env.PROD) {
      if (data.error) {
        throw new Error(`API Error: ${data.error}`)
      }
      console.log('Reviews encontradas:', data.result?.reviews?.length || 0)
      return data.result?.reviews || []
    }

    // Em desenvolvimento (proxy direto), verificar status da API do Google
    if (data.status !== 'OK') {
      console.error('Erro na API do Google Places:', data.status, data.error_message)
      throw new Error(`API Error: ${data.status}`)
    }

    console.log('Reviews encontradas:', data.result?.reviews?.length || 0)
    return data.result.reviews || []
  } catch (error) {
    console.error('Erro ao buscar reviews:', error)
    // Em caso de erro, retorna array vazio em vez de lançar erro
    return []
  }
}

export async function fetchBusinessRating(): Promise<{ rating: number; total: number } | null> {
  try {
    const reviews = await fetchGoogleReviews()
    if (reviews.length === 0) return null

    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

    return {
      rating: Math.round(avgRating * 10) / 10,
      total: reviews.length
    }
  } catch (error) {
    console.error('Erro ao calcular rating:', error)
    return null
  }
}

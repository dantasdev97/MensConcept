export const GOOGLE_BUSINESS_CONFIG = {
  API_KEY: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
  PLACE_ID: import.meta.env.VITE_GOOGLE_BUSINESS_PLACE_ID
}

// Validação das variáveis de ambiente
if (!GOOGLE_BUSINESS_CONFIG.API_KEY) {
  console.warn('VITE_GOOGLE_PLACES_API_KEY não está definida no .env')
}

if (!GOOGLE_BUSINESS_CONFIG.PLACE_ID) {
  console.warn('VITE_GOOGLE_BUSINESS_PLACE_ID não está definida no .env')
}

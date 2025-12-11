export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY
    const placeId = process.env.VITE_GOOGLE_BUSINESS_PLACE_ID

    if (!apiKey || !placeId) {
      return res.status(500).json({
        error: 'API configuration missing',
        apiKey: !!apiKey,
        placeId: !!placeId
      })
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&reviews_sort=newest`

    console.log('Fetching from Google Places API...')

    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(`Google API Error: ${response.status}`)
    }

    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    res.status(500).json({
      error: 'Failed to fetch reviews',
      details: error.message
    })
  }
}

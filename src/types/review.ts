export interface GoogleReview {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string
  relative_time_description: string
}

export interface GoogleBusinessData {
  reviews: GoogleReview[]
  rating: number
  user_ratings_total: number
}



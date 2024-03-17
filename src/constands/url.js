import { API_KEY } from "./constants";

export const TopRighted=`/movie/top_rated?api_key=${API_KEY}`
export const TrendingNow =`/trending/movie/week?api_key=${API_KEY}`
export const Animated=`/discover/movie?api_key=${API_KEY}&with_genres=16`
export const Action=`discover/movie?api_key=${API_KEY}&with_genres=28`


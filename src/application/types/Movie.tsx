export interface Movie {
  id: number
  title: string
  description: string
  images: {posterArt: {url: string; height: number; width: number}}
  releaseYear: string
}

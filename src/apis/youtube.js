import axios from 'axios'

const KEY = 'AIzaSyCuRoBSIesKC6PLj2xwnVzqez0Ne3xBORw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
